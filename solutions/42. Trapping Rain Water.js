/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // initialize output 
    var result = 0; 
      
    // maximum element on left and right 
    var left_max = 0, right_max = 0; 
      
    // indices to traverse the array 
    var lo = 0;
    var hi = height.length-1; 
      
    while(lo <= hi)  
    { 
        if(height[lo] < height[hi]) 
        { 
            if(height[lo] > left_max) 
            // update max in left 
            left_max = height[lo]; 
            else
            // water on curr element = max - curr 
            result += left_max - height[lo]; 
            lo++; 
        } 
        else
        { 
            if(height[hi] > right_max) 
            // update right maximum 
            right_max = height[hi]; 
            else
            result += right_max - height[hi]; 
            hi--; 
        } 
    } 
      
    return result; 
};
