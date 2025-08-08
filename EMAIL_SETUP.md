# Resend Email Setup Guide

This project uses Resend for sending emails from the contact form. Follow these steps to set it up:

## 1. Create a Resend Account
- Go to [resend.com](https://resend.com)
- Sign up for a free account
- Verify your email address

## 2. Get Your API Key
- Log into your Resend dashboard
- Go to API Keys section
- Create a new API key
- Copy the API key (starts with `re_`)

## 3. Set Up Environment Variables
- Copy `.env.example` to `.env.local`
- Replace `your_resend_api_key_here` with your actual API key

```bash
cp .env.example .env.local
```

## 4. Configure Your Domain (For Production)
- In the Resend dashboard, add your domain
- Verify your domain with DNS records
- Update the `from` email addresses in `/src/app/api/contact/route.js`

## 5. Update Email Addresses
In `/src/app/api/contact/route.js`, update:
- `from` addresses to use your verified domain
- `to` address to your business email

## 6. Test the Contact Form
- Start your development server: `npm run dev`
- Go to `/contact` page
- Fill out and submit the form
- Check your email for the message

## Email Features
✅ **Professional HTML emails** with SpiceWorld branding  
✅ **Customer confirmation emails** with order details  
✅ **Reply-to functionality** for easy customer communication  
✅ **Error handling** with user feedback  
✅ **Form validation** to prevent spam  
✅ **Mobile-responsive** email templates  

## Pricing
- **Free tier**: 100 emails/month
- **Pay-as-you-scale**: $0.40 per 1,000 emails
- **No setup fees** or monthly minimums

## Security Features
- **API key authentication**
- **Input validation** and sanitization
- **Rate limiting** (recommended for production)
- **HTTPS encryption** for all API calls
