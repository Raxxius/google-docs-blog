import { content } from "googleapis/build/src/apis/content";
import React from "react"

export default function BlogParse(item) {
    const parseTag = (style) => {
        return (
        style === "HEADING_1" 
        ?
        "h1"
        :
        style === "HEADING_2"
        ?
        "h2"
        :
        style === "HEADING_3"
        ?
        "h3"
        :
        "p"
        )
    };
    const tag = parseTag(item.style);

    // add single component element
    if (item.className.length === 1) {
        // image
        if (item.className[0] === "blog-image") {
            return (<img className={item.className[0]} src={item.content[0].imageCuri} alt={item.content[0].imageDescription} referrerPolicy="no-referrer"/>)
        }

        // link
        if (item.className[0] === "link") {
            return (<a classname="blog-link" href={item.content[0].link} target="_blank">{item.content[0].text}</a>)
        }
        // text element
        return (React.createElement(
            tag,
            {className: item.className[0]},
            item.content[0]
        ))
    };

    const contentList = []

    for (let i = 0; i < item.className.length; i++) {
    /** contentList.push(React.createElement(
            tag,
            {className: item.className[i]},
            item.content[i]
        ))
    */
    }

    // add multi component element 
    return <div className="multi-element">{contentList}</div>
    

    console.log(contentList)

    return
}

