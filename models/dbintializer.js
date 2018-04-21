const mongoose=require('mongoose');
let mongo_url='mongodb://localhost:27017/express-project';
if(process.env.NODE_ENV==='production'){
    mongo_url='mongodb://asmaa:asmaa@ds111798.mlab.com:11798/express-project';
}
mongoose.connect();
//'mongodb://localhost:27017/express-project'