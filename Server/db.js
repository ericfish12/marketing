const Sequelize = require('sequelize')

const db = new Sequelize (
    process.env.DATABASE_URL||`postgres://localhost:5432/PWMESSAGE`,  {
        logging: false
      }
)



const Messages = db.define('Messages',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        },
      
    },
    message:{
        type:Sequelize.TEXT,
        allowNull:false,
    }
})


async function seed() {
    await db.sync({force: true})
    console.log('db synced!')
}

//  seed()
module.exports = {
    db,
    Messages,
  };
  