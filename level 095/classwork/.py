# N1

# def tic_tac_toe(board):
#     n = len(board)

#     for i in range(n):
#         if board[i][0] != "" and board[i][0] == board[i][1] == board[i][2]:
#             return board[i][0]
#         if board[0][i] != "" and board[0][i] == board[1][i] == board[2][i]:
#             return board[0][i]

#     if board[0][0] != "" and board[0][0] == board[1][1] == board[2][2]:
#         return board[0][0]

#     if board[0][2] != "" and board[0][2] == board[1][1] == board[2][0]:
#         return board[0][2]

#     for row in board:
#         for cell in row:
#             if cell == "":
#                 return "Game is ongoing"

#     return "Draw"

# board = [
#     ["X", "O", ""],
#     ["X", "X", "O"],
#     ["", "", ""]
# ]

# print(tic_tac_toe(board))


# N2

# def connect4(board):
#     rows = len(board)
#     cols = len(board[0])

#     for i in range(rows):
#         for j in range(cols - 3):
#             if board[i][j] != "" and board[i][j] == board[i][j + 1] == board[i][j + 2] == board[i][j + 3]:
#                 return board[i][j]

#     for i in range(rows - 3):
#         for j in range(cols):
#             if board[i][j] != "" and board[i][j] == board[i + 1][j] == board[i + 2][j] == board[i + 3][j]:
#                 return board[i][j]

#     return "No winner"

# board = [
#     ["X", "X", "X", "X", "O"],
#     ["O", "O", "X", "O", "X"],
#     ["X", "O", "O", "X", "O"],
#     ["X", "O", "X", "O", "O"],
#     ["O", "X", "O", "X", "X"],
# ]

# print(connect4(board))


# N3

# def same_dig(num1, num2):
#     def count_digits(num):
#         counts = [0] * 10
#         while num > 0:
#             counts[num % 10] += 1
#             num //= 10
#         return counts

#     count1 = count_digits(num1)
#     count2 = count_digits(num2)
#     product = num1 * num2
#     product_count = count_digits(product)

#     for i in range(10):
#         if count1[i] + count2[i] != product_count[i]:
#             return False

#     return True

# print(same_dig(6, 21))
# print(same_dig(10, 10))


# N4

# def unique(s):
#     seen = {}
#     for char in s:
#         if char in seen:
#             return False
#         seen[char] = True
#     return True

# print(unique("abcdef")) 
# print(unique("hello"))  


# N5

# def no_repeat(s):
#     counts = {}

#     for char in s:
#         counts[char] = counts.get(char, 0) + 1

#     for char in s:
#         if counts[char] == 1:
#             return char

#     return None

# print(no_repeat("swiss")) 
# print(no_repeat("hello")) 
# print(no_repeat("aabbcc"))
