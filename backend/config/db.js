const mongoose=require("mongoose")

const connected = mongoose.connect("mongodb+srv://prasadpawarpp2002:App@cluster0.syhc5mr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

module.exports={connected};
