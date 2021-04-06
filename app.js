var mongoose =require('mongoose');
var express=require('express');
var bodyParser=require('body-parser');
var {cateringModel}=require('./model/mess');



var apps=express();


apps.use(bodyParser.json());
apps.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/messdb?retryWrites=true&w=majority")


apps.post('/adduser',async (req,res)=>{
try
{
    var data=req.body;
    console.log(data);
    var data=new cateringModel(req.body);
    var result= await data.save();
    res.json(result);
}
catch(error){res.status(500).send(error)}
})


apps.get('/viewall',async(req,res)=>{
    try
    {
        var result= await cateringModel.find().exec();
        res.json(result);
    }
    catch(error){res.status(500).send(error)}
    }
    )

    apps.post('/search',async(req,res)=>{
        try
        {
           cateringModel.find(req.body, (error,data)=>{
               if(error){throw error}
               else{res.json(data)}
           }) 
        }
        catch(error){res.status(500).send(error)}
        })


     apps.post('/deleteuser',async(req,res)=>{
            try
            {
                cateringModel.findByIdAndDelete(req.body.id, (error,data)=>{
                    if(error){res.send(error)}
                    else( {'Status':'Success'});
                })
            }
            catch(error){res.status(500).send(error)};
            })  
            
   apps.post('/updateuser',async(req,res)=>{
                try
                {
                 cateringModel.findByIdAndUpdate(req.body.id,
                    {
                        name:req.body.name,contactNo:req.body.contactNo,
                        rollNo:req.body.rollNo,address:req.body.address,
                        joiningDate:req.body.joiningDate,messType:req.body.messType,
                        menuType:req.body.menuType,messAmount:req.body.messAmount,
                        userId:req.body.userId,password:req.body.password,
                        confirmPw:req.body.confirmPw},(error,data)=>{
                            
                            if(error){throw error}
                            else{res.json( {'Status':'Success'})};
                        }
                    )   
                }
                catch(error){res.status(500).send(error)}
                })     

apps.listen(process.env.PORT || 3000,{ useNewUrlParser: true},{ useUnifiedTopology: true },function(){
    console.log("Server running fine!!!")
})