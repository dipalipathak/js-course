 const Arr = [0,1,2,3,4,5,6,7];
const myArr =["muskan","harshit","dipali"];
 console.log(Arr[3]);
 console.log(myArr[0]);
//methods of array:
const Arr1 = [0,1,2,3,4,5,6,7];
console.log(Arr1.length);
 Arr1.push(8);
 console.log(Arr1);
 Arr1.pop(); 
console.log(Arr1);
console.log(Arr1.includes(5));
 console.log(Arr1.indexOf(2));

const Arr2 = [0,1,2,3,4,5,6,7];
const newArr = Arr2.join();
console.log(Arr2);
console.log(newArr);
console.log(typeof newArr);
console.log("A",Arr2);
console.log(Arr2.slice(1,6));
console.log(Arr2.splice(1,4));
//ayush
//Array function:
const bestfriends = ["muskan","dipali", "harshit","supriya"];
const friends = ["digvijay","vikas","manshi","rubina"];
const all_friends =[...bestfriends,...friends];
console.log(all_friends);
const another_array = [1,2,3,4,5,[1,3,5],6,7,8,[8,9],];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

 console.log (Array.isArray('harshit'));
 console.log(Array.from("harshit"));
 let name1 = "harshit";
 let name2 = "muskan";
 let  name3= "sonal";
 let name4 = "shalini";
 console.log(Array.of(name1,name2,name3,name4));




