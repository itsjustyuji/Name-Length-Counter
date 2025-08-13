import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
  res.render("index.ejs");
})

app.use(express.urlencoded({extended: true}));

app.post("/submit",(req,res)=>{
  const countofLetters=req.body["fName"].length+req.body["lName"].length;
  res.render("index.ejs", {totalCount: countofLetters});
});

app.listen(port, ()=>{
  console.log(`Port ${port} is working.`);
});