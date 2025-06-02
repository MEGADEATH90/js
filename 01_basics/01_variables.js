const accountId = 144553
let accountEmail = "kaibalyapreetambalrj@gamil.com"
var accountPassword = "12345"
accountCity = "bbsr"

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
console.log();
// accountId = 2 //not allowed
accountEmail = "k@gmail.com"
accountPassword = "2134"
accountCity = "ctc"
console.table([accountId, accountEmail, accountPassword, accountCity])