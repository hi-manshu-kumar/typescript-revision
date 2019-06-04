let example: boolean = true;
let example1: any = 12;             // must avoid doing this
let example2: number = 34;
let example3: string = "Hello World";

// multiple types
let ex : boolean | number = 2;

//implicit vs explicit typing

const arrayExample = [1,2,3,4,5];   //implicit typing ...............const arrayExample: number[] = [1,2,3,4,5]
let reducedArray = arrayExample.reduce((num1, num2) => num1 + num2);            //implicit typing here ......no need to specify the types here


// ============================checking instances================================

//bear.model.ts
export class Bear{
    claws: number;
    constructor(data: number){
        this.claws = data;
    }
}

//index.ts
import {Bear} from './bear.model.ts'
const bear = new Bear(2);

if(typeof bear === Bear){}         //  ---> will give error

if(bear instanceof Bear){           // ---> will work
    console.log("hello world")
}

// =============================type assertions===============================

let hi: any = "I am a string"
let strlength = hi.length;                  //raises an issue length function not applicable on any
    strlength = (hi as string).length;      //type assign
    strlength = (<string>hi).length;

//======================arrays======================================

const array1: string[] = ['Hello World'];             //to have string type of array 
const array2: (number | boolean)[] = [1,2,true];        //to have both number and boolean type of array
const array3: boolean[] = [true, false];
const array4: boolean[][] = [[true, false],[false]]

// ===============================tupples=============================

const exampleTuple: [string, number] = ['hithere', 23];