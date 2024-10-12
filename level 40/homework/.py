def greet(name):  
    name = name.lower()
    name = name.capitalize()
    example = "Hello {name_of_someone}!".format(name_of_someone = name)
    return example