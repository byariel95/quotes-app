const path = require('path');
const Db_Url = path.join(__dirname + "/../data/db.json")
let db = require(Db_Url);
const fs = require('fs')


function render (file , res ){
 return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
};


class QuotesController {

    async index( req, res) {
        return render("quotes",res)
    }

    async getQuotes (req,res ){
        return res.send(db);
    }
    
    async addQuote (req,res) {
        const {body: quote } = req;
        let lastQuote = db[db.length-1];
        const { id } = lastQuote;
        quote.id = id+1;
        db.push(quote);
        fs.writeFileSync(Db_Url,JSON.stringify(db));
        return res.status(201).send();
    } 


}

module.exports = new QuotesController();