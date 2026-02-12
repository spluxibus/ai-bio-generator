// product/api/generate-bio.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { role, keywords } = req.body;

    if (!role || !keywords) {
        return res.status(400).json({ error: 'Role and keywords are required.' });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        const prompt = `Generate 5-10 concise and engaging professional bios or LinkedIn headlines for a ${role} specializing in ${keywords}. Each bio/headline should be distinct and highlight key achievements or aspirations. Use bullet points or short paragraphs for readability.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ bios: text });
    } catch (error) {
        console.error('Error generating bios:', error);
        res.status(500).json({ error: 'Failed to generate bios.', details: error.message });
    }
};
