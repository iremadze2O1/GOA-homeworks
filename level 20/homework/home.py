def N1(num1 , num2 , num3) :
    sum = 0
    idk = num1 // 2
    if type(idk) == int :
        sum = sum + num1
    else :
        print("nothing")

    isk = num2 // 2
    if type(isk) == int :
         sum = sum + num2
    else :
       print("nothing") 

    nothing = num3 // 2
    if type(nothing) == int :
        sum = sum + num3
    else :
        print("nothing")

N1(1 , 10 , 13)


def reverse(word) :
    drow = word[::-1]
    print(drow)

reverse("hello")

def factorialed(num) :
    f = num
    fact = 1

    for i in range(1, f+1):
        fact = fact * i
    print(fact)

factorialed(5)


def copy(lst1 , lst2) :

    a = lst1
    b = lst2
    c = []
    for i in a:
        if i in b and i not in c:
            c.append([i])
    print(c)

copy([1 , 3 , 5 , 7] , [1, 3 , 6 , 9])

def vowel(word1) :
    word2 = word1
    vowels = "aeiouAEIOU"

    count = sum(word2.count(vowel) for vowel in vowels)
    print(count)


vowel("hello")

def sort(lst) :

    l1 = lst

    for i in range(0, len(l1)):
        for j in range(i+1, len(l1)):
            if l1[i] >= l1[j]:
                l1[i], l1[j] = l1[j],l1[i]
    print(l1)

sort([3 , 7 , 4 , 0 , 1 , 1])

def prime_check(user_num):
    is_prime = True

    for i in range(2, user_num):
        if user_num%i == 0:
            is_prime = False

    return is_prime