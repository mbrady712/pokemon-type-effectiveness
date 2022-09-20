"use strict";
const types = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground",
        "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
    ]
document.getElementById("attackpic").innerHTML = "<img src='images/normal.png'>";
document.getElementById("defensepic").innerHTML = "<img src='images/normal.png'>";
function addPics(){
    for(let i = 0; i < 18; i++){
        if (document.getElementById("attack").value == types[i]){
            var pic = "<img src='images/" + types[i].toLowerCase() + ".png'>";
            document.getElementById("attackpic").innerHTML = pic;
        }
        if (document.getElementById("defense").value == types[i]){
            var pic = "<img src='images/" + types[i].toLowerCase() + ".png'>";
            document.getElementById("defensepic").innerHTML = pic;
        }
    }
}

function processInput(){
    var attack = document.getElementById("attack").value;
    var defense = document.getElementById("defense").value;
    var attacknum;
    var defensenum;
    for(let i = 0; i < 18; i++){
        if (attack == types[i]){
            attacknum = i + 1;
        }
        if (defense == types[i]){
            defensenum = i + 1;
        }
    }
    const typemat =
    [               //DEFENDING TYPE
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 1, 2, //row 1 ATTACKING TYPE
                    2, 1, 1, 3, 2, 3, 2, 2, 2, 2, 2, 3, 1, 2, 1, 2, 3, 2, //row 2
                    2, 3, 1, 1, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2, 2, //row 3
                    2, 1, 3, 1, 2, 2, 2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 1, 2, //row 4
                    2, 2, 3, 1, 1, 2, 2, 2, 0, 3, 2, 2, 2, 2, 1, 2, 2, 2, //row 5
                    2, 1, 1, 3, 2, 1, 2, 2, 3, 3, 2, 2, 2, 2, 3, 2, 1, 2, //row 6
                    3, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 1, 3, 0, 2, 3, 3, 1, //row 7
                    2, 2, 2, 3, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 3, //row 8
                    2, 3, 2, 1, 3, 2, 2, 3, 2, 0, 2, 1, 3, 2, 2, 2, 3, 2, //row 7
                    2, 2, 2, 3, 1, 2, 3, 2, 2, 2, 2, 3, 1, 2, 2, 2, 1, 2, //row 10
                    2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 0, 1, 2, //row 11
                    2, 1, 2, 3, 2, 2, 1, 1, 2, 1, 3, 2, 2, 1, 2, 3, 1, 1, //row 12
                    2, 3, 2, 2, 2, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 2, 1, 2, //row 13
                    0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 2, //row 14
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 0, //row 15
                    2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 1, //row 16
                    2, 1, 1, 2, 1, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 2, //row 17
                    2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 3, 1, 2 //row 18
    ]
    var calc;
    for (let rowStartind = 0,   rowNum = 1; 
            rowStartind < 324; 
            rowStartind += 18, rowNum++) {
        for (let currentIndex = rowStartind,        colNum = 1; 
                currentIndex < (rowStartind + 18); 
                currentIndex++,                    colNum++) {
            if (rowNum == attacknum && colNum == defensenum){
                calc = typemat[currentIndex];
            }
        }
    }
    const rarray = [
        "Immune",
        "Not Very Effective",
        "Neutral",
        "Super Effective"
    ]
    document.getElementById("response").innerHTML = rarray[calc];
}