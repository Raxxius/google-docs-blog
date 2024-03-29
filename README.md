# Google Docs Blog

A Fullstack project designed with Google Apps (Drive, Sheets, Docs), Google Apps Script and Next.js JAMstack

![responsivelayout](/src/_readme/responsive-layout.png "responsive layout")

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
- <a href="https://prismjs.com/">prismjs</a>

Backend:
- <a href="https://cloud.google.com/">Google Cloud Services</a>

## Setup

### Google Drive

- Requires Google Account and Google Cloud Service

Setting up the Drive Structure:
- Create a folder in Google Drive
- In the folder create the subfolders Articles and Index
- In the Index folder create a subfolder called IndexImages

Create index file:
- In the Index folder create the sheet named blogIndex
- In the first row name the first 7 cells: *title, imageDescription, imageCuri, introText, fileId, fileDate*

### Google Apps Script

FormIndexFetch
- Open the blogIndexer sheet
- Click on the 'Extensions' tab and select 'Apps Script'
- Copy the content of formIndexFetch.js into the Apps Script
- Deploy the Apps Script

Blog Fetch API:
- In Google Apps Script full (not via the formIndex link) create a new project titled blogFetcher
- Copy the content of blogFetchApi.js into the Apps Script
- Add your blogs folder (specific folder that contains the blog articles) ID to the script
- Deploy the Apps Script

BlogIndexer:
- In Google Apps Script full (not via the formIndex link) create a new project titled blogIndexer
- Copy the content of blogIndexer.js into the Apps Script
- Add your blogs folder (specific folder that contains the blog articles) ID, your blogIndex sheet ID, and your blog image folder ID in the relative places
- Deploy the Apps Script

### Nextjs

- Install Nextjs in relative folder
- Install Prismjs
- Copy content of Apps folder into the Nextjs folder
- Deploy website
- Note basePath is /blog, so localhost:3000 will be localhost:3000/blog

### Daily Use

- Write blogs as per template
- Deposit finished blogs into blogs folder
- Run the blogIndexer (can automate to daily/weekly if required via triggers)
