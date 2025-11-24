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

   let arr = [getFile('file1'),getFile('file2'),getFile('file3')];

   Promise.allSettled(arr)
   .then((results)=>{
    results.forEach(result => {
        if(result.status== "fulfilled"){
            console.log(result.value);
        }
    })
   })
   .catch((err)=>{
    console.log(err);
   })

   





























 



  