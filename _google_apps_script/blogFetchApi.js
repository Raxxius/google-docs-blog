function doGet() {
    const id = "PUT FOLDER THAT CONTAINS THE BLOG DOCS ID HERE";
    const folder = DriveApp.getFolderById(id);
    const files = folder.getFiles();
    const displayInfo = [];
    while (files.hasNext()) {
      var file = files.next();
      const fileDate = file.getLastUpdated();
      const fileId = file.getId();
      const fileData = getDataFromDoc(fileId, fileDate);
      displayInfo.push(fileData);
    }
    const returnValue = JSON.stringify(displayInfo);
    return ContentService.createTextOutput(returnValue).setMimeType(ContentService.MimeType.JSON)
  }
  
  
  function getDataFromDoc(fileId, fileDate) {
    const gdoc = Docs.Documents.get(fileId);
    const title = gdoc.title
    //get the first image object key name
    const imageKey = getFirstImageKey(gdoc.body)
    if (imageKey !== 'No image') {
      imageCuri = gdoc.inlineObjects[imageKey].inlineObjectProperties.embeddedObject.imageProperties.contentUri
      imageDescription = (gdoc.inlineObjects[imageKey].inlineObjectProperties.embeddedObject.description)
    }
    const image = {imageDescription, imageCuri}
    //get first paragraph
    const introText = getIntroText(gdoc.body)
    return {title, image, introText, fileId, fileDate}
  }
  
  function getFirstImageKey(body) {
    const listOfContent = body.content
    for (i = 0; i < listOfContent.length; i++) {
      if (listOfContent[i].paragraph) {
        if (listOfContent[i].paragraph.elements)
          if (listOfContent[i].paragraph.elements[0].inlineObjectElement)
            return listOfContent[i].paragraph.elements[0].inlineObjectElement.inlineObjectId
      }
    }
    return 'No image'
  }
  
  function getIntroText(body) {
    const listOfContent = body.content
    for (i = 0; i < listOfContent.length; i++) {
      if (listOfContent[i].paragraph) {
        if (listOfContent[i].paragraph.paragraphStyle) {
          if (listOfContent[i].paragraph.paragraphStyle.namedStyleType === "NORMAL_TEXT") {
            if (listOfContent[i].paragraph.elements[0].textRun) {
              if (listOfContent[i].paragraph.elements[0].textRun.content.length !== 1.0) {
                return listOfContent[i].paragraph.elements[0].textRun.content
              }
            }
          }
        }
      }
    }
    return 'No text'
  }
  