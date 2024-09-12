def move(position, roll):
    return position + 2*roll

def print_array(arr):
    result = ""
    for i in arr:
        result = result + str(i) + ","
    return result.rstrip(",")

def reverse(st):
    st = st.split()
    reversed_st = st[::-1]
    result = ""
    for word in reversed_st:
        result += " " + word
    return result.strip()

def validate_code(code):
    code = str(code)
    valid = "123"
    index = 0
    for num in code:
        if index == 0 and num in valid:
            return True
            index = index + 1
        else:
            return False

def distinct(seq):
    hello = []
    for element in seq:
        if element not in hello:
            hello.append(element)
    return hello