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

    const parseElement = (num, tag) => {
        console.log(tag)
        // image
        if (tag === "blog-solo-image") {
            return (<img className="blog-solo-image" src={item.content[num].imageCuri} alt={item.content[num].imageDescription} referrerPolicy="no-referrer"/>)
        }
        if (item.className[num] === "blog-image") {
            return (<img className="blog-inline-image" src={item.content[num].imageCuri} alt={item.content[num].imageDescription} referrerPolicy="no-referrer"/>)
        }
        // link
        if (item.className[num] === "link") {
            return (<a className="blog-link" href={item.content[num].link} target="_blank">{item.content[num].text}</a>)
        }
        if (item.className[num] === "bold") {
            return (<strong className="bold">{item.content[num]}</strong>)
        }
        if (item.className[num] === "italics"){
            return(<i className="bold"> {item.content[num]}</i>)
        }
        // text element
        return (React.createElement(
            tag,
            {className: item.className[num]},
            item.content[num]
        ))
    }


    // add single component element
    if (item.className.length === 1) {
        let tag = parseTag(item.style)
        if (item.className[0] === "blog-image") {
            tag = "blog-solo-image"
        }
        return parseElement(0, tag)
    };

    const contentList = []

    for (let i = 0; i < item.className.length; i++) {
        let tag = "span"
        contentList.push(parseElement(i, tag))
    }

    // add multi component element 

    let tag = parseTag(item.style);
    return (React.createElement (
        tag,
        {className: "blog-multi-element-container"},
        contentList
    ))
}

