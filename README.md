# Google Docs Blog

A Fullstack project designed with Google Apps (Drive, Sheets, Docs), Google Apps Script and Next.js JAMstack

![responsivelayout](/_readme/responsive-layout.png "responsive layout")

## Table of Contents

## Project Overview

The "Google Docs Blog" is a JAMstack project that utilizes various Google Apps, including Google Drive, Sheets, and Docs, along with Google Apps Script for scripting capabilities. The project's primary goal is to create a dynamic and easily maintainable blog using familiar Google tools.

Key Features:

Backend hosted entirely within the Google framework: Data is stored in Sheets and Docs in Drive folders, and Google Apps Script provides JavaScript service functions for easy content management and collaboration.
Automatic generation of blog pages from Google Docs data using Google Apps Script.
Blog index file maintained in Google Sheets for front-page loading.
Frontend development powered by Next.js, ensuring a fast and interactive user experience.

## Demo

[Live Site](https://keith-blackwood.com/blog)

## Features

- **Google Docs Integration:**
  - Create, edit, and manage blog content through Google Docs, benefiting from real-time collaboration.
  - Organize blog posts using Google Drive folders for better content management.

- **Google Apps Script Automation:**
  - Use Google Apps Script to extract content from Google Docs and generate blog posts from structured data in Google Sheets.
  - Automate metadata extraction, such as post title, author, date, etc., for each blog entry.

- **Next.js JAMstack Frontend:**
  - Build a static site using Next.js to provide fast-loading pages and improved SEO.
  - Integrate client-side functionality to enhance user experience.

## Technologies Used

- <a href="https://workspace.google.com/">Google Workspace Apps (Drive, Sheets, Docs)</a>
- <a href="https://www.google.com/script/start/">Google Apps Script</a>
- <a herf="https://nextjs.org/">Next.js</a>

### Other technologies
svgs converted to jsx files via:
- https://svg2jsx.com/

Favicon generated by:
- https://favicon.io/favicon-generator/

Hero image Photo by:
- <a href="https://unsplash.com/@alexacea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandru Acea</a> on <a href="https://unsplash.com/photos/XEB8y0nRRP4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### Additional Dependencies

Frontend:
- <a href="https://emotion.sh/docs/introduction">emotion/css</a>
- <a href="https://prismjs.com/">prismjs</a>

Backend:
- <a href="https://cloud.google.com/">Google Cloud Services</a>



## Setup

### Google Drive

- Requires Google Account and Google Cloud Service
- Create a folder in Google Drive
- In the folder create the subfolders Articles and Index
- In the Index folder create the sheet named bloxIndexer



## Credits

Photo by <a href="https://unsplash.com/@alexacea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandru Acea</a> on <a href="https://unsplash.com/photos/XEB8y0nRRP4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

outside click event listener:
- https://codesandbox.io/s/outside-alerter-hooks-lmr2y?module=%2Fsrc%2FOutsideAlerter.js  

svgs converted to jsx files via:
- https://svg2jsx.com/

https://favicon.io/favicon-generator/


  packages:
  emotion/css https://emotion.sh/
https://www.npmjs.com/package/@emailjs/browser

sharp 

