//example 1 => function without argument without return type
/*function fun(){
    console.log("function sample example")
}
fun()*/

//example 2 => function with argument without return type

/*function fun(a,b){
    console.log("function with argument without return type")
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("the number",i,"is even")
        }
        else{
            console.log("the number",i,"is odd")
        }
    }
}
fun(5,10)*/

//example 3 => function with argument and return type
/*function fun(a,b){
    console.log("function with argument with return type")
    if(a%b==0)
    {
        return a
    }
    else{
        return b
    }
}
console.log(fun(2,5))*/

//example 4 => function without argument and with return type
function fun()
{
    a=2
    b=6
    console.log("function without argument with return type")
    if(a%b==0)
    {
        return a
    }
    else{
        return b
    }
}
console.log(fun())
