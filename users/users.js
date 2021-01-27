const express = require("express");
const md5 = require("md5");
const router = express.Router();
const User = require("../models/User.js");

//GET ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET A SEPCIFIC USER BY USERID
router.get("/id/:userId", async (req, res) => {
    try {
        const user = await User.find({ _id: req.params.userId });
        if (user.length >= 1) {
            res.json(user);
        } else {
            res.json({ message: "no user found" });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

//GET A SEPCIFIC USER BY USERNAME
router.get("/username/:username", async (req, res) => {
    try {
        const name = req.params.username;
        const regex = new RegExp(name, "i"); //i is for case insensitivity
        const user = await User.find({ username: { $regex: regex } });
        if (user.length >= 1) {
            res.json(user);
        } else {
            res.json({ message: "no user found" });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

//POST A USER
router.post("/register", async (req, res) => {
    console.log(req.body);

    const user = await User.find({ username: req.body.username });

    if (user.length >= 1) {
        res.json({ message: "User exists" });
    } else {
        var city = req.body.city;
        city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();

        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email.toLowerCase(),
            username: req.body.username,
            password: md5(req.body.password),
            city: city,
        });

        try {
            const savedUser = await user.save();
            res.json({ message: "User registration successful" });
        } catch (err) {
            res.json({ message: err });
        }
    }
});

//LOGIN FOR USER
router.post("/login", async (req, res) => {
    const user = await User.find({ username: req.body.username });
    if (user.length >= 1) {
        const userInfo = await User.find({
            username: req.body.username,
            password: md5(req.body.password),
        });

        if (userInfo.length >= 1) {
            res.json(userInfo);
        } else {
            res.json({ message: "Password doesn't match" });
        }
    } else {
        res.json({ message: "Username not Found" });
    }
});

module.exports = router;
