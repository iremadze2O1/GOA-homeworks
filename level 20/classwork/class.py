# N1

def greet_ilia() :
    print("Hello ilia")

greet_ilia()

lst = []

def add():
    print(1 + 2)

add()

# N1
#ეს არის def ფუნქცია რომელიც გვეხმარება რომ რაღაცა შევინახოთ და შემდეგ გამოვიტანოთ
def add1(num , num1 , operation) :
    #ჩვენ აქ ვადასტურებთ თო რომელი ოპერაცია გამოვიყენოთ მაგალითად პლიუსი მინუსი და ა.შ.
    if operation == "+" :
        result = num + num1
    elif operation == "-" :
        result = num - num1
    elif operation == "*" :
        result = num * num1
    elif operation == "/" :
        result = num / num1
    elif operation == "=" :
        result = num == num1
    elif operation == ">" :
        result = num > num1
    elif operation == "<" :
        result = num < num1
    elif operation == "!=" :
        result = num != num1
    #აქ თუ შემოტანილი ოპერაცია არ ემთხვევა პლიუსის მინუსის და ა.შ.
    else :
        result = "invalid inputs"

#და ბოლოს აქ არის თვითონ ფუნქცია
print(add1(2 , 2 , "!="))
lst1 = []
lst2 = []
def seperation(num2 , num3 , num4 , num5) :
    
    idk = num2 / 2
    if type(idk) == int :
        lst1.append(num2)
    else :
        lst2.append(num2)
    
    idk1 = num3 / 2
    if type(idk1) == int :
            lst1.append(num3)
    else :
        lst2.append(num3)

    idk2 = num4 / 2
    if type(idk2) == int :
            lst1.append(num4)
    else :
        lst2.append(num4)

    idk3 = num5 / 2
    if type(idk3) == int :
            lst1.append(num5)
    else :
        lst2.append(num5)