let helpObj=require("./commands/help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize");

let inputArr=process.argv.slice(2);
let cmdvalue=inputArr[0];
let pathvalue=inputArr[1];

if(cmdvalue==="help"){
  helpObj.fnh();
}
else if(cmdvalue==="tree"){
    treeObj.fnt(pathvalue); 
}
else if(cmdvalue==="organize"){  
    organizeObj.fno(pathvalue);    
}
else{
    console.log("Please Enter a is Valid Command");
}
