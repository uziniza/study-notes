function call(name) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log(name);
        resolve(name);
      }, 1000);
    });
  }
  
  function back() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log('back');
        resolve('back');
      }, 1000);
    });
  }
  
  function hell() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('callback hell');
      }, 1000);
    });
  }
  
  // 사용 예
  call('kim')
    .then(name => {
      console.log(name + ' 반가워');
      return back();
    })
    .then(txt => {
      console.log(txt + '을 실행했구나');
      return hell();
    })
    .then(message => {
      console.log('여기는 ' + message);
    });
    //async
    async function main() {
        const name = await call('kim');
        console.log(name + ' 반가워');
      
        const txt = await back();
        console.log(txt + '을 실행했구나');
      
        const message = await hell();
        console.log('여기는 ' + message);
      }
      
      main();