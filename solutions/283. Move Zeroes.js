/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    for(var i = nums.length -1 ;i>= 0;i--)
        {
            if(nums[i]==0)
                {
                    nums.splice(i,1);
                    count++;
                }
        }
    for(var i = 0;i<count;i++)
        {
            nums[nums.length] = 0;
        }
};
