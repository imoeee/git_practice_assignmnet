//  Prime Numbers

let num = 4;
let count = 0;

for(let i=1;i<=num;i++){
    if(num % i === 0){
        count = count + 1;
    }
}
if(count > 1 ){
    console.log(num + ' prime number');
}else{
    console.log(num + ' Not prime number');
}
