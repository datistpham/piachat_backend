const User = require("../models/User");

const router = require("express").Router();

router.post("/api/pid", async (req, res)=> {
    console.log((req.body.pid))
    return res.json({ pid: true });
})

router.post("/api/pid/user", async (req, res)=> {
    try {
        
        const document= await User.findById(req.body.uid)
        if(!document) {
            console.log("")
            return res.status(200).json({ok: false})
        }
        document.pid.push(req.body.pid)
        const updatedDocument= await document.save()
        return res.status(200).json({ok: true})
        
    } catch (error) {
        console.log(err)
        return res.status(500).json({ok: false, error})
    }
})

router.post("/api/pid/openapp", async (req, res)=> {
    try {
        
        const document= await User.findById(req.body.uid)
        if(!document) {
            console.log("")
            return res.status(200).json({ok: false})
        }
        return res.status(200).json({ok: true, pid: document})
        
    } catch (error) {
        console.log(err)
        return res.status(500).json({ok: false, error})
    }
})

router.post("/api/pid/clear", async (req, res)=> {
    try {
        
        const document= await User.findById(req.body.uid)
        if(!document) {
            console.log("")
            return res.status(200).json({ok: false})
        }
        document.pid= []
        const updatedDocument= await document.save()
        return res.status(200).json({ok: true})
        
    } catch (error) {
        console.log(err)
        return res.status(500).json({ok: false, error})
    }
})

module.exports= router