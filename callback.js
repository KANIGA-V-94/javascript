function ramuSomu(msg,callback){
    setTimeout(function(){
        console.log(msg)
        callback();
    },2000)

}
function miniAni(){
    console.log("thambiii varatha poiduuu!!!")
}
ramuSomu("hello ramu and somu \nwelcome to the hell",miniAni)

//form submission example

function submitForm(buttonclick,db){
    setTimeout(function(){
        console.log(buttonclick)
        db();
    },1000)
}
function database(){
    console.log("form submitted successfully")
}
submitForm("Form submit button clicked",database)