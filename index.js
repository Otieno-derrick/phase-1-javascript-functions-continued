// code your solution here


function saturdayFun(toDo = 'roller-skate') {
 return (`This Saturday, I want to ${toDo}!`);
}

saturdayFun();


function mondayWork(activity = 'go to the office') {
   return (`This Monday, I will ${activity}.`);
}


function wrapAdjective(init = "*") {
    return function(wrap = "special") {
        return (`You are ${init}${wrap}${init}!`);

    }
}