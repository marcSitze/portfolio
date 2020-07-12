const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Render the form
router.get('/', (req, res) => { 
    res.render('pages/index', { 
        user: new Contact(),
        title: "Portfolio"
     });
});

// render the congrat page
router.get('/welcome', (req, res) => {
    res.render('pages/welcome', {
        title: "Thanks"
    });
});
  
router.post('/', async (req, res) => {
 let contact;
    const { email, phone, name, message } = req.body;
    contact = new Contact({
        email,
        phone,
        name,
        message
    });

const errors = [];
if(!email){
    errors.push({ msg: "Please enter your email" });
}
if(!phone){
    errors.push({ msg: "Please enter your phone number" });
}
if(!name){
    errors.push({ msg: "Please enter your name" });
}
if(!message){
    errors.push({ msg: "Please enter your message" });
}
console.log(contact);
    if(errors.length > 0){
      //  return res.status(400).json({ errors: errors.array() });
        return res.status(400).render('pages/index', {
            contact,
            title: "Portfolio", 
            errors
         });
    }

    try {
        const newcontact = await contact.save();
       // console.log(newUser);
        res.status(201).redirect('/welcome');
        
    } catch(err) {
        res.status(400).send(err);
        console.error(err);
    } 
});
 
module.exports = router;