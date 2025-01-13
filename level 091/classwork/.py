def get_matrix(n):
    matrix = []
    for i in range(n):
        row = []
        for l in range(n):
            if i == l:
                row.append(1)
            else:
                row.append(0)
        matrix.append(row)
    return matrix