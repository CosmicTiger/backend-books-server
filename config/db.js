const mongoose = require('mongoose');

const connectDatabase = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log('MongoDB Atlas Server Connected', connection.connection.host);
};

module.exports = connectDatabase;
