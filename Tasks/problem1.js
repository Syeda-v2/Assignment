function fakeAjax(url,cb){
    var fakeResponses = {
        "file1":"The first text",
        "file2":"The middle text",
        "file3":"The last text"
    }

    var randomDelay = (Math.round(Math.random()*1E4)%8000+1000)
    console.log("Requesting:" +url);

    setTimeout(function(){
        cb(fakeResponses[url]);
    },randomDelay);
}

let response = {};
let arr = ['file1','file2','file3'];
let count = 0;

 function getFile(file) {
    fakeAjax(file, function(text){
        response[file] = {text:text , printed:false};
        count++;
        tryToPrint();
    })
}

function tryToPrint(){
    for(let i=0; i<arr.length; i++){
        let file = arr[i];

        if(response[file] && !response[file].printed){
            console.log(response[file].text);
            response[file].printed=true;
        }else if(!response[file]){
            return;
        }
    }
    if(count === arr.length){
        console.log('completed');
    }
}

getFile('file1');
getFile('file2');
getFile('file3');