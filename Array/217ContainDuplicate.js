/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//     const duplicate = nums.filter((item,index) => nums.indexOf(item) !== index);
//     if(duplicate.length!==0){
//         return true;
//     }else{
//         return false;
//     }
// };
var containsDuplicate = function(nums){
    const s = new Set(nums);   // A value may ONLY occur once in Set objects
    return s.size!== nums.length;
}

//Complexity: O(n)



console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));