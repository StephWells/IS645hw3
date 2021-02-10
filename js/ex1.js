var username = prompt("Please enter your name: ");

var grade = parseInt(prompt("Please enter your number of units completed in college: "));

if(grade<0){ console.log("Invalid entry. Please try again")}

else{
    console.log("Hello"+ username )
    
    if (grade >= 0 && grade <= 30 ) {console.log("Your grade standing is Freshman ")};
    if (grade >= 31 && grade <= 60 ) {console.log("Your grade standing is Sophomore ")};
    if (grade >= 61 && grade <= 90 ) {console.log("Your grade standing is Junior ")};
    if (grade >= 91) {console.log("Your grade standing is Senior ")};
}
console.log("Stephanie Wells- IS 645 HW3 Exercise 1");