const express = require('express'); 
const router = express.Router() ; 
const path = require('path') ; 
const multer = require('multer') ;
const app = express() ; 

app.use(express.static(path.join(__dirname, 'public')));

router.get('/' , (req , res)=>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})


// file storage : 
let storage = multer.diskStorage({
    destination : (req , file , cb) => cb(null , 'uploads/') , 
    filename : (req , file , cb)=>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;  // unique file generation
        cb(null , uniqueName) ; 
    }
})

let upload = multer({
    storage : storage ,   
    limits : {fileSize : 1024*1024*100}
}).single('uploaded_file') ;

router.post('/upload' , (req ,res)=>{
     
    

        upload(req , res , async(err)=>{
               
             if(err){
                return res.status(500).send({
                    error : {
                        msg : err.message , 
                        "Max File size valid" : "100 MB"
                    }
                })
            }
            
            if(!req.file)
            {
                return res.status(400).json({
                    error : "File not chosen"
                })
            }
           
           
   
           console.log('file uploaded successfully ...')
           return res.status(200).send({
               msg : "file uploaded successfully"
           })
       
   
      })
    
   

})


module.exports = router ; 