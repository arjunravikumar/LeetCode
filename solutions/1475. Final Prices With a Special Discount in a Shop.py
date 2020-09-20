class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        stack = []
        newPrices = prices[:]
        for i in range(len(prices)-1,-1,-1):
            while(len(stack)>0 and prices[i]<stack[0]):
                stack.pop(0)
            if(len(stack) > 0):
                newPrices[i] = prices[i] - stack[0]
            stack.insert(0,prices[i])
        return newPrices
