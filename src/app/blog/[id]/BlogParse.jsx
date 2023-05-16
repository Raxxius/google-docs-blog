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
        style === "SUBTITLE"
        ?
        "legend"
        :
        "p"
        )
    };

    const parseElement = (num, tag) => {
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

        item.className[num] === "bold"
        ?
        tag = "strong"
        :
        item.className[num] === "italics"
        ?
        tag = "i"
        :
        tag = tag

        let className = item.className[num]

        // specific coding to add legend className to picture legends.
        if (tag === "legend") {
            className = tag
            tag = "p"
        }

        // generic return element h1, h2, h3, etc
        return (React.createElement(
            tag,
            {className: className},
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

