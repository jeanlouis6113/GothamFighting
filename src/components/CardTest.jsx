// import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import characters from "./characters.json";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";

let charactersId = characters.map((character) => character.id);

// function CardTest() {
//   for (let i = 0; i < charactersId.length; i++) {
//     console.log("fefe", charactersId[i]);
//     let lien = `https://www.superheroapi.com/api.php/108881107445202/${charactersId[i]}/image`;
//     axios
//       .get(lien)
//       .then(function (response) {
//         return response.data;
//       })
//       .then(function (giveThing) {
//         console.log("Test", giveThing);
//       });
//   }

//   return <img src="" alt="CACA" />;
// }
// export default CardTest;

// import React, { useState, useEffect } from "react";

// Ancien:
// const CardTest = () => {
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState([]);
//     useEffect(() => {
//       fetch(`https://www.superheroapi.com/api.php/108881107445202/${charactersId[0]}/image`)
//         .then(response => response.json()) 
//         .then(data => setResults(data.url));
  
//     }, []);



function CardTest() {
    // const [query, setQuery] = useState("");
    // const [results, setResults] = useState([]);
    let arnaque = "";
    fetch(`https://www.superheroapi.com/api.php/108881107445202/${charactersId[0]}/image`)
        .then(response => response)
        .then(data => arnaque = data.url);
    
    console.log(arnaque)

        useEffect(() => console.log('mounted'), []);

        return (
            <div>
                <p>
                    Text
                </p>
            </div>
    
            // <div>
    // <input type="text" value={query}
    // onChange={e => setQuery(e.target.value)}
    // />
    // <ul>{results.map(result => <li>{result.title}</li>)}</ul>
    // </div>
    // <div onChange={e => setQuery(e.target.value)}>
    //     <p>{results.map(result => {result.url})}</p>
    //     <img src={results.map(result => {result.url})} alt="V"/>
    // </div>
    // );
    // console.log("b",results);
        )};

    export default CardTest;

