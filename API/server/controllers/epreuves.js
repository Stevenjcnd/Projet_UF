import {getEpreuves, createEpreuve} from "../models/epreuvesModel.js"

export const showEpreuves = (req, res)=>{
    getEpreuves((err, results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

export const InsertEpreuve = (req, res)=>{
    const data = req.body;
    createEpreuve(data, (err, results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}
