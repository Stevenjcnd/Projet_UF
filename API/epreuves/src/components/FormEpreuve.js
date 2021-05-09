import React, {useState} from "react";
import {TextField, Typography, Container, CssBaseline, Button, FormControlLabel, Grid, Checkbox, Link, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
import useStyles from "./style.js"

const Form = ()=>{
    const classes = useStyles();
    const titre = "Création d'épreuves"
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dateD, setDateD] = useState("");
    const [dateF, setDateF] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        axios.post("http://localhost:5000/API/epreuves", {
            name: name,
            description: description,
            dateD: dateD,
            dateF: dateF,  
        }).then((response)=>{
            console.log(response);
        });
    }

    const getChallenges = async (e) =>{
        e.preventDefault();

        axios.get("http://localhost:5000/API/epreuves").then((response)=>{
            console.log(response);
        });
    }

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {titre}
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField variant="outlined" margin="normal" required fullWidth id="name" name="name" label="Nom" type="text" autoComplete="name" autoFocus onChange={(e)=>{setName(e.target.value)}}>

                    </TextField>

                    <TextField variant="outlined" margin="normal" required fullWidth id="description" name="description" label="Description" type="text" autoComplete="description" autoFocus onChange={(e)=>{setDescription(e.target.value)}}>

                    </TextField>

                    <TextField variant="outlined" margin="normal" required fullWidth id="dateD" name="dateD" label="Date de début" type="texte" autoComplete="dateD" autoFocus onChange={(e)=>{setDateD(e.target.value)}}>

                    </TextField>

                    <TextField variant="outlined" margin="normal" required fullWidth id="dateF" name="dateF" label="Date de fin" type="texte" autoComplete="dateF" autoFocus onChange={(e)=>{setDateF(e.target.value)}}>

                    </TextField>

                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> 
                        {titre}
                    </Button>
                </form>
            </div>
            <div className={classes.paper}>
                <p> </p>
                <p> </p>
                <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={getChallenges}> 
                        get epreuves
                </Button>
            </div>
        </Container>
            
    )
}

export default Form;