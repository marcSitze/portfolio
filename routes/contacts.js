const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all Candidates
router.get('/', async (req, res) => {

    try{
        const contacts = await Contact.find({});  
        res.render('pages/messages', { 
            contacts,
            title: "Contacts" 
        });
    } catch(err) {
        console.error(err);
    }
});

module.exports = router;