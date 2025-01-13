def to_underscore(strng: str) -> str:
    if type(strng) == int:
        return str(strng)
    result = []
    for char in strng:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result).lstrip('_')
