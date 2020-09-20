/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    var splitArr = str.split('');
    var num = 0;
    var negative = false;
    if(splitArr[0] == '-')
    {
        negative = true;
        splitArr.splice(0,1);
    }
    else if(splitArr[0] == '+')
    {
        splitArr.splice(0,1);
    }
    for(var i = 0;i<splitArr.length;i++)
        {
            if(splitArr[i] == ' ')
            {
                return formatNumber();
            }
            if(Number(splitArr[i])>=0 && Number(splitArr[i])<=9)
                {
                    num = num*10 + Number(splitArr[i]);
                }
            else
                {
                    return formatNumber();
                }
        }
    return formatNumber();
    
    function formatNumber()
    {
        if(negative)
        {    
            if(num>Math.pow(2,31))
            {
                num = Math.pow(2,31);
            }
            return num*-1;
        }
        else
        {
            if(num>(Math.pow(2,31)-1))
            {
                num = Math.pow(2,31)-1;
            }
            return num;
        }
    }
};
