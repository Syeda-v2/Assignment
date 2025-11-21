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

   let files = ['file1','file2','file3'];
   
   files.reduce((prevPromise,file)=>{
    return prevPromise
    .then(()=>getFile(file))
    .then((text)=>{
        console.log(text);
    })
   },Promise.resolve())

   .then(()=>{
    console.log("complete");
   })
   .catch((err)=>{
    console.log(err);
   })

   

   





























 



  