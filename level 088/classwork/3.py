def solution(number):
    result = []
    for i in range(number):
        if i %3 == 0:
            result.append(i)
        elif i %5 == 0:
            result.append(i)
                        
    return sum(result)