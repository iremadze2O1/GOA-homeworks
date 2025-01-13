def alphabet_position(text):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    return " ".join([str(alpha.find(c) + 1) for c in text.lower() if c in alpha])