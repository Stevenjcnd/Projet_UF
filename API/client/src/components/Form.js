import React, {useState} from "react";
import {TextField, Typography, Container, CssBaseline, Button, FormControlLabel, Grid, Checkbox, Link, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
import useStyles from "../components/style.js"

const Form = ()=>{
    const classes = useStyles();
    const titre = "Création d'utilisateur"
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        axios.post("http://localhost:5000/API/users", {
            name: name,
            password: password,
        }).then((response)=>{
            console.log(response);
        });
    }

    const getClients = async (e) =>{
        e.preventDefault();

        axios.get("http://localhost:5000/API/users").then((response)=>{
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

                    <TextField variant="outlined" margin="normal" required fullWidth id="password" name="password" label="Mot de passe" type="password" autoComplete="current_password" onChange={(e)=>{setPassword(e.target.value)}}>

                    </TextField>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> 
                        {titre}
                    </Button>
                </form>
            </div>
            <div className={classes.paper}>
                <p> </p>
                <p> </p>
                <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={getClients}> 
                        get users
                </Button>
            </div>
        </Container>
            
    )
}

export default Form;