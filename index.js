const numbers=[3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18];
let Odd= "";
let Even= "";
for(let i=0; i<numbers.length; i++){
if(i%2==0){
 Even+=i;
}
else{
    Odd+=i;
}
console.log("Even Numbers:",Even);
console.log("Odd Numbers:",Odd);
 }
