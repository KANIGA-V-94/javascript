//async dummy example
async function asAw() {
    var promise = new Promise(function (response) {
        setTimeout(function () {
            response("Example of Async/Await");
        }, 1000)
    }
    )
    console.log(await promise);
}
asAw();

async function post() {
    var post = new Promise(function (instagram) {
        setTimeout(function () {
            instagram("This is my first post");
        }, 1000)
    })
    console.log(await post);//for async await+var name should be give else it will show promise pending 
}
post();
//insta
//comment
//var com;
async function comment() {
    return new Promise(function (comment) {
        setTimeout(function () {
            comment("Just looking like a WOW!!")
        }, 1000)
    })
}
//like
async function likecode() {
    return new Promise(function (like) {
        setTimeout(function () {
            like("This is my first post's like")
        }, 1000)
    })
}
//share
async function sharecode(){
    return new Promise(function(share){
        setTimeout(function(){
            share("I'm loving this video so much so I shared it")
        },1000)
    })
}
//video
async function videocode(){
    return new Promise(function(video){
        setTimeout(function(){
            video("This is my first video I'm posting")
        },1000)
    })
}
//save
async function savecode(){
    return new Promise(function(save){
        setTimeout(function(){
            save("The first post I saved")
        },1000)
    })
}
//user
async function userdetails(){
    return new Promise(function(user){
        setTimeout(function(){
            user("My user details")
        },1000)
    })
}
//post
async function post() {
    var post = new Promise(function (instagram) {
        setTimeout(function () {
            instagram("This is my first post");
        }, 1000)
    })
    var [feed, com, like, share,video,save,user] = await Promise.all([post, comment(), likecode(), sharecode(),videocode(),savecode(),userdetails()])
    console.log(feed);//for async await+var name should be give else it will show promise pending 
    console.log(com)
    console.log(like)
    console.log(share)
    console.log(video)
    console.log(save)
    console.log(user)
}
post();
comment();
likecode();
sharecode();
videocode();
savecode();
userdetails();


