const express = require("express")
const fs = require("fs")
// const port = 3000;

const app = express()
console.log(__dirname)
var filename = fs.readdirSync("E:\\odin\\server\\images")
// console.log(filename)

// function read(i){
    //     fs.readFile(`${E:\\odin\\server\\files}\\${i}`,"utf-8",(err,data)=>{
        //         console.log(data);
        //     })
        // }
        // let str ;
        
        // console.log(str)
        app.get("/images",(req,res)=>{
            // filename.forEach(i => {
                //     fs.readFile(`${"E:\\odin\\server\\files"}\\${i}`,"utf-8",(err,data)=>{
                    //         res.write(data)
                    //     })
                    //     res.end()
                    // })
                    
                    res.send(filename)
                    const msg = req.query.msg;
                    console.log(msg);
                })
        app.use('/images',express.static(__dirname+'/images'))
        // app.use('/images',express.static("E:\\odin\\calculate.html"))

app.listen(3005)
