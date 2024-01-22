//OBJECTS

//HOW WILL you DECLARE OBJECTS
//1st way

var customerDetails = {
    "Name" : "Kani",
    "Age" : 19,
    "Phoneno" : "9360350134",
    "Email_id" : "kanigav2004@gmail.com"
}/*comma(,) is optional for last key:value pair in object */
console.log(customerDetails)
customerDetails["id"] = "21ECR094"
customerDetails["place"] = "Salem"
console.log(customerDetails)

//why key does not hold any quote in your object   
//because key is inbuilt in function output{name:'kani'}


//2nd way

var customerDetails = {}
customerDetails["id"] = "21ECR094"
customerDetails["name"] = "klaus"
customerDetails["age"] = "20"
customerDetails["Phoneno"] = "9360350134"
console.log(customerDetails)



//3rd way

var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Excellent"
kongu["food"] = "pretty decent"
kongu["hostel_count"] = 10
console.log(kongu) 
console.log(kongu.food)/*the path of access to key inside the object(.)*/
console.log(kongu["food"])