const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/element-design")
.then(()=>{
    console.log("DB is Connected")
})
.catch(()=>{
    console.log("DB is Dis-Connected")

})