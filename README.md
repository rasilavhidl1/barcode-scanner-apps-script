# Barcode Scanner Web App (Google Apps Script)

This repository contains the standalone source code for a lightweight, mobile-optimized barcode scanning application.

## Repository Structure
* `/index.html` - Mobile web application interface utilizing `html5-qrcode` image capture.
* `/Code.js` - Google Apps Script engine to bridge tracking streams to Google Sheets.

## Installation Notes
1. Paste the contents of `Code.js` into your Google Apps Script console.
2. Create an `Index.html` file in the Apps Script project and paste the contents of `index.html`.
3. Deploy as a Web App with access set to "Anyone".
