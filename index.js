require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Basic Configuration
app.listen(3000, () => {
      console.log("Server is running on port 3000 ...");
    });
   
    
    mongoose.connect(process.env['MONGO_URI'], { useNewUrlParser: false, useUnifiedTopology: false }, () => {
      console.log('connected to db ...')
    });

  const urlSchema = new mongoose.Schema({
    url: {
      type: String,
      required: true,
    }
  });

  const URL =  mongoose.model("URL", urlSchema);






// middleware
app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



app.post('/api/shorturl',  (req, res) => {
 const newUrl = new URL({
  url: req.body.url,
});
  
 const urlFormat = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)

   
 newUrl.save().then(result => {
   let urlForCheck = result.url;
   if(!urlForCheck.match(urlFormat)) {
     res.json({ error: 'invalid url' });
   }
      res.json({
        original_url: result.url,
        short_url: result.id,
      }); 
   }).catch(error => {
    res.json({ message: error.message });
   });
});





  app.get('/api/shorturl/:id',  (req, res) => {
    let id = req.params.id;
      URL.findById(id).then((result) => {
        if(id !== result.id) {
          res.json({ "error": "invalid url" });
        }
        res.redirect(result.url);
      }).catch(error => {
          res.json({ "error": "invalid url" });
      });
  }); 