import {getUsers, createUser} from "../models/usersModel.js"

export const showUsers = (req, res)=>{
    getUsers((err, results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

export const InsertUser = (req, res)=>{
    const data = req.body;
    createUser(data, (err, results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}
