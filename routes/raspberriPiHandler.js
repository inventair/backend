import express from "express";

const router = express.Router();

router.post("/image", (req, res) => {
    const data = [
        { object: "person", space: "15%" },
        { object: "box", space: "20%" },
        { object: "empty", space: "65%" }
    ];
    
    res.json(data);
});

export default router;
