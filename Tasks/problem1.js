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

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

const arr = {};
let files = ['file1','file2','file3'];
let count = 0;
 
function getFile(file) {
    fakeAjax(file, function (text) {
        // what do we do here ???
        arr[file] = text;

        if(Object.keys(arr).length === 3){
            delayPrint();
        }
    })
}

async function delayPrint(){
    const sortKey = Object.keys(arr).sort();
    for(let f of sortKey){
        console.log(arr[f]);
        await delay(1000);
        count++;
    }
    if(count == files.length){
    console.log("completed");
}

}
getFile('file1');
getFile('file2');
getFile('file3');