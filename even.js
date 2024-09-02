let num = 1;
while(num <=20){
    console.log('list', num);
    num++
    if(num % 2 === 1)
        console.log('even number', num);
}


// for(let num = 0; num <= 20; num++){
//     console.log('list:', num);
// }


for(let i = 0; i <= 20; i=i+2){
    console.log('list:', i);
}

for(let i = 0; i <= 20; i=i+5){
    console.log('list:', i);
}

 let sum = 0;

for(let i = 10; i<=30; i++){
    
    sum =sum + i;
    console.log(i);
    
}
console.log('sum number', sum);

        // decremental for loop
for(let i = 10; i >=0; i--){
    console.log(i);
}


// for(let i = 1; i <= 30; i++){

//     if(i % 3 === 0 || i % 5 === 0 )
//         console.log('list:', i);
// }

for(let i = 1; i <= 30; i++){

    if(i % 3 === 0 && i % 4 === 0 )
        console.log('list:', i);
}
