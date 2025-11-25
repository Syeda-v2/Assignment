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

   let arr = [getFile('file1'), getFile('file2'), getFile('file3')];
   
   let promise = Promise.resolve(arr);
   for(let i=0; i<arr.length; i++){
    promise = promise.then(()=>{
        return arr[i];
    })
    .then((text)=>{
        console.log(text);
    })
   }
   promise.then(()=>{
    console.log("completed");
   })
   promise.catch((err)=>{
    console.log(err);
   })

   


  


  





























 



  