import db from "../config/database.js"

// Récuperation des épreuves

export const getEpreuves = (result) =>{
    db.query("SELECT * FROM epreuves", (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    });
}

export const createEpreuve = (data, result) => {
    db.query("INSERT INTO epreuves SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    });
}