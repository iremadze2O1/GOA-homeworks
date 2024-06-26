sum = 0
num = 0
while num <= 10 :
    print(num)
    sum = sum + num
    num = num + 2
print(sum)

sum1 = 0
num1 = 1
while num1 <= 9 :
    print(num1)
    sum1 = sum1 + num1
    num1 = num1 + 2
print(sum)

sum2 = 0
num2 = 5
while num2 <= 100 :
    print(num2)
    sum2 = sum2 + num2
    num2 = num2 + 5
print(sum2)

sum3 = 0
num3 = 3
while num3 <= 102 :
    print(num3)
    sum3 = sum3 + num3
    num3 = num3 + 3
print(sum3)

sum4 = 0
num4 = 20
while num4 >= 0 :
    print(num4)
    sum4 = sum4 + num4
    num4 = num4 - 1
print(sum4)

password = "idcbeach"
guessed = input("enter password :")
while guessed != password :
    print("password not correct")
    guessed = input("enter password :")
print("password guessed")