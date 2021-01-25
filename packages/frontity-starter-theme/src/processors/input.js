import React, { useEffect, useState } from "react";

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

const Input = ({ value: defaultValue, ...props }) => {
    const [ value, setValue ] = useState(defaultValue || "")
    useEffect(() => {
        const clear  = () => setValue("")
        window.addEventListener("formSent", clear)
        return () => window.removeEventListener("formSent", clear)
    }, [])
    return (<input value={value} onChange={e => setValue(e.target.value)} {...props} />)
};