function call(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name);
            console.log(`${name}반가워`);
            resolve();
        },1000);
    })
}

function back(txt){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(txt);
            console.log(`${txt}을 실행했구나`);
            resolve();
        },1000);
    })
}

function hell(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log(`여기는 ${message}`)
        },1000);
        resolve();
    })
}

// call('kim').then(back('back')).then(hell('callback hell'))

async function cb(){
    await call('kim');
    await back('back');
    await hell('callbackhell');
}
cb();



