//  Prime Numbers

let num = 13;
let flag = 'true';

for(let i=2;i<num;i++){
    if(num % i === 0){
        flag = 'false';
        break
    }
}
if(flag == 'true'){
    console.log('prime number');
}else{
    console.log('Not prime number');
}
