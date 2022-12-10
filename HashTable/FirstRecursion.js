//array= [2,5,1,2,3,5,1,2,4]
//return 2

//array = [2,1,1,2,3,5,1,2,4]
//return 1

//array = [2,3,4,5]
//return undefined

function findFirst(arrays){
    var firstValue;
    for(let i=0;i<arrays.length;i++){
        if(arrays.indexOf(arrays[i])!==i){
            firstValue=arrays[i];
            break;
        }
        
    }
    return firstValue;
};
function findFirst2(arrays){
    let map={};
    for(let i=0;i<arrays.length;i++){
        if(map[arrays[i]] !==undefined){
            return arrays[i];
        }else{
            map[arrays[i]]=i;
        }
        

    }
    return undefined;

}

console.log(findFirst([2,1,1,2,3,5,1,2,4]));

