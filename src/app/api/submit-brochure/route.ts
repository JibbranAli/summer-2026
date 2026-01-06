import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    console.log('Received brochure form data:', formData);

    // TODO: Replace with actual Google Apps Script URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    // Submit to Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        formType: 'brochure_download',
      }),
      mode: 'no-cors', // Google Apps Script requires no-cors
    });

    // Since we're using no-cors, we can't check the response
    // But we'll assume success if no error is thrown
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        message: 'Failed to submit form',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

