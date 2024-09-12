def longest(lst):
  word = [] 
  for i in lst: 
    word.append((len(i), i)) 
    word.sort() 
  return word[-1][1] 

print(longest(["long","python","hello"]))

def even_odd(lst1):
    result = []
    for lst1 in range:
        if lst1 %2 == 0:
            lst1 * lst1
            result.append[lst1]
        else:
            lst1 * 2
            result.append[lst1]
    return result

even_odd([5 , 2 , 3])

print(6 %2)