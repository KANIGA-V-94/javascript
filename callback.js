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