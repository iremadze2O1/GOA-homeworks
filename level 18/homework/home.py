lst = [1 , 2 , 3 , 4 , 5 , 6]

if lst[0] < lst[1] and lst[0] < lst[2] and lst[0] < lst[3] and lst[0] < lst[4] and lst[0] < lst[5] :
    print(lst[0])

elif lst[0] > lst[1] and lst[1] < lst[2] and lst[1] < lst[3] and lst[1] < lst[4] and lst[1] < lst[5] :
    print(lst[1])

elif lst[2] < lst[1] and lst[0] > lst[2] and lst[2] < lst[3] and lst[2] < lst[4] and lst[2] < lst[5] :
    print(lst[2])

elif lst[3] < lst[1] and lst[3] < lst[2] and lst[0] > lst[3] and lst[3] < lst[4] and lst[3] < lst[5] :
    print(lst[3])

elif lst[4] < lst[1] and lst[4] < lst[2] and lst[4] < lst[3] and lst[0] > lst[4] and lst[4] < lst[5] :
    print(lst[4])

else:
    print(lst[5])

lst2 = [1 , 2 , 3 , 4 , 5 , 6]

if lst2[0] > lst2[1] and lst2[0] > lst2[2] and lst2[0] > lst2[3] and lst2[0] > lst2[4] and lst2[0] > lst2[5] :
    print(lst2[0])

elif lst2[0] < lst2[1] and lst2[1] > lst2[2] and lst2[1] > lst2[3] and lst2[1] > lst2[4] and lst2[1] > lst2[5] :
    print(lst[21])

elif lst2[2] > lst2[1] and lst2[0] < lst2[2] and lst2[2] > lst2[3] and lst2[2] > lst2[4] and lst2[2] > lst2[5] :
    print(lst2[2])

elif lst2[3] > lst2[1] and lst2[3] > lst2[2] and lst2[0] < lst2[3] and lst2[3] > lst2[4] and lst2[3] > lst2[5] :
    print(lst2[3])

elif lst2[4] > lst2[1] and lst2[4] > lst2[2] and lst2[4] > lst2[3] and lst2[0] < lst2[4] and lst2[4] > lst2[5] :
    print(lst2[4])

else:
    print(lst2[5])

lst3 = [1 , 2 , 3 ,4 , 5 , 6]

print(lst3[1 : 3] + [5])

lst4 = [1 , 2 , 4 , 2]

lst5 = ["idk" , "idc" , "lmao" , "idgaf"]

lst6 = []

num = 0

for i in range (4) :
    lst6.append(lst4[num])
    lst6.append(lst5[num])
    num = num + 1
print(lst6)

num1 = 0

lst7 = [1 , "ilia" , 2 , 3 , "nia"]
lst8 = []
lst9 = []
divide = lst[num1] // 2
for i in range (4) :
    if divide == True :
        lst8.append(lst7[num1])
        num1 = num1 + 1
    else :
        lst9.append(lst7[num1])
        num1 = num1 + 1
print(lst8)
print(lst9)
