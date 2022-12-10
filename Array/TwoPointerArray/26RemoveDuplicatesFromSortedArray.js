/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length ===0){
        return null;
    }
    var low =0, fast = 0; // two pointer
    while(fast<nums.length){
        if(nums[fast]!== nums[low]){ //if there is an unique element,
            low++;                  //slower pointer move up,
            nums[low]=nums[fast];   //make slower pointer = that unique element
        }
        fast++;
    }
    return low+1; // return length of slower pointer +1
};

console.log(removeDuplicates([1,1,2]));