'use strict'

$('.buildTeamTable').on('click', buildTeamTable);

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
})

function buildTeamTable(){
  var table = document.getElementById("teamTable");
  var teamNum = parseInt($('#teamNum').val());

  var header = table.insertRow(0);
  header.insertCell(0).innerHTML = "Team Name";
  header.insertCell(1).innerHTML = "First Pick Percent";

  for (let i = 0; i < teamNum; i++) {
    var row = table.insertRow(i+1);
    row.insertCell(0).innerHTML = `<input type="text" name="team${i+1}" id="team${i+1}">`;
    row.insertCell(1).innerHTML = `<input type="number" name="teamOdds${i+1}" id="teamOdds${i+1}">`;
  };
}

function buildOddsTable(){

  var oddsTable = document.getElementById("oddsTable");
  var teamTable = document.getElementById("teamTable");

  var teamCount = teamTable.rows.length -1;

  var header = oddsTable.insertRow(0);
  header.insertCell(0).innerHTML = "Team Name";
  header.insertCell(1).innerHTML = "First Pick Percent";

  for (let i = 0; i < teamCount; i++) {
    var row = oddsTable.insertRow(i+1);

    var teamName = teamTable.rows[i+1].cells.item(0).children[0].value;
    var teamOdds = teamTable.rows[i+1].cells.item(1).children[0].value;

    row.insertCell(0).innerHTML = teamName;
    row.insertCell(1).innerHTML = teamOdds;
  }
}