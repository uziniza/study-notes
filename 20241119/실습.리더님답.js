// 기존 콜백 코드
function call(name, cb) {
    setTimeout(function () {
      console.log(name);
      cb(name);
    }, 1000);
  }
  
  function back(cb) {
    setTimeout(function () {
      console.log("back");
      cb("back");
    }, 1000);
  }
  
  function hell(cb) {
    setTimeout(function () {
      cb("callback hell");
    }, 1000);
  }

//콜 
//   call('kim',function(name){
//     console.log(name+"반가워")
//     back(function(txt){
//         console.log(txt+"을 실행했구나")
//       hell(function(message){
//         console.log('여기는'+message)
//       })
//     })
//   })

//promise
function callpromise(name, cb) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log(name);
            resolve(name);//cb 대신 resolve로 값 넘기기
          }, 1000);
    })
    
  }
  
  function backpromise() {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("back");
            resolve("back");//then으로 back 문자열 넘겨줌
        },1000);
    })
    
  }
  
  function hellpromise(cb) {
    return new Promise((resolve)=>{//reject 생략가능
        setTimeout(function () {
            resolve("callback hell");
          }, 1000);
    })
    
  }

  callpromise('kim').then((result)=>{
    console.log(result + "반가워");
    return backpromise();
  }).then((txt)=>{
    //txt는 이전 then의 리턴값 = backpromise의 resolve 값 = "back"
    console.log(txt+'를 실행했구나')
    return hellpromise();//다음 then에서 뭔가를 쓸 수 있도록
  }).then((message)=>{//이전 then에서 사용한 매개변수가 적용됨=return을 어떻게 하는지에 따라 달라짐
    // -> 문자열을 넣으면 문자열을 넣은 대로 나옴 ex) return '안녕하세요'-> 여기는 안녕하세요
    console.log('여기는'+message)
  })

  //asncy&await
  async function exec(){
    const name = await callpromise("yujin")
    console.log(name +'반가워')
    const back = await backpromise()
    console.log(back+"를 실행했구나")
    const hell = await hellpromise()
    console.log("여기는"+hell)
  }
  exec();