/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = x, reversedNumber = 0;
    while(num != 0)
        {
            reversedNumber = reversedNumber*10 + num%10;
            if(Math.abs(num)<10)
                {
                    num = 0;
                }
            num = Math.trunc(num/10);
        }
        if(reversedNumber>=(Math.pow(2,31)-1) || 
           reversedNumber<=(-1*Math.pow(2,31)))
        {
            reversedNumber=0;
        }
    return reversedNumber;
};
