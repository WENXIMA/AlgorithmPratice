function mergeSortedArrays(arr1,arr2){
    var mergeArray = [];
    var arr1Item = arr1[0];
    var arr2Item = arr2[0];
    var i=1;
    var j=1;
    if(arr1.length===0){
        return arr2;
    }else if(arr2.length===0){
        return arr1;
    };
    while( arr1Item || arr2Item){
        if(!arr2Item || arr1Item<arr2Item){
            mergeArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }else {
            mergeArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    
    return mergeArray;
};

console.log(mergeSortedArrays([1,2,3],[4,5,6]));