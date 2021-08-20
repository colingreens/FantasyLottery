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
console.log(lotteryPool.length);

function Populate(item){

    for (let i = 0; i < item.odds.length; i++){
        lotteryPool.push(item);
    }
}