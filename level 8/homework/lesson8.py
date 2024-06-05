#first task

num = 5

#if you did both things its true if you did only one or none then its false

print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False 

#if you did at least one (or both) its true if you did none its false

print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False

print("----------- AND -----------")

#if both are correct than its true if only one or none is correct than its false

print(num >= 1 and num <= 10) # True
print(num >= 1 and num <= 4) # False
print(num > 5 and num <= 10) # False
print(num > 5 and num > 10) # False

print("----------- OR -----------")

#if at least one is correct (or both) its true if none is correct its false

print(num >= 1 or num <= 10) # True
print(num >= 1 or num <= 4) # True
print(num > 5 or num <= 10) # True
print(num > 5 or num > 10) # False

#second task

#"and" is true when all of the above is correct and if not its false

#"or" is true when at least one (or both) is correct if none than its false

#third task

num_2 = input()

print(num_2 > 5 and num_2 >  10)
print(num_2 < 5 and num_2 <  10)
print(num_2 >= 5 and num_2 >=  10)
print(num_2 <= 5 and num_2 <=  10)
print(num_2 == 5 and num_2 ==  10)

print(num_2 > 5 or num_2 >  10)
print(num_2 < 5 or num_2 <  10)
print(num_2 >= 5 or num_2 >=  10)
print(num_2 <= 5 or num_2 <=  10)
print(num_2 == 5 or num_2 ==  10)

#fourth task

print(12 > 5)
print(32 < 63)
print(7 >= 7)
print(541 <= 941)
print(9684 ==9684)