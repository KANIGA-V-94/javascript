//SET
//example1
setExample = new Set("aiadmk","bjp","congress","dmk")//it will take first value as entire set //repeated value takes only one time
console.log(setExample)
setExample = new Set(["aiadmk","bjp","congress","dmk"])//set should be encoded in array bracket[]
console.log(setExample)
setExample.add("dmdk")
console.log(setExample)
for(const value of setExample){
    console.log(value)
}//values will be printed

for(key in setExample){
    console.log(key)
}//output will be none

//MAPS
mapEg = newMap("id","21ECR094")//error occur//no key value pair is present
mapEg = newMap(["id","21ECR094"])//error occur bcoz for multiple value it will not recognize proper key to store to iterate the map
mapEg = new Map([
    ["id","21ECR094"],
    ["id1","21ECR500"],
    ["name","klaus"]
])
console.log(mapEg)
//for of loop
for(const value of mapEg){
    console.log(value)
}
//key,value will be printed

//for in loop
for (key in mapEg){
    console.log(key)
}// value not be printed output none
//console.log(mapEg.has(name))//variable name so erorr
console.log(mapEg.has("name"))
console.log(mapEg.get("id"))*/
mapEg.set("age","19")
mapEg.set("phoneno","9360350134")
console.log(mapEg)
mapEg.delete("phoneno")
console.log(mapEg)