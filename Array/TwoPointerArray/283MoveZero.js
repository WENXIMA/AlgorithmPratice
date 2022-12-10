/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums){ //append 0 to the array
    var num = moveZeroe(nums,0);
    while(num<nums.length){
        nums[num]=0;
        num++;
    }
    
    
    return nums;
}

var moveZeroe = function(nums, val) { //Same as Question27 , Remove all 0 as chosen value
    var fast = 0, slower = 0;
    while(fast<nums.length){
        if(nums[fast]!=val){
            
            nums[slower]=nums[fast];
            slower++;
        }
        fast++;
    }
   
    return slower;
};

console.log(moveZeroes([0,1,0,3,12],0));
console.log(moveZeroe([0,1,0,3,12],0));