const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const redisClient = require('../config/redis.config');

exports.login = async (req, res) => {
    try {
        const { usn, password } = req.body;
        if (!usn || !password) return res.status(400).json({ error: 'Missing fields' });
        
        // Check DB first
        let user = await prisma.user.findUnique({ where: { usn } });
        
        // Store in redis
        const sessionId = "sess_" + usn + "_" + Date.now();
        // await redisClient.set(sessionId, JSON.stringify(user)); // crashing?
        
        res.status(200).json({ message: "Login successful", sessionId, user });
    } catch (err) {
        console.error("Login err:", err);
        res.status(500).json({ error: "Server error during login" });
    }
};

exports.logout = (req, res) => {
    // clear redis session here later
    res.json({ message: "logged out" });
};