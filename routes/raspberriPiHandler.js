import express from "express";

const router = express.Router();

router.post("/image", (req, res) => {
    const imageData = req.body.frame;
    res.json({ imageData });
});

export default router;
