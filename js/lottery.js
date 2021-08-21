'use strict'

var resultsTable = document.getElementById("resultsTable");
var lotteryPool = [];

function Populate(item){

    for (let i = 0; i < item.odds; i++){
        lotteryPool.push(item);
    }
}

function GetRandomInt(max){
    return Math.floor(Math.random() * max);
}

function LotteryTime(lotteryPool){
    var i = 0;
    while (lotteryPool.length > 0) {
        var selectedTeam = lotteryPool[GetRandomInt(lotteryPool.length)];
        i++;
        var row = resultsTable.insertRow(i);
        row.insertCell(0).innerHTML = i;
        row.insertCell(1).innerHTML = selectedTeam.name;
        lotteryPool = lotteryPool.filter(item => item.name != selectedTeam.name);
    }
}

function buildDraftResultsTable(){

    var teamPool = [];     
    var teamTable = document.getElementById("teamTable");

    var teamCount = teamTable.rows.length -1;

    var header = resultsTable.insertRow(0);
    header.insertCell(0).innerHTML = "Pick";
    header.insertCell(1).innerHTML = "Team";

    for (let i = 0; i < teamCount; i++) {
        
        var teamName = teamTable.rows[i+1].cells.item(0).children[0].value;
        var teamOdds = teamTable.rows[i+1].cells.item(1).children[0].value;
        teamPool.push({name:teamName, odds:teamOdds});;           
    }

    teamPool.forEach( item => Populate(item));
    LotteryTime(lotteryPool);
  
  
  }