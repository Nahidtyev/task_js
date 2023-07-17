
function objecting(arr){
    let nums = {};
    for(let i=0;i<arr.length;i++){
        let singlevalue= arr[i];
        nums[singlevalue] = nums[singlevalue]==undefined ? 1 : nums[singlevalue] + 1; 
    }
    return nums;
}
var strings =  prompt("enter the elements").split(',');
var results = objecting(strings);
console.log(results);