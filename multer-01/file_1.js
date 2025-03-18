const express = require('express'); 
 
const singlFileUpload = require('./routes/single-upload')  ; 

const app = express() ; 

port = 8003




app.use('/' , singlFileUpload) ; 


app.listen(port , console.log(`visit http://localhost:${port}`)) ; 









// console.log(path.join(__dirname , 'public' , 'index.html')) ; ///home/aditya-kshatriya/Desktop/Developement/Multer-Library/multer-01/public/index.html
// console.log(__dirname) ;
//  // it gives the whole path till the directory in which all the files are located. i.e multer-01 : /home/aditya-kshatriya/Desktop/Developement/Multer-Library/multer-01