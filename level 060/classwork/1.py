def get_sum(a,b):
    min_num = min(a,b)
    max_num = max(a,b)
    
    sum = 0
    
    for num in range(min_num , max_num + 1):
        sum = sum + num
        
    return sum

