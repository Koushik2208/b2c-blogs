"use client"; // This marks the component as a client component

import { useEffect, useState } from "react";

export default function HtmlParser({ data }) {
  const [parsedHtml, setParsedHtml] = useState(null);

  useEffect(() => {
    // Parse the HTML content safely when the component mounts
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    // Render the parsed content using outerHTML
    setParsedHtml(doc.body.innerHTML);
  }, [data]);

  return <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />;
}
