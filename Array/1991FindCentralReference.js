var findMiddleIndex = function(nums){
    var left=0,right=0,sum=0;

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    for(let i=0;i<nums.length;i++){
        if(i===0){
            left=0;
            right= sum-nums[i];
        }else{
            left+=nums[i-1];
            right=sum-nums[i]-left;
        }
        if(left===right){
            return i;
        }
        if(i===nums.length-1 && left!==right){
            return -1;
        }
        
        
    }
};

console.log(findMiddleIndex([1,7,3,6,5,6]));