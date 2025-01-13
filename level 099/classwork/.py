def func(matrix):
    flat_list = []
    result = []

    for row in matrix:
        for num in row:
            flat_list.append(num)

    for num in flat_list:
        if flat_list.count(num) == 1:
            result.append(num)

    print(result)

func([
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6]
])