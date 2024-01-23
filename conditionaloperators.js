//if..else
var a = "9"
if(a%2==0)
{
    console.log("variable a is even")
}
else{
    console.log("variable a is odd")
}

//if
var a = 5
if(a!=" ")
{
    console.log("variable a is declared")
}
//nested if...else
var age = 16
if(age>=18)
{if(age>=21)
    {
        console.log("you are eligible to stand as a candidate in election")
    }
    else{
        console.log("you are eligible only for vote")
    }
    
}
else{
    console.log("you are neither eligible to vote nor to candidate")
}

//
var a = 3
if(a>=9)
{if(a==10){
    console.log("your excellent!! and you are grade is O")
}
else{
    console.log("your grade is O")
}
}
else if(9<a<=4)
{
    console.log("your grade is A")
}
else{
    console.log("need improvements")
}

//switch
let color = "blue"
switch(color){
    case "Red":
        console.log("You have chosen red color which symbolises the violence");
        break;
    case "Yellow":
        console.log("you have cosen yellow color which defines for optimism.");
        break;
    case "orange":
        console.log("you have chosen orange color which spread wramth");
        break;
    case "blue":
        console.log("you have chosen blue color which defines loyalty");
        break;
}

//Ternary operator
let age = 60;
result = (age>=59)?"senior citizen":"not a senior citizen";
console.log("you are a",result)
