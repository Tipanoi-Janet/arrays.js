//write  a function that accepts an array of strings and console.log each element using for loop.
function nameList(strings){
   for(let j=0;j<strings.length; j++){
  console.log(strings[j]);  
 
  }

}


    let strings=["Janet","Jane","Sheenah"]
    nameList(strings);

    

    //write a function that takes in an array of numbers 
    //console the first four items multiplied by 8 and the last added by 5.console the array with the new values.
    function calc(arr){
        const resultArr=[...arr];
     for (let n=0; n<4;n++){
        resultArr[n] *8
     }   
     const lastItems=resultArr.length;
     resultArr[lastItems-1]+=5;
     resultArr[lastItems-2]+=5;
     console.log(resultArr);
    }
    const arr=[56,9,43,12,23,17];
    calc(arr)

    //write a function that accepyts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
    function arrayOfnum(nums){
        nums.forEach(function (num){
            console.log(num *2);

        });

    }
    let nums=[13,12,3,8,9];
    arrayOfnum(nums);


   //write a function that takes in the following array and use a while loop to iterate break when the item is equal to the fouth index 
   //let arrNum=[1,2,3,4,5,6,7,8,9] 
   function takeArray(arrNum){
    let i=0;

    while( i< arrNum.length){ 
        if(i === 4){
            break;
        }
        console.log(arrNum[i]);
        i++;
    }
}
let arrNum= [1,2,3,4,5,6,7,8,9];
takeArray(arrNum);

//write a function that takes in a an array of strings and use continue statement when the item is at the second index 
function fruitsArr(str){
  for(let l=0;l<str.length;l++){
    if(l===3){
         continue;
    }
    console.log(str[l]);
  }  

}
let fruits=[`Apple`,`Plum`,`Banana`,`Strawberries`,`Kiwi`]
fruitsArr(fruits);