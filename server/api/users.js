const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const verifyJwtToken = require('./verifyJwtToken');

const validateLoginInput = require("../validation/login");
// Load User model
const User = require('../models/index')['SatuanKerja'];


router.post("/login", (req, res) => {
    // Form validation
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ where: { email: email } }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({
                emailnotfound: "Email not found"
            });
        }
        // Check password sementara pakai email
        var isMatch =  (password == user.email);
        if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
                id: user.id,
                email: user.email
            };
            // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey, {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
        } else {
            return res
                .status(400)
                .json({
                    passwordincorrect: "Password incorrect"
                });
        }
    });
});

router.get('/my/token', verifyJwtToken.verifyToken);

module.exports = router;