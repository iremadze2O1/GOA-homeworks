number = int(input())

if number % 100 == 0:
    divided = number // 100
    print(pow(number, divided))