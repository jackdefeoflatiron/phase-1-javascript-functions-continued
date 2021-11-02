function  
saturdayFun(activity= "roller-skate") {
    if (activity) {
       return `This Saturday, I want to ${activity}!`
    }
};
function mondayWork(workspace="go to the office"){
    if (workspace) {
        return `This Monday, I will ${workspace}.`
    }
};
function wrapAdjective(adjective= "*"){
    return function(parameter= "special") {
            return `You are ${adjective}${parameter}${adjective}!`
            
    }
    
}