/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s.trim() == '')
        {
            return false;
        }
    if(s.trim().indexOf(' ')>=0)
        {
            return false;
        }
    var eSplitString = s.split('e');
    if(eSplitString.length>2)
        {
            return false;
        }
    else if(s.indexOf('e') >=0)
        {
            if(eSplitString[0].trim() == '' || eSplitString[1].trim() == '')
                return false;
        }
    if(checkNumber(eSplitString[0],false) && checkNumber(eSplitString[1],true))
        {
           return true;
        }
    else
        {
            return false;
        }
    function checkNumber(subString,exponentValue)
    {
        if(subString == null || subString == undefined)
        {
                return true
        }
        subString = subString.trim();
        var numArr = subString.split('');
        
        var decimalCountAllowed = (exponentValue ? 0 : 1);
        var decimalCountEncountered = 0;
        var signEncountered = false;
        for(var i =0;i<numArr.length;i++)
            {
                if(numArr[i] == ' ')
                    {
                        return false;
