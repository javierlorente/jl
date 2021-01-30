import React, { useRef, useEffect } from "react";

const proccesor = {
  name: "input",
  priority: 9,
  test: ({ node }) =>
    node.component === "input" && (node.props.type === "email" || node.props.type ===  "text" || node.props.type ===  "tel" ),
  processor: ({ node }) => {
    node.component = Input;
    return node;
  }
};

export default proccesor;

const Input = ({ value, ...props }) => {
    const inputRef = useRef()
    useEffect(() => {
        const clear  = () => inputRef.current.value = ""
        
        window.addEventListener("formSent", clear)
        return () => window.removeEventListener("formSent", clear)
    }, [])
    return (<input ref={inputRef} defaultValue={value} {...props}/>)
};