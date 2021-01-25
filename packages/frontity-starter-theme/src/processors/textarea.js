import React, { useEffect, useState } from "react";

const proccesor = {
    name: "textarea",
    priority: 9,
    test: ({ node }) =>
      node.component === "textarea",
    processor: ({ node }) => {
      node.component = Textarea;
      return node;
    }
  };
  
  export default proccesor;
  
  const Textarea = ({ value: defaultValue, ...props }) => {
    const [ value, setValue ] = useState(defaultValue || "")
    useEffect(() => {
        const clear  = () => setValue("")
        window.addEventListener("formSent", clear)
        return () => window.removeEventListener("formSent", clear)
    }, [])
  return (<textarea value={value} onChange={ e => setValue(e.target.value)} {...props} />)
};