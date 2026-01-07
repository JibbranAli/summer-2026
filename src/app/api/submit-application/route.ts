// app/api/submit-application/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import dbConnect from '@/lib/mongodb';
// import Application from '../../../../models/Application';
import { getApplicationEmailTemplate } from '../../../../utils/emailTemplates';

export async function POST(req: Request) {
  try {
    // Connect to database
    // await dbConnect();

    // Get form data
    const formData = await req.json();
    const { step, isPartial, ...applicationData } = formData;
    console.log('Received form data:', { step, isPartial, applicationData });

    // Send data to Google Sheets via Google Apps Script (for both partial and complete submissions)
    const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL_APPLICATION_FORM;
    
    if (googleAppsScriptUrl) {
      try {
        const googleResponse = await fetch(googleAppsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...applicationData,
            step: step || '',
            isPartial: isPartial !== undefined ? isPartial : true,
          }),
        });

        const googleResult = await googleResponse.json();
        
        if (!googleResult.success) {
          console.error('Google Sheets error:', googleResult.message);
          // Continue with email even if Google Sheets fails
        } else {
          console.log(`Data saved to Google Sheets successfully (${isPartial ? 'Partial' : 'Complete'})`);
        }
      } catch (googleError) {
        console.error('Error sending to Google Sheets:', googleError);
        // Continue with email fallback
      }
    } else {
      console.warn('GOOGLE_APPS_SCRIPT_URL_APPLICATION_FORM not configured, skipping Google Sheets submission');
    }

    // Only send emails if it's a complete submission (not a partial save)
    // Note: Google Sheets saves both partial and complete submissions
    if (!isPartial && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        // Configure email transport
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        });
      // Send email to admin
      await transporter.sendMail({
        from: `"Industrial Training program Program" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Industrial Training Program Application - ${applicationData.fullName || 'Incomplete'}`,
        html: getApplicationEmailTemplate(applicationData),
      });

      // Send confirmation email to applicant (only if email is provided)
      if (applicationData.emailAddress) {
        await transporter.sendMail({
          from: `"Summer Industrial Training Program" <${process.env.SMTP_USER}>`,
          to: applicationData.emailAddress,
          subject: 'Application Received - Summer Industrial Training Program',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #dc2626;">Thank You for Your Application</h2>
              <p>Dear ${applicationData.fullName || 'Applicant'},</p>
              <p>We have received your application for the Summer Industrial Training Program. Our team will review your application and get back to you soon.</p>
              <p>Application Details:</p>
              <ul>
                <li>Program: ${applicationData.applyingFor === 'others' ? applicationData.otherSpecification : applicationData.applyingFor || 'Not specified'}</li>
                <li>Tentative Dates: ${applicationData.tentativeDates || 'Not specified'}</li>
              </ul>
              <p>If you have any questions, feel free to contact us.</p>
              <p>Best regards,<br>Summer Industrial Training Program Team</p>
            </div>
          `,
        });
      }

      // send email to preet mam 
      await transporter.sendMail({
        from: `"Summer Industrial Training Program" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'Application Received - Summer Industrial Training Program',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #dc2626;">New Application Received</h2>
            <p> Name ${applicationData.fullName || 'Not provided'},</p>
            <p> Whatsapp No ${applicationData.whatsappNo || 'Not provided'},</p>
            <p> college ${applicationData.collegeName || 'Not provided'},</p>
            <p> Branch ${applicationData.branch || 'Not provided'},</p>
            <p> Year of Passing ${applicationData.currentSemester || 'Not provided'},</p>
            <p> Applying for ${applicationData.applyingFor || 'Not provided'},</p>
            <p> Tentative Date ${applicationData.tentativeDates || 'Not provided'},</p>
            <p> Source ${applicationData.source || 'Not provided'},</p>
            <p> Query ${applicationData.query || 'Not provided'},</p>
            <p>Application Details:</p>
          </div>
        `,
      });
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the request if email fails, Google Sheets is the primary storage
      }
    }
    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        message: 'Failed to submit application',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}