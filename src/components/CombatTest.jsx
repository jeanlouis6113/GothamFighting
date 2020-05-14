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
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let perso1 = {};
let perso2 = {};


function CombatTest(props) {


    let randomiseur;
    let idRandomSelect;
    let urlim;
    const classes = useStyles();
    const [winner, setWinner] = useState({});
    const [loser, setLoser] = useState({});
    const [arena, setArena] = useState([]);
    const [txtAlert, setTxtAlert] = useState([]);
    const [open, setOpen] = React.useState(true);

    /*async function getPersoData(url, stat1, stat2, stat3) {
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
    loadPerso(props.idPerso2);*/


    async function fight(idPlayer1, idPlayer2) {
        const ArenaName = idRandomSelect.name;
        const stat1 = idRandomSelect.stats.stat1;
        const stat2 = idRandomSelect.stats.stat2;
        const stat3 = idRandomSelect.stats.stat3;
        const stat1Img = "/images/icone/" + stat1 + ".png";
        const stat2Img = "/images/icone/" + stat2 + ".png";
        const stat3Img = "/images/icone/" + stat3 + ".png";
        console.log("img1 :" + stat1Img);

        const Arena = [ArenaName, urlim, stat1Img, stat2Img, stat3Img, stat1, stat2, stat3];
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
            const txtAlert = "You won you are justice!";
            setWinner(winner);
            setLoser(loser);
            setTxtAlert(txtAlert);
        } else {
            const winner = props.idPerso2;
            const loser = props.idPerso1;
            const txtAlert = "HA HA HA! Sore loser!";
            setWinner(winner);
            setLoser(loser);
            setTxtAlert(txtAlert);
            ;
        };
    }

    useEffect(() => {
        randomiseur = entierAleatoire(0, 5);
        idRandomSelect = Arenes[randomiseur];
        urlim = idRandomSelect.photo.alt;
        fight(props.idPerso1.id, props.idPerso2.id);
    }, []);

    return (
        <Grid container direction="row" alignItems="center" justify="center" className={arena[1]}>
            <div className={classes.root}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {txtAlert}
                    </Alert>
                </Collapse>
            </div>
            <Grid container sm={12} md={12} lg={12} direction="row" alignItems="center" justify="space-between">
                <Grid item sm={1} md={1} lg={1}>
                    <Grid container item sm={1} md={1} lg={1} className="logo-fight">
                        <Logo />
                    </Grid>
                </Grid>
                <Grid item sm={9} md={5} lg={5} className="text-center">
                    <h3 id="arena-name" className="fight-title text-center capitalize">{arena[0]}</h3>
                </Grid>
                <Grid item sm={1} md={0} lg={0} alignItems="flex-end" justify="flex-end" className="button-fight">
                    <ButtonSettings />
                </Grid>
            </Grid>

            <Grid item sm={10} md={4} lg={4} className="text-center">
                <CardActionArea >
                    <CardContent>
                        <Typography gutterBottom="true" align="center" className="fight-name winner text-center">
                            {winner.name}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item sm={10} md={12} lg={12}>
                            <img src={winner.image} alt="" className="avatarCombat" />
                            <h4 className="winner fight-status">Winner</h4>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Grid>

            <Grid md={2} lg={2} className="text-center">
                <img src="./images/vsLogo.png" alt="VS" className="imageVs"/>
                <ButtonBio />

                <Grid container justify="center">
                    <Grid item md={3} lg={3} className="stat-wrapper">
                        <Tooltip title={arena[5]} placement="bottom">
                            <img className="stat-fight" src={arena[2]} alt="stat1" />
                        </Tooltip>
                    </Grid>

                    <Grid item md={3} lg={3} className="stat-wrapper">
                        <Tooltip title={arena[6]} placement="bottom">
                            <img className="stat-fight" src={arena[3]} alt="stat2" />
                        </Tooltip>
                    </Grid>

                    <Grid item md={3} lg={3} className="stat-wrapper">
                        <Tooltip title={arena[7]} placement="bottom">
                            <img className="stat-fight" src={arena[4]} alt="stat3" />
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>

            <Grid md={4} lg={4} className="text-center">
                <CardActionArea>
                    <CardContent className="avatarName">
                        <Typography gutterBottom="true" align="center" className="fight-name loser text-center">
                            {loser.name}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item md={12} lg={12}>
                            <img src={loser.image} alt="" className="avatarCombat" id="imgLoser" />
                            <h4 className="loser fight-status text-center">Loser</h4>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Grid>
        </Grid>
    )

}
export default CombatTest;
