
function findNum(arr, num){
    var obj={};
    for(let i=0;i<arr.length;i++){
        let n = num - arr[i];
        if(n in obj){
            return [i, obj[n]];
        }
        obj[arr[i]] = i;
        
    }
    
};



var arrays = [1,2,3,4];
var n=5;
console.log(findNum(arrays,5));

