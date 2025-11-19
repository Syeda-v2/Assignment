function sleep(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}

async function display(){
    console.log("helo");
    await sleep(3000);
    console.log("bye");
    console.log("okay");
}
display();
