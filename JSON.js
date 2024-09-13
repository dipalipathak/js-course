let text ='{"students": [ ' +
'{"firstname" : "Muskan","lastname" : "Baghel"}, ' + 
'{"firstname" : "Harshit","lastname" : "Gautam"}' + 
'{"firstname" : "Dipali","lastname" : "Pathak"}]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML=
obj.students[2].firstname + " ", + obj.students[2].lastname;











