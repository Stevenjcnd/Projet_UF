import db from "../config/database.js"

// Récuperation des users

export const getUsers = (result) =>{
    db.query("SELECT * FROM users", (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    });
}

export const createUser = (data, result) => {
    db.query("INSERT INTO users SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    });
}