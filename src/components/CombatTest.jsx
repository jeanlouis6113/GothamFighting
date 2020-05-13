import React, { useState, useEffect } from 'react';
import Arenes from "./Arenes";
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Logo from "./Logo";
import ButtonSettings from "./ButtonSettings";
import ButtonBio from "./ButtonBio";
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';



function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let perso1 = {};
let perso2 = {};


function CombatTest(props) {


    let randomiseur;
    let idRandomSelect;
    let debutUrl;
    let urlim;
    const [winner, setWinner] = useState({});
    const [loser, setLoser] = useState({});
    const [arena, setArena] = useState([]);

    async function getPersoData(url, stat1, stat2, stat3) {
        const res = await axios.get(url)
            .then(response => response.data)
            .then(data => {
                return {
                    stat1: Number(data[stat1]),
                    stat2: Number(data[stat2]),
                    stat3: Number(data[stat3])
                };
            });
        return res;
    }


    let theObject = '';
    function loadPerso(idDonne) {
        const url = `https://www.superheroapi.com/api.php/108881107445202/${idDonne}`;
        // Use axios to get data from the url
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                theObject = data;
            });
    }

    loadPerso(props.idPerso1);
    loadPerso(props.idPerso2);


    async function fight(idPlayer1, idPlayer2) {
        const ArenaName = idRandomSelect.name;
        const stat1 = idRandomSelect.stats.stat1;
        const stat2 = idRandomSelect.stats.stat2;
        const stat3 = idRandomSelect.stats.stat3;

        const Arena = [ArenaName, urlim];
        setArena(Arena);

        const url = `https://www.superheroapi.com/api.php/108881107445202/${idPlayer1}/powerstats`;
        const url2 = `https://www.superheroapi.com/api.php/108881107445202/${idPlayer2}/powerstats`;
        // Use axios to get data from the url

        perso1 = await axios.get(url)
            .then(response => response.data)
            .then(data => {
                return {
                    stat1: Number(data[stat1]),
                    stat2: Number(data[stat2]),
                    stat3: Number(data[stat3])
                };
            });
        perso2 = await axios.get(url2)
            .then(response => response.data)
            .then(data => {
                return {
                    stat1: Number(data[stat1]),
                    stat2: Number(data[stat2]),
                    stat3: Number(data[stat3])
                };
            });


        let cpt1 = 0;
        let cpt2 = 0;

        // function fonctionAExecuter() {
        if (perso1.stat1 > perso2.stat1) {
            cpt1 += 1;
        } else {
            cpt2 += 1;
        };
        if (perso1.stat2 > perso2.stat2) {
            cpt1 += 1;
        } else {
            cpt2 += 1;
        };
        if (perso1.stat3 > perso2.stat3) {
            cpt1 += 1;
        } else {
            cpt2 += 1;
        };
        if (cpt1 > cpt2) {
            const winner = props.idPerso1;
            const loser = props.idPerso2;
            setWinner(winner);
            setLoser(loser);
            alert("You won you are justice!");
        } else {
            const winner = props.idPerso2;
            const loser = props.idPerso1;
            setWinner(winner);
            setLoser(loser);
            alert("HA HA HA! Sore loser!")
        };
    }
    

    useEffect(() => {
        randomiseur = entierAleatoire(0, 5);
        idRandomSelect = Arenes[randomiseur];
        debutUrl = "./images/arene/";
        urlim = idRandomSelect.photo.alt;
        fight(props.idPerso1.id, props.idPerso2.id);
    }, []);




    return (
            <Grid container direction="row" alignItems="center" justify="center" className={arena[1]}>
                <Grid container xs={12} direction="row" alignItems="center" justify="space-between">
                    <Grid item xs={1}>
                        <Grid container item xs={1}>
                            <Logo className="logo-fight"/>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} className="text-center">
                        <h3 id="arena-name" className="fight-title text-center capitalize">{arena[0]}</h3>
                    </Grid>
                    <Grid item xs={0} alignItems="flex-end" justify="flex-end" className="button-fight">
                        <ButtonSettings />
                    </Grid>
                </Grid>

                <Grid item xs={4} className="text-center">
                    <CardActionArea >
                        <CardContent>
                            <Typography gutterBottom="true" align="center" className="fight-name winner text-center">
                                {winner.name}
                            </Typography>
                        </CardContent>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <img src={winner.image} alt="" className="avatarCombat" />
                                <h4 className="winner fight-status">Winner</h4>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>

                <Grid xs={2} className="text-center">
                    <img src="https://cuiseur-sous-vide.fr/wp-content/uploads/2019/01/vs-logo-1024x875.png" />
                    <ButtonBio />
                </Grid>

                <Grid xs={4} className="text-center">
                    <CardActionArea>
                        <CardContent className="avatarName">
                            <Typography gutterBottom="true" align="center" className="fight-name loser text-center">
                                {loser.name}
                            </Typography>
                        </CardContent>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <img src={loser.image} alt="" className="avatarCombat" />
                                <h4 className="loser fight-status text-center">Loser</h4>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>
            </Grid>
    )

}
export default CombatTest;
