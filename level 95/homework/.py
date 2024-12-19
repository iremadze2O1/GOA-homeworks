def longest(arr):
    max_length = 1
    current_length = 1
    start_index = 0
    max_start_index = 0

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            current_length += 1
            if current_length > max_length:
                max_length = current_length
                max_start_index = start_index
        else:
            current_length = 1
            start_index = i

    return arr[max_start_index:max_start_index + max_length]

print(longest([1, 2, 3, 1, 2, 3, 4]))  
print(longest([1, 2, 1, 3, 16, 21, 11]))  
print(longest([5, 6, 7, 8, 1, 2, 3]))  