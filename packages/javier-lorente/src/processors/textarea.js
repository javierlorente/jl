import React, { useEffect, useRef } from "react";

const proccesor = {
  name: "textarea",
  priority: 9,
  test: ({ node }) => node.component === "textarea",
  processor: ({ node }) => {
    node.component = Textarea;
    return node;
  },
};

export default proccesor;

const Textarea = ({ value, ...props }) => {
  const textareaRef = useRef();
  useEffect(() => {
    const clear = () => (textareaRef.current.value = "");

    window.addEventListener("formSent", clear);
    return () => window.removeEventListener("formSent", clear);
  }, []);
  return <textarea ref={textareaRef} defaultValue={value} {...props} />;
};
