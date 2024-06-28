#for

for i in range (21) :
    print(i)

for i in range (10) :
    print(i)

for i in range (0 , 100 + 1 , 2) :
    print(i)

for i in range (1 , 100 , 2) :
    print(i)

sum1 = 0
num1 = int(input("please enter a number :"))
for i in range (num1) :
    sum1 = sum1 + i
    print(i)
print(sum1)

for i in range (5 , 55 , 5 ) :
    print(i)

#while

num = 0
while num <= 20 :
    print(num)
    num = num + 2

sum2 = 0
num2 = 0
while num2 <= 10 :
    print(num2)
    sum2 = sum2 + num2
    num2 = num2 + 2
print(sum2)

guess = int(input("please enter a number : "))
num3 = 7
while guess != num3 :
    print("wrong guess again")
    guess = int(input("please enter a number : "))
print("correct")

password = "password123"
guessed = input("enter password :")
while guessed != password :
    print("password not correct")
    guessed = input("enter password :")
print("password guessed")

#if-else

time = int(input("please enter that time it is in hours :"))

if time < 12 :
    print("Good morning!")
else :
    print("Good afternoon!")

num4 = int(input("please enter a number"))
num4 // 2
if type(num4) != int :
    print("your number is an even number")
else:
    print("your number is an odd number")

temp = int(input("please enter degrees that are outside in celsius :"))

if temp > 30 :
    print("its hot outside")
else :
    print("its not too hot outside")

grade = int(input("please enter your score :"))

if grade < 50 :
    print("you FAILED!")
else :
    print("you passed")

age = int(input("please enter your age:"))

if age >= 13 and age <= 19 :
    print("you are a teenager")
else :
    print("you are not a teenager")
#for N2
sum3 = 0
for i in range(11) :
    print(i)
    sum3 = sum3 + i
print(sum3)

for i in range (16) :
    print(i ** 2)

sum4 = 0
for i in range (6):
    print(i ** 2)
    sum4 = sum4 + i
print(sum4)

for i in range (1 - 1, 100 , 3 * 5) :
    print(i)

for i in range (10 , 0  , -1) :
    print(i)

#while
num6 = 10
while num6 > 0:
    print(num6)
    num6 -= 1

sum = 0
i = 0
while i <= 99:
    sum += i
    i += 1
    print(i)
print(sum)

num7 = 1
while num7 <= 10:
    print(num7 ** 2)
    num7 += 1

#if-else

date = int(input("please anter a year : "))
date / 4
if type(date) != int :
    print("your year is a leap year")
else :
    print("your year isn't a leap year")

num5 = int(input("please enter a number : "))
if num5 > 0 :
    print("your number is a positive number")
elif num5 < 0 :
    print("your number is a negative number")
else :
    print("your number is zero")

weight = int(input("please enter your weight : "))
height = int(input("please neter your height : "))
bmi = weight / height ** 2
if bmi < 18 :
    print("youre under weight")
elif bmi > 19 and bmi < 25 :
    print("youre normal weight")
elif bmi > 26 and bmi < 39 :
    print("youre over weight")
else :
    print("youre obese")