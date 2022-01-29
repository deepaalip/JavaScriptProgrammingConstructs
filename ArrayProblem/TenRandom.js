let randomNumbers = [];

for(let i = 0; i<10; i++){
    randomNumbers[i] = Math.floor((Math.random()*889)+100);

}
console.log(randomNumbers);
let largestNumber=0;
let secondsmallestNumber = 0;
for (let i = 0; i<randomNumbers.length; i++){
    if(largestNumber < randomNumbers[i]){
        secondsmallestNumber = largestNumber;
        largestNumber = randomNumbers[i]; 
    }
    else{
        secondsmallestNumber = randomNumbers[i];
    }
    
}
console.log("smallest number" +secondsmallestNumber);
