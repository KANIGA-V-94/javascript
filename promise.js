//example => google map
//location
function isLocationValid(loc) {
    var v = "Melbourne"
    if (v === loc) {
        return true
    }
    else {
        return false
    }
}

function location() {
    //design entire new promise
    return new Promise(function (response, errorMsg) {
        setTimeout(function () {
            loc = "Melbourne"
            console.log("the location is", loc)
            if (isLocationValid(loc)) {
                return response("Location found")
            }
            else {
                return errorMsg("Location Not Found")
            }

        }, 2000)
    });
}
location()
    .then(
        function (response) {
            console.log(response)
        }
    )
    .catch(
        function (errorMsg) {
            console.log(errorMsg)
        }
    )
