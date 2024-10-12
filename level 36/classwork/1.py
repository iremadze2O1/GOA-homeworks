def remove_smallest(numbers):
    if len(numbers) == 0:
        return []
    
    copy_numbers = numbers.copy()
    min_number = min(numbers)
    copy_numbers.remove(min_number)
    
    return copy_numbers