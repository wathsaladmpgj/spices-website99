import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0;">SpiceWorld Contact Form</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #374151;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #374151;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #374151;">${phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Subject:</td>
                <td style="padding: 8px 0; color: #374151;">${subject}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Message</h3>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; color: #374151; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background: #374151; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            This email was sent from the SpiceWorld contact form.<br>
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `;

    // Send email to your business email
    const data = await resend.emails.send({
      from: 'SpiceWorld Contact <onboarding@resend.dev>', // Using Resend's default domain
      to: ['www.janith1111@gmail.com'], // Your business email
      replyTo: email, // Customer's email for easy reply
      subject: `New Contact: ${subject}`,
      html: emailContent,
    });

    // Create confirmation email content
    const confirmationContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us!</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0;">SpiceWorld - Premium Spices Worldwide</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #374151; margin: 0 0 15px 0;">Hi ${name},</h2>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 15px;">
              Thank you for reaching out to SpiceWorld! We've received your message and our team will get back to you within 24 hours.
            </p>
            
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 15px 0;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 14px;">Your Message Summary:</h3>
              <p style="color: #6b7280; margin: 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 15px;">
              In the meantime, feel free to explore our premium spice collection or follow us on social media for cooking tips and recipes.
            </p>
          </div>
        </div>
        
        <div style="background: #374151; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
          <div style="margin-bottom: 15px;">
            <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">Contact Information:</p>
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              📍 217/B,1, Baduwatta, Eheliyagoda<br>
              📞 077 9201422 | 072 0484945<br>
              ✉️ moonsproductsc@gmail.com
            </p>
          </div>
          
          <p style="color: #9ca3af; margin: 0; font-size: 12px;">
            © 2024 SpiceWorld. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'SpiceWorld <onboarding@resend.dev>', // Using Resend's default domain
      to: [email],
      subject: 'Thank you for contacting SpiceWorld - We\'ll be in touch soon!',
      html: confirmationContent,
    });

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: data.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
