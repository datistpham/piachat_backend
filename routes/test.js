const router = require("express").Router();

router.post("/api/pid", async (req, res)=> {
    console.log(JSON.parse(req.body.pid))
    return res.json({ pid: true });
})

module.exports= router