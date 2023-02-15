var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// const express = require('express'); 
// const app = express(); 
// const port = process.env.PORT || 3001; 

// app.listen(port, () => console.log(`Listening on port ${port}`)); 
// app.use(express.json())

router.post('/addTwo', (req, res) => {
    res.send({ 
        result: parseInt(req.body.a) + parseInt(req.body.b)
    });
}); 

module.exports = router;
