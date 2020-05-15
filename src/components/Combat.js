import React from 'react';
import Arenes from "./Arenes";
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomiseur = entierAleatoire(0, 5);
const idRandomSelect = Arenes[randomiseur];
//console.log("stat1: " + idRandomSelect.stats.stat1, "stat2: " + idRandomSelect.stats.stat2, "stat3: " + idRandomSelect.stats.stat3, "name: " + idRandomSelect.name, "image: " + idRandomSelect.photo.src)
const debutUrl = "./images/arene/";
const urlim = debutUrl + idRandomSelect.photo.src;

let perso1 = {};
let perso2 = {};

async function getPersoData(url, stat1, stat2, stat3) {
    const res = await axios.get(url)
        .then(response => response.data)
        .then(data => {
            return {
                stat1: data[stat1],
                stat2: data[stat2],
                stat3: data[stat3]
            };
        });
    return res;
}

function fight(idPerso1, idPerso2) {
    const randomiseur = entierAleatoire(0, 5);
    const idRandomSelect = Arenes[randomiseur];
    const debutUrl = "./images/arene/";
    const urlim = debutUrl + idRandomSelect.photo.src;

    const ArenaName = idRandomSelect.name;
    const stat1 = idRandomSelect.stats.stat1;
    const stat2 = idRandomSelect.stats.stat2;
    const stat3 = idRandomSelect.stats.stat3;

    const url = `https://www.superheroapi.com/api.php/108881107445202/${idPerso1}/powerstats`;
    const url2 = `https://www.superheroapi.com/api.php/108881107445202/${idPerso2}/powerstats`;
    // Use axios to get data from the url

    perso1 = getPersoData(url, stat1, stat2, stat3);
    console.table("Perso 1 Combat : ", perso1, idPerso1);
    perso2 = getPersoData(url2, stat1, stat2, stat3);
    console.table("Perso 2 Combat : ", perso2, idPerso2);

    let cpt1 = 0;
    let cpt2 = 0;

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
        return perso1
    } else {
        return perso2
    };
}


class Combat extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>
                    Test
                    </p>
            </div>
        )
    }
}
export default Combat;