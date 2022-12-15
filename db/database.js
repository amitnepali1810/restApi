const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectDatabase = (uri) => {

    console.log("Database Connected Successfully...");
    
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDatabase;
