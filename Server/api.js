// const router = require("express").Router();
// const { db,Messages } = require("./db.js");

// router.get("/messages", async (req, res, next) => {
//   try {
//     const messages = await Messages.findAll();
//     res.json(messages);
//   } catch (error) {
//     next(error);
//   }
// });


// router.post('/messages',async(req,res,next)=>{
//     try {
//         const newMessage = await Messages.create(req.body);
//         res.json(newMessage)

  



//     } catch (error) {
//         // res.send(error)
//         // return res.sendStatus(400)
//         res.send('')
//         next(error)
//     }
// })

// module.exports = router;





























































const router = require("express").Router();
const { db,TodoLists } = require("./db.js");

router.get("/todos", async (req, res, next) => {
  try {
    const todos = await TodoLists.findAll({
        order: [['id', 'ASC']]
    });
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

router.get("/todos/:id", async (req, res, next) => {
    try {
      const todo = await TodoLists.findOne({
        where: {
            id: req.params.id
          },
      }
         
      );
      res.json(todo);
    } catch (error) {
      next(error);
    }
  });
  






router.post('/todos',async(req,res,next)=>{
    try {
        const newTodo = await TodoLists.create(req.body);
        res.json(newTodo)

    } catch (error) {
        // res.send(error)
        // return res.sendStatus(400)
        res.send('')
        next(error)
    }
})



router.put('/todos/:id', async (req, res, next) => {
    try {
  
  
      await TodoLists.update(
        {
        title: req.body.title
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      res.json('OK')
    } catch (error) {
      next(error)
    }
  })


  router.delete('/todos/:id', async (req, res, next) => {
    try {
     
      await TodoLists.destroy({
        where: {
          id: req.params.id,
        }
      })
      res.json('deleted')
    } catch (error) {
      next(error)
    }
  })



module.exports = router;

