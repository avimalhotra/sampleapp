require('dotenv').config();
var express=require("express");
var app=express();
var path=require('path');
const nunjucks=require("nunjucks");
//const db=require('./dao');
//const Pin=require('./models/pin');

app.use(express.static('src/public'));
nunjucks.configure(path.resolve(__dirname,'public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
}); 

var data=["sun","mon","tues","wed","thurs","fri","sat"];

app.get('/',(req,res)=>{
    //res.render('index.html');
    res.header('Access-Control-Allow-Origin',"*");
    return res.send(data);
});

// app.get('/api/:id',(req,res)=>{
//     res.header('Access-Control-Allow-Origin',"*");
//     var pin=req.params.id;
//    if(pin.length==6){
//     Pin.find({pincode:pin}, (err, data) => {
//         if (err) {
//             return res.send(err );
//         }
//         else {
//             if(data.length==0){
//                 return res.send("no pincode found" );
//             }
//             else{
//                 return res.send( data );
//             }
//         }
//     });
//     }
//     else{
//         return res.send("no data found" );
//     }

// });

// app.get('/pincode',(req,res)=>{
//     var pin=req.query.pincode;
//     Pin.find({pincode:pin}, (err, data) => {
//         if (err) {
//             res.render('error.html', { errorMessage: err.message });
//         }
//         else {
           
//             res.render('pincode.html', { data: data });
//         }
//     });
   
// });

app.listen(process.env.PORT,()=>{
    console.log(`server running at http://127.0.0.1:8080`)
})