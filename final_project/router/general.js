const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      if (!doesExist(username)) {
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registred. Now you can login"});
      } else {
        return res.status(404).json({message: "User already exists!"});
      }
    }
    return res.status(404).json({message: "Unable to register user."});
  });

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    router.get("/",(req,res)=>{
        res.send(JSON.stringify(books,null,4));
    
    });
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    router.get("/ISBN/:ISBN",(req,res)=>{
        const books = req.params.books;
        let filtered_ISBN = users.filter((user) => user.ISBN === ISBN);
        res.send(filtered_ISBN);
    });
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    router.get("/author/:author",(req,res)=>{
        const author = req.params.author;
        let filtered_author = users.filter((user) => user.author === author);
        res.send(filtered_author);
    });
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    router.get("/title/:title",(req,res)=>{
        const title = req.params.title;
        let filtered_title = users.filter((user) => user.title === title);
        res.send(filtered_title);
    });
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    router.get("/review/:review",(req,res)=>{
        const lastName = req.params.lastName;
        let filtered_review = users.filter((user) => user.review === review);
        res.send(filtered_review);
    });
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
