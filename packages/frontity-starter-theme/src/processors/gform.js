import React, { useRef, useState } from "react";
import { Box } from "theme-ui";

const proccesor = {
    name: "gform",
    priority: 10,
    test: ({ node }) =>
      node.component === "form" && node.props.id.startsWith("gform_"),
    processor: ({ node }) => {
      node.props.formId = getFormId(node.props.id);
      node.component = Form;
      return node;
    }
};

export default proccesor;

const getFormId = name => name.match(/\d+/)[0]

const Form = ({children, formId, ...props}) => {
    const formRef = useRef()
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const onSuccess = (message) => {
        setSuccessMessage(message)
        const event = new Event("formSent")
        window.dispatchEvent(event)
    }
    const onError = (errors) => {
        const capitalize = word =>  word[0].toUpperCase() + word.slice(1);
        
        const messages = [...new Set(Object.values(errors))];
        const messagesNormalized = messages.map(message => message.toLowerCase())
                                            .join(", ")
                                            .replaceAll(".,", ",")
                                            .replaceAll("este campo es obligatorio", "los campos con asterisco son obligatorios")
        setErrorMessage(capitalize(messagesNormalized))
    }

    const sendForm = () => {
    const body = new URLSearchParams(new FormData(formRef.current));
    const options = { method: 'post', body };
    return fetch(`https://frontity.javierlorente.es/wp-json/gf/v2/forms/${formId}/submissions`, options).then( e =>  e.json())
    }

    const hanldeSubmit = event => {
    event.preventDefault()

    sendForm()
        .then(e => {
            if(e.is_valid) {
                onSuccess(e.confirmation_message)
            } else {
                onError(e.validation_messages)
            }
        }).catch( e => {
            console.log("error:", e);
            onError({1: "Ha ocurrido un error inesperado, intentalo más tarde"});
        })
    }
    return (<form ref={formRef} onSubmit={hanldeSubmit} {...props}>
        {children}
        { successMessage && 
        <div style={{ paddingTop: "1.5rem", fontWeight: "bold"}} dangerouslySetInnerHTML={{ __html: successMessage }} />
        }
        { errorMessage && 
        <div style={{ paddingTop: "1.5rem", fontWeight: "bold", color: "#B71C29"}} dangerouslySetInnerHTML={{ __html: errorMessage }} />
        }
    </form>)
}
