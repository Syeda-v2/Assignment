function fakeAjax(url, cb) {
    var fakeResponses = { 
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text",
    }
    var randomDelay = (Math.round(Math.random() *1E4) % 8000 + 1000)
    console.log("Requesting: " + url);
    
    setTimeout(function(){
        cb(fakeResponses[url]);
    }, randomDelay);
}

    function getFile(file) {
        return new Promise((resolve,reject)=>{
            fakeAjax(file,resolve);
        });
}
const files = ['file1','file2','file3'];


(async function(){
    const mapping = files.map(getFile);
    for(let a of mapping){
       console.log(await a);
    }
    console.log('completed');
})();


 



  