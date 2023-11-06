let obj1 = {name: "Siranjeevi" ,age:28 };
let obj2 = {age:28, name: "Siranjeevi" };

let keys1 = Object.keys(obj1)
let keys2 = Object.keys(obj2)
console.log(keys1,keys2)

let flag = true;
if (keys1.length == keys2.length){
    for(let key in obj1){
        if(obj1[key] != obj2[key]){
            flag = false;
        }
    }
}else {
    flag = false;
}
if (flag){
    console.log("object are same")
}
else {
    console.log("object are not same")
}