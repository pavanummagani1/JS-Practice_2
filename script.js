//1. Write a program using a for loop to print numbers from 1 to 10.
for(var i = 1; i<=10; i++){
    console.log(i);
}
//2. Print the multiplication table of 5 using a for loop.
for(var i = 1; i<=10; i++){
    console.log(`5*1=${5*i}`);
}
//3. Write a program to calculate the sum of the first 10 natural numbers using a while loop.
var sum = 0;
var i=1;
while(i<=10){
    sum = sum+i;
    i++;
}
console.log(sum);
//4. Use a for...of loop to iterate over an array of colors and print each color.
var arr = ['Red','Green','White','Yellow','Orange','Voilet'];
for(var i of arr){
    console.log(i);
}
/**
5
Create a for...in loop to print all the properties and their values of the following object:
javascript
*/
var student = { name: "Alice", age: 20, grade: "A" };
for(var i in student){
    console.log(`${i}:${student[i]}`);
}


//6. Write a program to print all numbers from 1 to 50 using a for loop.
for(var i =1; i<=50;i++){
    console.log(i)
}

//7. Use a while loop to print all numbers from 10 to 1 in reverse order.
for(var i =10; i>=0;i--){
    console.log(i);
}

//8. Write a program to print the characters of the string "JavaScript" one by one using a for loop.
var str = "Javascript";
for(var i=0; i<str.length;i++){
    console.log(str[i]);
}

//9. Use a for loop to print all odd numbers between 1 and 20.
for(var i = 1; i<=20;i++){
    if(i%2!==0){
        console.log(i)
    }
}

/**
10
Create a program to print the elements of an array using a for loop:
*/
var fruits = ["Apple", "Banana", "Cherry", "Date"];
for(var i = 0; i<fruits.length;i++){
    console.log(fruits[i]);
}
/**
11 Use a for...in loop to print the keys of an object:
*/
var car = { brand: "Toyota", model: "Corolla", year: 2022 };
for(var i in car){
    console.log(i);
}
//12 Write a program using a do...while loop to print numbers from 1 to 5.
var i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);

//13 Use a for loop to print the square of numbers from 1 to 10.
for(var i = 1; i<=10;i++){
    console.log(i**i);
}

//14 Iterate over a string "HELLO" using a for...of loop and print each character.
var str = "HELLO";
for(var i in str){
    console.log(str[i]);
}

//15 Write a program to count how many numbers between 1 and 100 are divisible by 3 using a for loop.
for(var i = 1; i<=100;i++){
    if(i%3==0){
        console.log(i);
    }
}

/**
16 Use a for loop to calculate the sum of the numbers in this array
*/
var numbers = [5, 10, 15, 20];
var sum = 0;
for(var i = 0; i<numbers.length;i++){
    sum = sum+numbers[i];
}
console.log(sum);

/**
17 Use a for...of loop to print the names in an array:
*/
var names = ["Alice", "Bob", "Charlie"];
for(var i of names){
    console.log(i);
}
// 18 Write a program to print all even numbers from 2 to 20 using a while loop.
for(var i = 2; i<=20;i+=2){
    console.log(i);
}

// 19 Create a for loop to calculate the total of numbers from 1 to 100.
var count = 0;
for(var i = 0; i<=100;i++){
    count = count+1;
}
console.log(count);

// 20 Use a for loop to print the multiplication table of 2 up to 10.
for(var i = 1; i<=10; i++){
    console.log(`2*1=${2*i}`);
}

//21 Write a program that stops a for loop when it reaches the number 5 using a break statement.
for(var i = 0; i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}

//22 Use a for loop with a continue statement to skip the number 3 while printing numbers from 1 to 10.
for(var i = 0; i<=10; i++){
    if(i==3)continue;
    console.log(i);
}

/**
23
Iterate over the following array and print each number multiplied by 2:
*/
var nums = [1, 2, 3, 4, 5];
var num = [];
for(var i = 0; i<nums.length;i++){
    num.push(nums[i]*2);
}
console.log(num);

/**
24
Write a program using a loop to print this pattern:

1
2 2
3 3 3
4 4 4 4
*/
for(var i = 1;i<=4;i++){
    var row = '';
    for(var j = 1; j<=i;j++){
        row = row+i+" ";
    }
    console.log(row);
}


//25 Use a for loop to reverse the string "WORLD" and print it.
var str = 'WORLD';
for(var i =(str.length-1);i>=0;i--){
    console.log(str[i]);
}
