const employeInformation = {
     name:"dipalipathak",
    location: "indore",
   emailId: "dipalipathak@123gmail",
    isLoggedIn: false,
     officeDays: ["mon","tue","fri"],
     mySym: "mykey1"

    
 }
//  console.log(employeInformation.emailId);
//  console.log(employeInformation["name"]);
//  console.log(employeInformation["officeDays"])

//  Object.freeze(employeInformation)
//  console.log(employeInformation)

 employeInformation.greeting = function(){
    console.log(" hello dipalipathak");
 }
 employeInformation.greetingtwo = function(){
    console.log( `hello dipalipathak , ${this.name} `);
 }
 console.log(employeInformation.greeting());
 console.log(employeInformation.greetingtwo());





