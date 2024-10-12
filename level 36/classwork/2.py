def stray(arr):
    for num in arr:
        if arr.count(num) == 1:
            return num