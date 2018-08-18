var fs = require('fs');
var arr1 = require('./analogOutput.json');
var arr2 = require('./analogOutput2.json');

var p1 = 0;
var p2 = 0;
var resultantArray = [];
console.log('=====Length of the arr1 = '+arr1.length+"======");
console.log('=====Length of the arr2 = '+arr2.length+"======");

sort = function (pivot1, pivot2) {
console.log(pivot1,pivot2);
    if (pivot1 < arr1.length && pivot2 < arr2.length) {
        if (arr1[pivot1].time > arr2[pivot2].time) {
            resultantArray.push(arr2[pivot2]);
            pivot2++;
            console.log('incrementing arr2 pivot to '+pivot2);
            sort(pivot1, pivot2);
        } else {
            resultantArray.push(arr1[pivot1]);
            pivot1++;
            console.log('incrementing arr1 pivot to '+pivot1);
            sort(pivot1, pivot2);
        }
    } else {
        if (pivot1 >= arr1.length) {
            //Ask Bademiya about immutable form of concatenetate
            for (var i = pivot2; i < arr2.length; i++) {
                resultantArray.push(arr2[i]);
            }
        }
        if (pivot2 >= arr2.length) {
            //Ask Bademiya about immutable form of concatenetate
            for (var i = pivot1; i < arr1.length; i++) {
                resultantArray.push(arr1[i]);
            }
        }
        console.log(process.cwd());

        fs.writeFile(process.cwd()+'/latestanalogOutput.json',JSON.stringify(resultantArray),function (err){
            if(err) throw err;
            console.log("saved!");
        });
    }
};

sort(p1,p2);