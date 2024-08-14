const express = require('express')
const mongoose = require('mongoose')
const userSchema = require('./models/Users.js')
const tourSchema = require('./models/Tour.js')
const bookingSchema = require('./models/Booking.js')
const siteSchema = require('./models/SiteDetails.js')
const commentSchema = require('./models/comments.js')
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const dayjs = require("dayjs");
const cookieParser = require('cookie-parser');
const cors = require("cors");
dotenv.config()
const PORT = 8000
const app = express()
app.use(cookieParser());
app.use(express.json({ limit: "100mb", extended: true, parameterLimit: 100000 }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
    credentials: true,
  })
);
//Connecting to MONGOOES........................................................................................
const PATH = 'mongodb+srv://aarghya171200:XteremO@tours.cptkkfr.mongodb.net/TravoNest?retryWrites=true&w=majority&appName=Tours'
const LocalPATH = 'mongodb://localhost:27017/TravoNest'
try {
    mongoose.connect(LocalPATH);
    const connect = mongoose.connection;    
    console.log("conneted to Database");
} catch (err) {
    console.log(err);
}
//Add USER from admin .........................................................................................
app.post('/user-add',async(req,res)=>{
  try{
    const data = await userSchema.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        dob: new Date(req.body.dob),
        gender: req.body.gender,
        profile_picture: req.body.profile_picture,
        coverPicture: req.body.coverPicture,
        gallery: req.body.gallery
    })
    res.status(200).json({message: "tour uploaded successfully!! "})
  }catch(error){
    console.log(error)
    res.status(400).json({message: "faild to upload"})
  }
})
//Add TOUR from admin........................................................................................
app.post('/tour-upload',async(req,res)=>{
  try{
    const data = await tourSchema.create({
      place :req.body.place,
      image :req.body.image,
      gallery : req.body.gallery,
      tourPlace : req.body.tourPlace.split(","),
      price :parseInt(req.body.price),
      duration :parseInt(req.body.duration),
      tag :req.body.tag.split(","),
      activities :req.body.activities.split(","),
      food :req.body.food.split(","),
      location :req.body.location,
      provider :req.body.provider,
      startDate :new Date(req.body.startDate),
      mode: req.body.mode,
      tagline:req.body.tagline,
      description:req.body.description,
    })
    res.status(200).json({message: "tour uploaded successfully!! "})
  }catch(error){
    console.log(error)
    res.status(400).json({message: "faild to upload"})
  }
})
//REGISTER.............................................................................................
app.post('/register',async(req,res)=>{

  const user = await userSchema.findOne({ email: req.body.email });

  if(!user){
    const data = await userSchema.create({
        email:req.body.email,
        password:req.body.password,
    })
    res.status(200).json({message: "user created successfully!! Login to continue"})
  }else{
    res.status(400).json({message: "user Exist"})
  }
})
app.post('/finalRegister',async(req,res)=>{
  try{
    const data = await userSchema.updateOne({email : req.body.email},{
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        dob: new Date(req.body.dob),
        gender: req.body.gender,
        profile_picture: req.body.profile_picture,
        coverPicture: req.body.coverPicture,
        gallery: req.body.gallery
    })
    res.status(200).json({message: "user created successfully!! Login to continue"})
  }catch(error){
    console.log(error)
    res.status(400).json({message: "user Exist"})
  }
})
//LOGIN..........................................................................................................
app.post('/login',async(req,res)=>{
  const user = await userSchema.findOne({ email: req.body.email });
  if(user){
    if(req.body.password != user.password){
      res.status(401).send("Something went wrong!!");
      return;
    }
    const payload = {
      id: user._id,
      email: user.email
    };
    
    let token;

    try{
      token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
        res.cookie("auth_token", token, {
          //httpOnly: true,
          expires: dayjs().add(30, 'days').toDate(),
          secure: false
        }).json({
          message: `${user.email} Login success`,
          user_id: user._id,
        });
    } catch(err) {
      console.log(err);
      res.status(500).send("Something went wrong!!");
    }
  }else{
    res.status(402).send("Something went wrong!!");
  }
})
//CHECKING for valid user........................................................................................
app.get("/status", async(req,res)=>{
  try{
    const token = req.cookies["auth_token"];
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.json({ loginStatus: true, email: verified.email , user_id: verified.id });
  }catch(error){
    console.log(error);
    res.json({ loginStatus: false})
  }
})
//FETCHING USER DATA.............................................................................................
app.get("/userdata", async(req,res)=>{
  try{
    const userdata = await userSchema.find({});
    res.json({ userdata:userdata });
  }catch(error){
    console.log(error);
    res.json({ userdata:[] });
  }
})
app.get("/profile",async(req,res)=>{
  try{
    const token = req.cookies["auth_token"];
    const isverified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const email = isverified.email
    const data = await userSchema.findOne({email})
    res.json({ data });
  }catch(error){
    console.log(error);
  }
})
app.get("/getTourData",async(req,res)=>{
  try{
    const data = await tourSchema.find({})
    res.json({ data })
  }catch(error){
    console.log(error)
  }
})
app.post("/singleTour",async(req,res)=>{
  try{
    const data = await tourSchema.findOne({_id:req.body.id})
    res.json({ data })
  }catch(error){
    console.log(error);
  }
})
//UPLOAD PROFILE GALLERY.....................................................................
app.post("/gallery_image_adder", async(req,res)=>{
  try{
    const token = req.cookies["auth_token"];
    const isverified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const email = isverified.email
    const data = await userSchema.findOne({email})
    const list = data.gallery
    list.push(req.body.image)
    const isupdate = await userSchema.updateOne({email : email},{
      gallery : list,
    })
    res.status(200).send("Something went wrong!!");
  }catch(error){
    console.log(error);
    res.status(402).send("Something went wrong!!");
  }
}) 
app.post("/bookmark", async(req,res)=>{
  try{
    const token = req.cookies["auth_token"];
    const isverified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const email = isverified.email
    const data = await userSchema.findOne({email})
    if(data.bookmark.includes(req.body.tourID)){
      data.bookmark = data.bookmark.filter(item => item !== req.body.tourID)
      await userSchema.updateOne({email:email},{
        bookmark:data.bookmark,
      })
    }else{
      data.bookmark.push(req.body.tourID)
        await userSchema.updateOne({email:email},{ 
        bookmark:data.bookmark,
      })
    }
    res.status(200).json({bookMark:data.bookmark})
  }catch(error){
    console.log(error);
    res.status(400)
  }
})
app.post("/booking", async(req,res)=>{
  try{
    const token = req.cookies["auth_token"];
    const isverified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const email = isverified.email
    const tourID = req.body.tourID
    const data = await userSchema.findOne({email})
    if(!data.booked.includes(tourID)){
      data.booked.push(tourID)
      await userSchema.updateOne({email:email},{ 
        booked:data.booked
      })
      const tour = await tourSchema.findOne({_id:tourID})
      await bookingSchema.create({
        first_name :data.first_name,
        last_name :data.last_name,
        userId : data._id,
        email :data.email,
        packageId :tour._id,
        packagePrice :tour.price,
        PackageName :tour.place,
        bookingDate : new Date()
    })
    const site = await siteSchema.findOne({ _id:'668a5f70940ea983971ed8e8'})
    const Earnings = parseInt(site.totalEarnings) + parseInt(tour.price);
    const Booked = parseInt(site.totalBooked) + 1;
    await siteSchema.updateOne({ _id:'668a5f70940ea983971ed8e8'},{
      totalEarnings: Earnings,
      totalBooked: Booked
    })
    }

  }catch(error){
    console.log(error);
    res.status(400)
  }
})
/* Booking Details........... */
app.get("/booking",async(req,res)=>{
  try{
    const data = await bookingSchema.find({})
    res.json({ data })
  }catch(error){
    console.log(error)
  }
})
/* Commnet Details........... */
app.get("/comment",async(req,res)=>{
  try{
    const data = await commentSchema.find({})
    res.json({ data })
  }catch(error){
    console.log(error)
  }
})
/* SIte Details........... */
app.get("/site",async(req,res)=>{
  try{
    const data = await siteSchema.findOne({ _id:'668a5f70940ea983971ed8e8'})
    res.json({ data })
  }catch(error){
    console.log(error)
  }
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});