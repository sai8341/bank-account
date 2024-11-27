const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample /deposit endpoint
app.post('/deposit', (req, res) => {
    const { amount, balance } = req.body;
    
    if (amount > 0 && amount <= balance) {
        return res.status(200).json({ success: true, message: "Deposit successful!" });
    }
    
    return res.status(400).json({ success: false, message: "Invalid deposit amount." });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
