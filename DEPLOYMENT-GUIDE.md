# Deployment Guide - Africa Prince Adventures

## Overview
This Next.js application is now configured for dynamic hosting with email functionality. Choose between Vercel (recommended) or Render for deployment.

## Prerequisites
1. **Resend Account**: Sign up at [resend.com](https://resend.com) for email functionality
2. **Domain Setup**: You'll need to verify your domain with Resend for production emails

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project" and import your GitHub repository
3. Vercel will automatically detect Next.js configuration

### Step 2: Configure Environment Variables
In your Vercel project settings, add these environment variables:

\`\`\`
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

### Step 3: Domain Setup with Resend
1. In Resend dashboard, add your domain (e.g., africaprinceadventures.com)
2. Add the required DNS records to your domain provider
3. Update the email "from" addresses in `lib/email.ts` to use your verified domain

### Step 4: Deploy
- Push to your main branch and Vercel will automatically deploy
- Your site will be available at `https://your-project.vercel.app`

## Option 2: Deploy to Render

### Step 1: Connect Repository
1. Go to [render.com](https://render.com) and sign in
2. Click "New Web Service" and connect your GitHub repository
3. Render will use the `render.yaml` configuration automatically

### Step 2: Configure Environment Variables
In your Render service settings, add:

\`\`\`
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

### Step 3: Deploy
- Render will automatically build and deploy your application
- Your site will be available at `https://your-service-name.onrender.com`

## Email Configuration

### Getting Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key and add it to your environment variables

### Domain Verification (Production)
For production emails, you need to verify your domain:

1. **Add Domain in Resend**:
   - Go to Domains section in Resend dashboard
   - Add your domain (e.g., africaprinceadventures.com)

2. **DNS Configuration**:
   Add these DNS records to your domain:
   \`\`\`
   Type: TXT
   Name: @
   Value: [Resend will provide this]
   
   Type: CNAME
   Name: resend._domainkey
   Value: [Resend will provide this]
   \`\`\`

3. **Update Email Addresses**:
   Once verified, update the "from" addresses in `lib/email.ts`:
   \`\`\`typescript
   from: 'Africa Prince Adventures <bookings@africaprinceadventures.com>'
   \`\`\`

## Testing Email Functionality

### Development Testing
1. Set up environment variables in `.env.local`:
   \`\`\`
   RESEND_API_KEY=your_api_key
   \`\`\`

2. Run locally: `npm run dev`
3. Test booking forms - emails will be sent from `onboarding@resend.dev` in development

### Production Testing
1. Deploy to your chosen platform
2. Test a booking form submission
3. Check that emails arrive at adventuresprince@gmail.com
4. Verify customer confirmation emails are sent

## Troubleshooting

### Email Issues
- **Emails not sending**: Check RESEND_API_KEY is correctly set
- **Emails in spam**: Verify your domain with Resend
- **Rate limits**: Free tier allows 3,000 emails/month

### Deployment Issues
- **Build failures**: Check all dependencies are in package.json
- **Environment variables**: Ensure all required env vars are set
- **Domain issues**: Check DNS propagation (can take up to 48 hours)

## Features Included
- ✅ Server-side form processing
- ✅ Email notifications to admin (adventuresprince@gmail.com)
- ✅ Customer confirmation emails
- ✅ Form validation and error handling
- ✅ Success/error states in UI
- ✅ Automatic deployment configuration
- ✅ SEO optimization maintained

## Next Steps
1. Choose your deployment platform (Vercel recommended)
2. Set up Resend account and get API key
3. Configure environment variables
4. Deploy and test email functionality
5. Set up custom domain (optional)
6. Verify domain with Resend for production emails

Your Africa Prince Adventures website is now ready for dynamic hosting with full email functionality!
