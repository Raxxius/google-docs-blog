/* This function is linked to the Google Sheet in the Index folder being used as an index
   The Apps Script should be created from the sheet via the 'Extensions' Tab and Apps Script
   
   This function creates a JSON file 
*/

function doGet() {
    // get values from active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const keys = [];
    const blogs = [];
    for (key in data[0]) {
      keys.push(data[0][key]);
    }
    for (let i = 1; i < data.length; i++) {
      blogArray = {};
      for (j in data[i]) {
        const key = keys[j];
        const blogValue = data[i][j];
        blogArray[key] = blogValue;
      }
      blogs.push(blogArray);
    }
    const returnValue = JSON.stringify(blogs);
    return ContentService.createTextOutput(returnValue).setMimeType(ContentService.MimeType.JSON)
  }
  