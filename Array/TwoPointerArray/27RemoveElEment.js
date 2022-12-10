/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
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
console.log(removeElement([3,2,2,3],3));