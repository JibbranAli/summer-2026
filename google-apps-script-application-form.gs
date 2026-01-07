/**
 * Google Apps Script for Application Form Submission
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Copy and paste this entire code
 * 4. Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID (found in the sheet URL)
 * 5. Replace 'Sheet1' with your actual sheet name if different
 * 6. Click "Deploy" > "New deployment"
 * 7. Select type: "Web app"
 * 8. Execute as: "Me"
 * 9. Who has access: "Anyone"
 * 10. Click "Deploy"
 * 11. Copy the Web App URL and use it in your .env file as GOOGLE_APPS_SCRIPT_URL_APPLICATION_FORM
 * 
 * GOOGLE SHEET SETUP:
 * - Create a Google Sheet (separate from query form sheet)
 * - Add headers in Row 1: Timestamp, Step, Is Partial, Full Name, WhatsApp No, Email Address, 
 *   College Name, Branch, Current Semester, Applying For, Other Specification, 
 *   Tentative Dates, Reference Name, Source, Query
 * - Copy the Sheet ID from the URL (between /d/ and /edit)
 */

/**
 * GET handler for testing the web app
 * Access the deployment URL in a browser to test
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Application Form Google Apps Script is working! Use POST to submit form data.',
    endpoint: 'POST',
    requiredFields: ['fullName', 'whatsappNo', 'emailAddress', 'collegeName'],
    optionalFields: ['branch', 'currentSemester', 'applyingFor', 'otherSpecification', 
                     'tentativeDates', 'referenceName', 'source', 'query']
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * POST handler for receiving form submissions
 * This function saves both partial and complete submissions to Google Sheets
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (replace with your Sheet ID)
    const sheetId = 'YOUR_SHEET_ID'; // REPLACE THIS WITH YOUR ACTUAL SHEET ID
    const sheetName = 'Sheet1'; // REPLACE WITH YOUR SHEET NAME IF DIFFERENT
    
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    let sheet = spreadsheet.getSheetByName(sheetName);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      sheet.appendRow([
        'Timestamp', 
        'Step', 
        'Is Partial', 
        'Full Name', 
        'WhatsApp No', 
        'Email Address', 
        'College Name', 
        'Branch', 
        'Current Semester', 
        'Applying For', 
        'Other Specification', 
        'Tentative Dates', 
        'Reference Name', 
        'Source', 
        'Query'
      ]);
      // Set header row formatting
      const headerRange = sheet.getRange(1, 1, 1, 15);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Extract form data with safe defaults for all fields
    const step = data.step || '';
    const isPartial = data.isPartial !== undefined ? data.isPartial : true;
    const fullName = data.fullName || '';
    const whatsappNo = data.whatsappNo || '';
    const emailAddress = data.emailAddress || '';
    const collegeName = data.collegeName || '';
    const branch = data.branch || '';
    const currentSemester = data.currentSemester || '';
    const applyingFor = data.applyingFor || '';
    const otherSpecification = data.otherSpecification || '';
    const tentativeDates = data.tentativeDates || '';
    const referenceName = data.referenceName || '';
    const source = data.source || '';
    const query = data.query || '';
    
    // Append data to the sheet (all fields, even if empty)
    sheet.appendRow([
      timestamp,
      step,
      isPartial ? 'Yes' : 'No',
      fullName,
      whatsappNo,
      emailAddress,
      collegeName,
      branch,
      currentSemester,
      applyingFor,
      otherSpecification,
      tentativeDates,
      referenceName,
      source,
      query
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: isPartial ? 'Partial data saved successfully' : 'Application submitted successfully',
      timestamp: timestamp.toISOString(),
      step: step,
      isPartial: isPartial
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error saving data: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * OPTIONAL: Function to test the script
 * Run this function manually to test if the script works
 */
function testDoPost() {
  const testData = {
    step: 1,
    isPartial: true,
    fullName: 'Test User',
    whatsappNo: '1234567890',
    emailAddress: 'test@example.com',
    collegeName: 'Test College',
    branch: 'Computer Science',
    currentSemester: '2025',
    applyingFor: 'Data Science',
    tentativeDates: 'June 2025',
    source: 'Website',
    query: 'Test query'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

/**
 * OPTIONAL: Function to set up the sheet with headers
 * Run this once to create headers if they don't exist
 */
function setupSheet() {
  const sheetId = 'YOUR_SHEET_ID'; // REPLACE THIS WITH YOUR ACTUAL SHEET ID
  const sheetName = 'Sheet1'; // REPLACE WITH YOUR SHEET NAME IF DIFFERENT
  
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  let sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  
  // Clear existing data and set headers
  sheet.clear();
  sheet.appendRow([
    'Timestamp', 
    'Step', 
    'Is Partial', 
    'Full Name', 
    'WhatsApp No', 
    'Email Address', 
    'College Name', 
    'Branch', 
    'Current Semester', 
    'Applying For', 
    'Other Specification', 
    'Tentative Dates', 
    'Reference Name', 
    'Source', 
    'Query'
  ]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, 15);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  
  // Set column widths for better readability
  sheet.setColumnWidth(1, 150);  // Timestamp
  sheet.setColumnWidth(2, 60);   // Step
  sheet.setColumnWidth(3, 100);  // Is Partial
  sheet.setColumnWidth(4, 200);  // Full Name
  sheet.setColumnWidth(5, 120);  // WhatsApp No
  sheet.setColumnWidth(6, 250);  // Email Address
  sheet.setColumnWidth(7, 200);  // College Name
  sheet.setColumnWidth(8, 150);  // Branch
  sheet.setColumnWidth(9, 120);  // Current Semester
  sheet.setColumnWidth(10, 150); // Applying For
  sheet.setColumnWidth(11, 200); // Other Specification
  sheet.setColumnWidth(12, 150); // Tentative Dates
  sheet.setColumnWidth(13, 150); // Reference Name
  sheet.setColumnWidth(14, 150); // Source
  sheet.setColumnWidth(15, 400); // Query
  
  Logger.log('Application form sheet setup completed!');
}

