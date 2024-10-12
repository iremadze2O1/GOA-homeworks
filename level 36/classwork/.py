def find_short(s):
    words = s.split(" ")
    lengthes = []
    
    for word in words:
        lengthes.append(len(word))
    
    return min(lengthes)