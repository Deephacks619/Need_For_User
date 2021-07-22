const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");
const webpush = require("web-push");

app.use(cors());
app.use(bodyParser.json());

//console.log(webpush.generateVAPIDKeys());
const publicKey =
  "BIZYjnlpq4ECn7iQ2yojrZqGwwbjAuyrFPHBBpDv8rzjn95DFPBQXEX8aZ7GqIsuW4kp52-lHmpC1-9GKMs1lj0";
const privateKey = "Hib98CpF6a0DBp3u82qBRef6ATtaNMHiVQ_D47hcT68";

//pushing values of servicer to database
app.post("/register", async (req, res) => {
  try {
    let servicerdata = req.body;
      console.log(servicerdata)

    var name = servicerdata[0].username;
    var rollno = servicerdata[0].roll_number;
    var gradyear = servicerdata[0].year;
    var section = servicerdata[0].section;
    var roomno = servicerdata[0].roomno;
    var phoneno = String(servicerdata[0].phoneno);
    var email = servicerdata[0].email;
    var gender = servicerdata[0].gender;
    var service = servicerdata[0].service;

    var obj1 = JSON.parse(servicerdata[1]);
  //  console.log(obj1);
    var endpoint = obj1.endpoint;
    var p256dh = obj1.keys.p256dh; 
    var auth = obj1.keys.auth;

    const newdata = await pool.query(
      "INSERT INTO servicer(name,rollnumber,gradyear,section,roomno,phoneno,email,gender,service,endpoint,p256dh,auth) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING * ",
      [
        name,
        rollno,
        gradyear,
        section,
        roomno,
        phoneno,
        email,
        gender,
        service,
        endpoint,
        p256dh,
        auth,
      ]
    );

    res.json("success");
  } catch (error) {
    console.log("error occured", error);
  }
});

/* retreiving data from databse (servicer table) */

app.get("/UserPage/ServicerDetails", async (req, res) => {
  try {
    var data = await pool.query("SELECT * FROM servicer");
    res.json(data.rows);
  } catch (err) {
    res.status(400).json("error occured");
  }
});

/* send notifications to servicer acc to item */
webpush.setVapidDetails(
  "mailto:deepakkyatham@gmail.com",
  publicKey,
  privateKey
);

var answerservicerdata=[]

app.post("/answerPage", async (req, res) => {
  try{
    const phno = req.body[0];
    var servicerdetails =await pool.query("SELECT * FROM servicer WHERE phoneno= $1", [
      phno,
    ]);
  //  console.log(servicerdetails)
    answerservicerdata.push(servicerdetails.rows);
  //  console.log(answerservicerdata)
    res.json("successfully received responce")
  }
  catch(err){
    console.log('error',err)
  }
});

app.post("/UserPage/ContactDonors", async (req, res) => {
  try {
    // console.log(req.body);
    let item = req.body[0];
    var data = await pool.query("SELECT * FROM servicer WHERE service= $1", [
      item,
    ]);
  //  console.log(data.rows);
    var kk = data.rows;

    answerservicerdata.splice(0,answerservicerdata.length);

    for (i = 0; i < kk.length; i++) {
      const sub = {
        endpoint: kk[i].endpoint,
        expirationTime: null,
        keys: {
          p256dh: kk[i].p256dh,
          auth: kk[i].auth,
        },
      };
      const payload = {
        notification: {
          title: "NEED FOR USER",
          actions: [
            {
              action: "Open Page",
              title: "Open Page",
            },
          ],
          body: `${kk[i].name} is requesting ${kk[i].service}. Do you like to give him what he what? If yes then open page below`,
          dir: "auto",
          icon:
            "https://pbs.twimg.com/profile_images/854195961085734917/0X7AFONJ_normal.jpg",
          badge:
            "https://pbs.twimg.com/profile_images/854195961085734917/0X7AFONJ_normal.jpg",
          lang: "en",
          renotify: true,
          requireInteraction: true,
          tag: 926796012340920300,
          vibrate: [300, 100, 400],
          data: {
            url: "http://localhost:8080/answerPage",
            created_at: Date.now(),
          },
        },
      };

      func(sub, payload);
    }

    setTimeout(function(){
      console.log(answerservicerdata);
      answerservicerdata.push({
        name:'deepak',
        'phoneno':'9951426691',
        'section':'B'
      })
      res.json(answerservicerdata)
    },40000)

  } catch (err) {
    console.log("error occured", err);
  }
});

function func(pushSubscription, payload) {
  webpush.sendNotification(pushSubscription, JSON.stringify(payload));
}

app.listen(5000, () => {
  console.log("running on 5000");
});
