// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
var searchInsert = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    
    while(true){
        mid= Math.floor((left+right)/2);
        if(nums[mid]==target) return mid;
        
        if(nums[mid]<target) {
            left=mid+1;
            
        }
        else{
            right=mid-1;
        }
       
        if(left>right) break;
    }
};


console.log(searchInsert([1,3,4,5,6,14,22,50,85,189],1))