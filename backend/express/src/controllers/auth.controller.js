// Extracted from server.js
exports.login = async (req, res) => {
    try {
        const { usn, password } = req.body;
        // TODO: integrate with actual student portal scraper
        if (!usn || !password) return res.status(400).json({ error: 'Missing fields' });
        
        // Mock successful login
        res.status(200).json({ message: "Login successful", user: { usn } });
    } catch (err) {
        console.error("Login err:", err);
        res.status(500).json({ error: "Server error during login" });
    }
};

exports.logout = (req, res) => {
    res.json({ message: "logged out" });
};