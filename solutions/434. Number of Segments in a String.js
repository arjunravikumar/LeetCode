/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0;
    while(s.length>0)
        {
            var index = s.indexOf(" ");
            if(index>0)
                {
                    count++;
                    s = s.slice(index+1,s.length);
                }
            else if(index == 0)
                {
                    s = s.slice(index+1,s.length);
                }
            else{
                break;
            }
        }
    if(s.length>0)
        {
            count++;
        }
    return count;
};
