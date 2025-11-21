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
        fakeAjax(file,(response)=>{
            if(response){
                resolve(response)
            }else{
                reject(new Error(`No response for ${file}`))
            }
        });
    });

   }

   getFile('file1')
   .then((text1)=>{
    console.log(text1);
    return getFile('file2');
   })
   .then((text2)=>{
    console.log(text2);
    return getFile('file3');
   })
   .then((text3)=>{
    console.log(text3);
    return console.log("completed");
   })
   .catch((err)=>{
    console.log(`Error occured ${err}`);
   })





























 



  