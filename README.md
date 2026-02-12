# AI Bio & Headline Generator

This directory contains the files for the "AI Bio & Headline Generator" product. 

## Project Structure:
- `index.html`: The main landing page with input fields.
- `style.css`: Stylesheet for the landing page.
- `script.js`: JavaScript for handling user input, API calls, and displaying results.
- `api/generate-bio.js`: Serverless function for AI bio generation.

## Development Notes:
- Use vanilla HTML, CSS, and JavaScript for minimal overhead.
- Implement a simple form for user input.
- The serverless function will call a low-cost LLM (e.g., Google Gemini Flash) to generate bios.

### Payment Integration (Stripe Payment Links)
To enable payments, you need to:
1. Create a Stripe account if you don't have one.
2. In your Stripe Dashboard, create a new Payment Link for a one-time product (e.g., "AI Bio Generation") priced at $1.
3. Copy the generated Payment Link URL.
4. Open `product/script.js` and replace `'YOUR_STRIPE_PAYMENT_LINK_HERE'` with your actual Stripe Payment Link URL.
