/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var smallest = -1;
    for(var i = nums.length-1;i>=0;i--)
        {
            if((smallest>nums[i] || smallest == -1) && nums[i] > 0)
                {
                    smallest = nums[i];
                }
            if(nums[i] <= 0)
                {
                    nums.splice(i,1);
                }
        }
    if(smallest != 1 || nums.length == 0)
        {
            console.log(smallest);
            return 1;
        }
    for(var i = 0;i<nums.length;i++)
        {
            if(nums[Math.abs(nums[i])-1] > 0)
            {
                nums[Math.abs(nums[i])-1] = - nums[Math.abs(nums[i])-1];
            }
        }
    for(var i = 0;i<nums.length;i++)
        {
            if(nums[i]>0)
                {
                    return i+1;
                }
        }
    return nums.length+1;
};
