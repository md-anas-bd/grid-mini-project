let passWord = "Abc1234567"
let strengthScore =0;
if(passWord.length < 8 || passWord.length>64){
    console.log("password should be 8 letter not above 64 letter ")
}
if (/[A-Z]/.test(passWord)) {
    strengthScore++
    console.log ("password Score : " , strengthScore);    
} if (/[a-z]/.test(passWord)){
    strengthScore++;
    console.log ("password Score : " , strengthScore);    
} if (/[0-9]/.test(passWord)){
    strengthScore++;
    console.log ("password Score : " , strengthScore);    
} if (/[!@#$%^&*()]/.test(passWord)) {
    strengthScore++;
    console.log ("password Score : " , strengthScore);  
    
} if (/\s/.test(passWord)) {
    console.log ("password Score not contain space");
    
}
if (strengthScore === 0 || strengthScore === 1 ) {
    console.log("password is very weak");
    
} else if (strengthScore === 2 || strengthScore === 3 ){
    console.log("password is  weak");

}  else{ 
    console.log ("password is strong")
    
}