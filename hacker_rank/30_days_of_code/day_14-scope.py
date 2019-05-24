class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = None

    def computeDifference(self):
        assert len(self.__elements) > 1
        temp_array=self.__elements.sort()
        return abs(self.__elements[-1]-self.__elements[0])

	# Add your code here

# End of Difference class

a=[1]
b=[1,2,3,4]
d= Difference(b);
print (d.computeDifference())
