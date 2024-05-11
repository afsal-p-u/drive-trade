const mongoose = require('mongoose')

// mongodb+srv://afsal:1234@cluster0.kbldnwp.mongodb.net/drivetrade

// const DBconnect =  () => {
//     mongoose.connect(process.env.MONGO_URL).then((res) => {
//         console.log("DB connection successfull")
//     }).catch((err) => { 
//         console.log("Error connecting DB ", err)
//     })
// }

const DBconnect =  () => {
    mongoose.connect("mongodb+srv://afsal:1234@cluster0.kbldnwp.mongodb.net/drivetrade").then((res) => {
        console.log("DB connection successfull")
    }).catch((err) => { 
        console.log("Error connecting DB ", err)
    })
}

module.exports = { DBconnect }