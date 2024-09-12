# N1

lst = [1 , 4 , 2 , 6 , 1 , 6 , 8]

print(lst[: 4])

lst2 = [2 , 9 , 5 , 8 , 3 , 6 , 8]

print(lst2[4 :])

lst3 = [6 , 9 , 4 , 9 , 2 , 9]

print(lst3[0 : : 2])

lst4 = [3 , 7 , 4 , 9 , 6 , 0 , 7]

print(lst4[: 4])

lst5 = [3 , 7 , 4 , 9 , 6 , 0 , 7]

print(lst5[4 :])

lst6 = [4 , 8 , 5 , 9 , 2 , 7 , 5 , 9]

print(lst6[1 : 6 : 2])

lst7 = [1 , 8 , 2 , 6 , 7 , 6 , 8]

print(lst7[2:5])

lst8 = [3 , 8 , 4 , 9 , 3 , 0 , 7]

print(lst8[2 : 4 : 6])

# N2

word = "headphones"

print(word[: 7])

word2 = "earphones"

print(word2[: : -1])

word3 = "keyboard"

print(word3[: : -2])

lst9 = [2 , 8 , 5 , 0 , 7 , 4 , 8]

lst9[2::2] = [1 , 3 , 6]

print(lst9)


# N3

idk = [1 , 2 , 4]

idk.clear()

print(idk)

#"clear" as its name sujests clears list when used

idk_copy = idk[:]

idk_copy2 = idk.copy()

# N4

names1 = ["ilia"]

names2 = ["nia"]

names1.extend(names2)

names1.insert(1 , "nika")

print(names1)