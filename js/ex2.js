var DayEntered = prompt("Please enter a day of the week: (sun, mon, tue, wed, thu, fri, and sat): ")

var FollowingDay

switch (DayEntered) {
    case "mon":
        FollowingDay = "tue";
        break;
    case "tue":
        FollowingDay = "wed";
        break;   
    case "wed":
        FollowingDay = "thu";
        break;
    case "thu":
        FollowingDay = "fri";
        break;
    case "fri":
        FollowingDay = "sat";
        break;
    case "sat" :
        FollowingDay = "sun";
        break;
    case "sun":
        FollowingDay = "mon";
        break;
    default:
        console.log("invalid day");
    

}
console.log("You entered: "+ DayEntered)
console.log("The following day is: " + FollowingDay)

console.log("Stephanie Wells - IS 645 HW3 Exercise 2");