'use strict'

$('.buildTeamTable').on('click', buildTeamTable);

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    console.log('current class name:' + className)
})

function buildTeamTable(){
  var table = document.getElementById("teamTable");
  var teamNum = parseInt($('#teamNum').val());

  for (let i = 0; i < teamNum; i++) {
    var row = table.insertRow(i+1);
    row.insertCell(0).innerHTML = `<input type="text" name="team${i+1}" id="team${i+1}">`;
    row.insertCell(1).innerHTML = `<input type="number" name="teamOdds${i+1}" id="teamOdds${i+1}">`;
  }

  $('#team_').append(new_input);
  $('#total_team').val(newTeamNumber);
}