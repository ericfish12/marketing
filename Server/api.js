const router = require("express").Router();
const { db,Messages } = require("./db.js");

router.get("/messages", async (req, res, next) => {
  try {
    const messages = await Messages.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});


router.post('/messages',async(req,res,next)=>{
    try {
        const newMessage = await Messages.create(req.body);
        res.json(newMessage)

  



    } catch (error) {
        // res.send(error)
        // return res.sendStatus(400)
        res.send('')
        next(error)
    }
})

module.exports = router;