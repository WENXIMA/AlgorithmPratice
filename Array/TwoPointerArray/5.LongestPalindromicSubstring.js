/**
 * @param {string} s vn
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str = s.split('');
    var maxlen = 0;
    var centralpoint = 0;
    var centralpoint2 = 0;
    var len = str.length;
    if(str.length ===0){
        return null;
    }
    if(str.length%2===0){
        centralpoint = str[len/2 -1];
        centralpoint2 = str[len/2];
    }else{
        centralpoint = str[len/2];
    }

    
};

var longer = function(s,l,r){

}

var s = 'abcdsasb';
console.log(longestPalindrome(s));