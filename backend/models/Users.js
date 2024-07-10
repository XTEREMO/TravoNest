const mongoose = require("mongoose");

const usrSchema = mongoose.Schema({

  first_name :String,
  last_name :String,
  email :{
    type: String,
    required: true,
  },
  password :{
    type: String,
    required: true,
  },
  age :String,
  dob :Date,
  gender :String,
  location :String,
  bookmark :[],
  booked :[],
  profile_picture :String,
  coverPicture: String,
  gallery :[],
});

module.exports = mongoose.model("user", usrSchema);


/* 

{
    "photos": "",
"First Name":"",
"Last Name":"",
"Email Address":"",
"Phone Number":"",
"Date of Birth":"",
"Address ":"",
 "Username":"",
"Password":"",
"Account Creation Date":"",
"List of Bookings":"",
"Preferred Destinations":"",
"Preferred Tour Types":"",
"Billing Address":"",
"User Reviews":"",
}

*/