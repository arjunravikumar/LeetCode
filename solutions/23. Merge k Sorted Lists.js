/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var isFinished = false;
    var finalList = null;
    checkForEmpty();
    while(lists.length > 0)
        {
            var lowest = Number(lists[0]["val"]);
            var listNo = 0;
            for(var i= 1;i<lists.length;i++)
            {
                if(Number(lists[i]["val"]) < lowest)
                {
                    lowest = Number(lists[i]["val"]);
                    listNo = i;
                }
            }
            insertNewItem(lowest);
            if(lists[listNo]["next"] != null)
            {
                removeElement(listNo);
            }
            else
            {
                lists.splice(listNo,1);
            }
        }
    return finalList;
    
    function checkForEmpty()
    {
        for(var i= lists.length ;i>=0; i--)
            {
                if(lists[i] == null)
                    {
                        lists.splice(i,1);
                    }
            }
