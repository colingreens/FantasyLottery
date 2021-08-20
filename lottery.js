'use strict'

let teamPool = [];
let lotteryPool = [];

teamPool.push({name:"TeamOne", odds:25});
teamPool.push({name:"TeamTwo", odds:25});
teamPool.push({name:"TeamThree", odds:25});
teamPool.push({name:"TeamFour", odds:10});
teamPool.push({name:"TeamFive", odds:10});
teamPool.push({name:"TeamSix", odds:5});

teamPool.forEach( item => Populate(item));
LotteryTime(lotteryPool);

function Populate(item){

    for (let i = 0; i < item.odds; i++){
        lotteryPool.push(item);
    }
}

function GetRandomInt(max){
    return Math.floor(Math.random() * max);
}

function LotteryTime(lotteryPool){
    while (lotteryPool.length > 0) {
        var selectedTeam = lotteryPool[GetRandomInt(lotteryPool.length)];
        console.log("Selected Pick Goes to "+ selectedTeam.name);
        lotteryPool = lotteryPool.filter(item => item.name != selectedTeam.name);
    }
}