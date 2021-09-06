'use strict';
const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let arr = JSON.parse(rawdata);

for(var i in arr){
    var ht = arr[i].HeightCm / 100;
    arr[i]["BMI"] = arr[i].WeightKg / (ht*ht);
    arr[i]["BMI"] = arr[i]["BMI"].toFixed(2);
    getBMIInfo(arr[i]);
}
for(var i in arr){
    console.log(arr[i]);
}
function getBMIInfo(obj) {
    if(obj.BMI > 40)
        obj["category"] = 1;
    else if(obj.BMI > 35)
        obj["category"] = 2;
    else if(obj.BMI > 30)
        obj["category"] = 3;
    else if(obj.BMI > 25)
        obj["category"] = 4;
    else if(obj.BMI > 18.5)
        obj["category"] = 5;
    else
        obj["category"] = 6;
}