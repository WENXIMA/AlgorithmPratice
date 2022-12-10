var lengthOfLongestSubstring = function(s) {
    let map ={};
    let array = s.split('');
    for(let i=0;i<array.length;i++){
        if(map[array[i]]===true){
            console.log(map);
        }else{
            map[array[i]]=i;
        }
    }
    return map;
};

console.log(lengthOfLongestSubstring("pwwkew"));