//promises with async and await

const fs2 = require('fs').promises;

async function readFiledata(){
    try{
        const data = await fs2.readFile('data.txt', 'utf8');
        console.log(data.toString());
    }catch(err){
        console.log(err);
    }
}
readFiledata();

//promises with .then() and .catch()

function readFile(filename){
    return new Promise(function (resolve,reject){
        fs1.readFile(filename, 'utf8', function(err,res){
            if(err) reject(err);
            else resolve(res);
        });
    });
}
readFile('data.txt')
   .then(data => {
    console.log(data.toString());
   })
   .catch(err =>{
    console.log(err)
   });


