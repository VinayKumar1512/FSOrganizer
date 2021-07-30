let fs=require('fs');

function treefn(inputPath){
    let content = fs.readdirSync(inputPath);
  // console.log(content);

   for(let i=0;i<content.length;i++){
       console.log("|--> " + content[i]);
   }
    console.log("Tree Command Executed at " + inputPath);
}

module.exports={
    fnt:treefn
}