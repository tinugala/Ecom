if(process.env.NODEENV != 'production'){
    require('dotenv').config();
}
module.exports={
    PORT: process.env.PORT
}