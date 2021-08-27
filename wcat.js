const fs = require("fs");
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "%") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}

for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
            console.log(fileData);
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\r\n")
            console.log(fileData);
        }
        if(flag == "-rsc") {
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
            console.log(fileData);
        }
        if(flag == "-s"){
            let ans = Snumber(fileData);
            console.log(ans);
        }
        if(flag == "-sn"){
            let ans = Snumbers(fileData);
            console.log(ans);
        }
        if(flag == "-rel"){
            let ans=removeExtraLine(fileData);
            for(let i=0;i<ans.length;i++){
            console.log(ans[i]);
            }
        }
    }
}



function removeAll(string, removalData) {
    return string.split(removalData).join("");
}
function Snumber(data){
    let lines = data.split("\n");
    for(let i=0; i<lines.length; i++){
        lines[i]=(i+1)+ " " + lines[i];
    }
    return(lines);
}
function Snumbers(data){
    let lines = data.split("\r\n");
    let count =1;
    for(let i=0; i<lines.length; i++){
        if(lines[i]!=""){
            lines[i]=count+" "+lines[i];
            count++;
        }
    }
    return(lines);
}

function removeExtraLine(fileData){
    let contentArr=fileData.split("\r\n");
    let data=[];
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }

    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            data.push(contentArr[i]);
        }
    }
    return data;
}
