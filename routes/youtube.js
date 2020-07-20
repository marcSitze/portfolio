const express = require('express');
const router = express.Router();



// Get all Candidates
router.get('/', (req, res) => {

        res.render('pages/youtube', {
            title: "Youtube - Videos" 
        });
});

module.exports = router;