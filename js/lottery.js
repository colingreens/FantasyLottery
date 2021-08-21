'use strict'

var resultsTableBody = document.getElementById("resultsTable").getElementsByTagName('tbody')[0];
var resultsTableHead = document.getElementById("resultsTable").getElementsByTagName('thead')[0];
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
    var header = resultsTableHead.insertRow();
    header.insertCell().innerHTML = "Pick";
    header.insertCell().innerHTML = "Team";
    
    var i = 0;
    while (lotteryPool.length > 0) {
        var selectedTeam = lotteryPool[GetRandomInt(lotteryPool.length)];
        i++;
        var row = resultsTableBody.insertRow();
        row.insertCell(0).innerHTML = i;
        row.insertCell(1).innerHTML = selectedTeam.name;
        lotteryPool = lotteryPool.filter(item => item.name != selectedTeam.name);
    }
}

function buildDraftResultsTable(){

    var teamPool = [];     
    var teamTable = document.getElementById("teamTable");

    var teamCount = teamTable.rows.length -1;

    for (let i = 0; i < teamCount; i++) {
        
        var teamName = teamTable.rows[i+1].cells.item(0).children[0].value;
        var teamOdds = teamTable.rows[i+1].cells.item(1).children[0].value;
        teamPool.push({name:teamName, odds:teamOdds});;           
    }

    teamPool.forEach( item => Populate(item));
    LotteryTime(lotteryPool);
  
  }