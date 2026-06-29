function doGet() {
  // Enforcing strict sandboxing controls to force the browser to treat this as an independent page
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Barcode Scanner Log')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

// Add a barcode entry to the sheet
function addBarcode(barcode, format) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Scans');
  var id = Utilities.getUuid(); // Unique ID for deletion mapping
  var timestamp = new Date();
  
  sheet.appendRow([id, timestamp, barcode, format]);
  return id; // Return ID to frontend for potential undo action
}

// Delete a barcode entry by its unique ID
function deleteBarcode(id) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Scans');
  var data = sheet.getDataRange().getValues();
  
  // Loop backwards to safely delete rows without shifting indices mid-loop
  for (var i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === id) {
      sheet.deleteRow(i + 1); // +1 because sheet rows are 1-indexed
      return true;
    }
  }
  return false;
}