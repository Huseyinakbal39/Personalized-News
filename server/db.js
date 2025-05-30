import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName : 'news',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {
        console.log('DB Baglandi')
    }).catch((err)=>{
        console.log('DB baglanti err:',err.message)
    });
}

export default conn;