'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    console.log('current class name:' + className)
})

class Team {
    constructor(name, firstPickOdds){
        this.name = name;
        this.firstPickOdds = firstPickOdds;
    }
}

class Lottery{
    constructor(teams){
        this.teams = teams;
        this.population = new [];
    }
    
     Prepare(){
        teams.forEach(element => {
            population = population + ()
        });
    }
    Pick(){

    }
}