'use strict'

function buildTeamTable(){
  var tableBody = document.getElementById("teamTable").getElementsByTagName('tbody')[0];
  var tableHead = document.getElementById("teamTable").getElementsByTagName('thead')[0];
  var teamNum = parseInt($('#teamNum').val()); 

  var head = tableHead.insertRow();
  head.insertCell().innerHTML = 'Team';
  head.insertCell().innerHTML = 'Pick Odds';

  for (let i = 0; i < teamNum; i++) {
    var row = tableBody.insertRow();
    row.insertCell(0).innerHTML = `<input type="text" name="team${i+1}" id="team${i+1}">`;
    row.insertCell(1).innerHTML = `<input type="number" name="teamOdds${i+1}" id="teamOdds${i+1}">`;
  };
}

function buildOddsTable(){

  var oddsTable = document.getElementById("oddsTable");
  var teamTable = document.getElementById("teamTable");
  var teamNum = parseInt($('#teamNum').val());

  var teamCount = teamTable.rows.length -1;

  var header = oddsTable.insertRow(0);
  header.insertCell().innerHTML = "Team Name";

  for (let i = 0; i < teamNum; i++) {
    header.insertCell().innerHTML = "Pick" + (i + 1); 
  }
  
  var initalProbabilities = [];
  for (let i = 0; i < teamCount; i++) {
    var row = oddsTable.insertRow(i+1);

    var teamName = teamTable.rows[i+1].cells.item(0).children[0].value;
    var teamOdds = teamTable.rows[i+1].cells.item(1).children[0].value;
    initalProbabilities.push(teamOdds);

    row.insertCell().innerHTML = teamName;
    row.insertCell().innerHTML = teamOdds;
  }

  for (let i = 0; i < teamNum; i++) {
    initalProbabilities.shift();
    var totalProb = initalProbabilities.reduce((a,b) => a + b);
    //var conditionalProb = 
  }
}