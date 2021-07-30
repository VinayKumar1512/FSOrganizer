//-> requiring fs and path module
let fs = require("fs");
let path = require("path");

//-> types array denotes type of file
let types = {
  media: [".mp4", ".mkv"],
  archives: [".zip", ".7z", ".rar", ".tar", ".gz", ".ar", ".iso", ".xz"],
  documents: [
    ".docx",
    ".doc",
    ".pdf",
    ".xlsx",
    ".xls",
    ".odt",
    ".ods",
    ".odp",
    ".odg",
    ".odf",
    ".txt",
    ".ps",
    ".tex",
  ],
  app: [".exe", ".dmg", ".pkg", ".deb"],
};

//organize file function
function organizefn(inputPath) {
  let content = fs.readdirSync(inputPath);
  // console.log(content);

  for (let i = 0; i < content.length; i++) {
    let contentpath = path.join(inputPath, content[i]);
    let exttype = path.extname(contentpath);
    // console.log(exttype);
    let category = extCategory(exttype);

    if (category === "media") {
      let dirPath = path.join(inputPath, "Media");

      if (fs.existsSync(dirPath)) {
        fileCopying(contentpath, dirPath);
      } else {
        fs.mkdir(dirPath);
        fileCopying(contentpath, dirPath);
      }
    } else if (category === "archives") {
      let dirPath = path.join(inputPath, "Archives");
      if (fs.existsSync(dirPath)) {
        fileCopying(contentpath, dirPath);
      } else {
        fs.mkdirSync(dirPath);
        fileCopying(contentpath, dirPath);
      }
    } else if (category == "documents") {
      let dirPath = path.join(inputPath, "Documents");
      if (fs.existsSync(dirPath)) {
        fileCopying(contentpath, dirPath);
      } else {
        fs.mkdirSync(dirPath);
        fileCopying(contentpath, dirPath);
      }
    } else if (category == "app") {
      let dirPath = path.join(inputPath, "App");
      if (fs.existsSync(dirPath)) {
        fileCopying(contentpath, dirPath);
      } else {
        fs.mkdirSync(dirPath);
        fileCopying(contentpath, dirPath);
      }
    } else {
      let dirPath = path.join(inputPath, "other");
      if (fs.existsSync(dirPath)) {
        fileCopying(contentpath, dirPath);
      } else {
        fs.mkdirSync(dirPath);
        fileCopying(contentpath, dirPath);
      }
    }
  }
  console.log("Organize Command Executed at " + inputPath);
}


function fileCopying(contentpath, dirPath) {
  let stats=fs.lstatSync(contentpath);
  if(stats.isFile()){
    let filetobeCopied = path.basename(contentpath);
    let destPath = path.join(dirPath, filetobeCopied);
    fs.copyFileSync(contentpath, destPath);
    fs.unlinkSync(contentpath);
  }
}

function extCategory(exttype) {
  for (let keys in types) {
    let keyArr = types[keys];
    for (let j = 0; j < keyArr.length; j++) {
      if (exttype == keyArr[j]) {
        return keys;
      }
    }
  }
  return "other";
}

module.exports = {
  fno: organizefn,
};
