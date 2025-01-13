#for loops 1

for i in range (11):
    print(i)

#for loops 2

for i in range (10):
    print(i , "its finnaly summer")

#while loops 1

num = 1
while num < 6:
    print(num)
    num = num + 1

#while loops 2

hello = 1
while hello < 4:
    print("hello")
    hello= hello + 1

#conditinal statements easy 1

number = int(input("please enter your number here :"))

if number >= 0 :
    print("youre number is positive")

else :
    print("your number is negative")

#conditinal statements easy 2

number2 = int(input("enter a number here :"))

if number2 == 10 :
    print("your number is equal to 10")

else :
    print("thats not equal to 10 ")

#conditinal statements hard 3

child = "youre a child"

age = int(input("enter your age here :"))

if age >= 0 :
    print(child)

elif age <= 10 :
    print(child)

else :
    print("youre not a child")

#conditinal statements extreme 4

DMT = "Your numbers don't make a triangle"

first_side = int(input("please enter your triangles first side :"))

second_side = int(input("please enter your triangles second side :"))

third_side = int(input("please enter your triangles third side :"))

if first_side + second_side > third_side:
    if second_side + third_side > first_side:
        if third_side + first_side > second_side:
            print("Your numbers make a triangle")
        else:
            print(DMT)
    else:
        print(DMT)
else:
    print(DMT)