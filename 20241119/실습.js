//callback
// function goMart(){
//     console.log("마트에 가서 어떤 음료를 살지 고민한다.")
// }
// function pickDrink(callback){
//     setTimeout(() => {
//         console.log('고민끝!!');
//         product = '제로콜라';
//         price = 2000;
//         callback(product,price);
//     }, 3000);
// }
// function pay(product,price){
//     console.log(`상품명:${product}, 가격:${price}`)
// }
// let product;
// let price;
// goMart();
// pickDrink(pay);

//promise
function goMart(){
    console.log("마트에 가서 어떤 음료를 살지 고민한다.")
}
function pickDrink(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('고민끝!!');
            product = '제로콜라';
            price = 2000;
            resolve();
        }, 3000);
    });
  
}
function pay(){
    console.log(`상품명:${product}, 가격:${price}`)
}
let product;
let price;
// goMart();
// pickDrink().then(pay);

async function mart(){
    goMart();
    await pickDrink();
    pay();
}

mart();


