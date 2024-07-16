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