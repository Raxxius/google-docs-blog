"use client";

import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";

export default function PrismBlock(code) {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, []);
  
  return (
    <pre>
        <code className="language-javascript">
            {code.code}
        </code>
    </pre>
  )

}
