# pop

lst = [1 , 9 , 4 , 8 , 2 ]
lst.pop(4)
print(lst)

slangs = ["idk" , "idc" , "lmao" , "idgaf" , "lol"]
slangs.pop(0)
slangs.append("idk")
print(slangs)

nums = [9 , 43 , 98 , 342 , 98]
nums.pop(2)
print(nums)

cars = ["honds" , "BMW" , "ford" , "suzuki"]
cars.pop(3)
cars.append("suzuki")
print(cars)

# count

nums1 = [5 , 8 , 9 , 5 , 5 , 7]
x = nums1.count(5)
print(x)

letters = ["a" , "e" , "v" , "z" , "a"]
z = letters.count("a")
print(z)

boolean = [True , False , True , True , False]
b = boolean.count(True)
print(b)

nums2 = [[3 , 4] , [3, 8 , 9 ,] , [3 , 4] , [8 , 7, 5]] 
c = nums2.count([3, 4])
print(c)

# len

nums3 = [9 , 43 , 98 , 342 , 98 , 65 , 0 , 23 , 87 , 45]
q = len(nums3)
print(q)

weekdays = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"]
d = len(weekdays)
print(d)

nums4 = [[3 , 4 , 4] , [3, 8 , 9 , 7 ] , [3 , 9 , 4] , [8 , 7, 5 , 4]] 
r = len(nums4)
print(r)