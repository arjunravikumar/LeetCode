import math
class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        newVal = sorted(points,key = lambda point: math.sqrt(math.pow((point[0]-0),2) + math.pow((point[1]-0),2)))
        return newVal[:K]
