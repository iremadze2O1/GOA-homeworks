def number(lines):
    num = 1
    line = []
    
    for i in lines:
        line.append(str(num) + ': ' + i)
        num += 1
        
    return line