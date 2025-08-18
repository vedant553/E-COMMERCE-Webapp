const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongooose.connect("mongodb+srv://vedantnandeshwar2003:9FtZKEt9cvDIu0C4@cluster0.om3rvv5.mongodb.net/e-commerce")

// API Creation

app.get("/", ()=>{
    
})
app.listen(port, (error)=>{
    if (!error) {
        console.log("Server Running on Port "+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})