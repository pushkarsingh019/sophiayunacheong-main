import React from "react";

export default function Button({ text, variant, redirect }) {
  return (
    <a href={redirect} className={variant}>
      {text}
    </a>
  );
}
