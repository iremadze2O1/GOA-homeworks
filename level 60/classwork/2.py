def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    
    for char in alphabet:
        if char not in st:
            return False
    
    return True