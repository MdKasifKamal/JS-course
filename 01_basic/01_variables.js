const Account_Id = 12345678
let Account_email = "abc@gmail.com"
var Account_Password = "12345"
let account_state;// not write vallue so output is undefined

acccountCity = "hajipur"

//Account_Id = 2 not allow same variable in const 
console.log(Account_Id);
Account_Password = "1236789"
Account_email = "ADCE@GMAIL.COM"
acccountCity = "bengaluru"
 
console.table([Account_email, Account_Password, acccountCity, account_state]);// help to print a multiple data 
/* 
prefer not to use var
because of issue in block and functional scope 
*/