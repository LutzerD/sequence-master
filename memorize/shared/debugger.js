import Environment from "../../environment";

export const log = function(msg){
    if (Environment.prod){ //logging can throw errors, e.g. no type coercion so logging a double errors. also unnecessary in prod. 
    }else{
        console.log(msg)
    }
};