console.log("First program On VScode");
console.warn("please uninstall the older version");
console.error("this is invalid data");
console.info("this is important");
console.assert(0>1,"zero is less than one");
console.table({Name:"kumud",Marks:40}); 
var Name = "kumud";
var marks=80;
var percentage=89;
var rank;
var gender="F";
var prize=null;
var pass=true;
console.table({marks,Name,percentage,rank,gender,prize,pass});
console.log(typeof marks); 
//let and const
const x =20;
console.log(x);
{ const x=10;
    console.log(x);
}
console.log(x);
 
let Name = "gunjeet";
let marks=90;
let percentage=91;
let rank;
let gender="M";
let prize=null;
let pass=true;
console.table({marks,Name,percentage,rank,gender,prize,pass})






let arr=[4,7,9,"false"];
console.log(arr + " " + typeof arr);

var date = new Date();
console.log(date.getDay);
console.log(typeof date); 


var myvar="55.000008";
myvar=parseFloat(myvar).toFixed(5);
console.log(myvar);
console.log(typeof myvar);


var rank = "55";
var status = 100;
var result = rank + status;
console.log(result)


var myVar = String(34);
console.log(myVar);
console.log(typeof myVar);


var myVar = String(34);
console.log(myVar);
console.log(typeof myVar);
