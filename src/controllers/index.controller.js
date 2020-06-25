const path = require('path');

function render (file , res ){
 return res.sendFile(path.join(__dirname + `/../views/${file}.html`));

};

function index(req,res) {
  return render("home",res)
};

const about = (req, res) => render("about",res); 

module.exports = { index ,about };