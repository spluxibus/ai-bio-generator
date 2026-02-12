// script.js

document.addEventListener('DOMContentLoaded', () => {
    const bioForm = document.getElementById('bio-form');
    const generateButton = document.getElementById('generate-button');
    const resultsDiv = document.getElementById('results');
    const bioOutputDiv = document.getElementById('bio-output');
    const payButton = document.getElementById('pay-button');

    bioForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        generateButton.disabled = true;
        generateButton.textContent = 'Generating...';
        bioOutputDiv.innerHTML = 'Loading AI-powered bios...';
        resultsDiv.classList.remove('hidden');
        payButton.classList.add('hidden'); // Hide pay button during generation

        const role = document.getElementById('role').value;
        const keywords = document.getElementById('keywords').value;

        try {
            const response = await fetch('/api/generate-bio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role, keywords })
            });
            const data = await response.json();

            if (response.ok) {
                bioOutputDiv.textContent = data.bios;
                payButton.classList.remove('hidden'); // Show pay button after generation
            } else {
                bioOutputDiv.textContent = `Error: ${data.error || 'Failed to generate bios.'}`;
            }
        } catch (error) {
            console.error('Fetch error:', error);
            bioOutputDiv.textContent = 'An unexpected error occurred. Please try again.';
        }

        generateButton.disabled = false;
        generateButton.textContent = 'Generate My Bios';
    });

    payButton.addEventListener('click', () => {
        // In a real scenario, this would redirect to a Stripe Payment Link
        // For now, it's a placeholder. Replace with actual Stripe URL.
        // Redirect to your Stripe Payment Link
        // You need to create a Payment Link in your Stripe Dashboard for a $1 product.
        // Replace 'YOUR_STRIPE_PAYMENT_LINK_HERE' with the actual URL.
        // Example: https://buy.stripe.com/test_55a9Aa0o01d01d0
        alert('Redirecting to secure payment via Stripe...');
        window.location.href = 'https://buy.stripe.com/9B6fZi6wkgYQ5277nR2oE00';
    });
});
