function doGet() {
    const id = "PUT FOLDER THAT CONTAINS THE BLOG DOCS ID HERE";
    const folder = DriveApp.getFolderById(id);
    const files = folder.getFiles();
    while (files.hasNext()) {
      var file = files.next();
      const fileDate = file.getLastUpdated();
      const fileId = file.getId();
      updateIndex(fileId, fileDate);
    }
  }
  
  function updateIndex(fileId, fileDate) {
    const gdoc = DocumentApp.openById(fileId)
  
    const title = gdoc.getName();
    const image = checkHeroImage(gdoc,fileId)
    const imageCuri = `https://drive.google.com/uc?id=${image[0]}`
    const imageDescription = image[1]
    const introText = getHeroText(gdoc)
  
    addToSheet([title, imageDescription, imageCuri, introText, fileId, fileDate]) 
  }
  
  
  function addToSheet([title, imageDescription, imageCuri, introText, fileId, fileDate]) {
    // checks the indexSheet to see if the document has already been added, and if it has it skips
    const sheetID = "PUT BLOGINDEX SHEET ID HERE";
    const ss = SpreadsheetApp.openById(sheetID);
    const sheet = ss.getSheetByName('index');
    const values = sheet.getDataRange().getValues()
    for (row in values) {
      if (fileId === values[row][4]) {
        const rowToReplace = sheet.getRange(Number(row)+1, 1, 1, 6)
        rowToReplace.setValues([[title, imageDescription, imageCuri, introText, fileId, fileDate]])
  
        //organise sheets by date
        const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
        range.sort([{column: 6, ascending: false}]);
        return
      }
    }
    sheet.appendRow([title, imageDescription, imageCuri, introText, fileId, fileDate])
  
    //organise sheets by date
    const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
    range.sort([{column: 6, ascending: true}]);
  }
  
  // This function pulls the first image from the Docs file, and if the image is not already in the image
  // blog folder adds it to the folder. Then it returns the new image id. 
  function checkHeroImage(gdoc, fileId) {
    const imageFolderId = "PUT BLOGINDEX IMAGE FOLDER ID HERE"
    const images = gdoc.getBody().getImages();
    const firstImage = images[0];
    const imageDescription = firstImage.getAltDescription();
    const imageBlob = firstImage.getBlob();
    const imageName = fileId+"."+imageBlob.getContentType().split('/')[1]
    const imageFolder = DriveApp.getFolderById(imageFolderId);
    if (!imageFolder.getFilesByName(imageName).hasNext()) {
      imageFolder.createFile(imageBlob.setName(imageName));
    }
    const newImage = imageFolder.getFilesByName(imageName).next();
    const newImageId = newImage.getId();
    const returnValue = [newImageId, imageDescription];
    return returnValue;
  }
  
  function getHeroText(gdoc) {
    const paragraphs = (gdoc.getBody().getParagraphs())
    for (let i = 1; i < paragraphs.length; i++) {
      if (paragraphs[i].getText().length !== 0) {
        const returnValue = paragraphs[i].getText()
        return returnValue
      }
    }
}