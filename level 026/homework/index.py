# dot notation - თუ მაგალითად არ დავამატებთ წერტილს ფუნქციის წინ მაშინ ის არ იმუშავებს

# capitalize - იგი ადიდებს სიტყვის პირველ ასოს
name = input("enter your city name :").capitalize() 
print(name)

# upper - იგი ადიდებს ყველა ასოს
name1 = input("enter your name :").upper()
print(name1)

# lower - იგი აპატარავებს ყველა ასოს
word = input("enter a word in uppercase :").lower()
print(word)

# appends - იგი ამატებს ჩვენ ნათქვამ ელემენტს

vegitables = ["cabbage" , "carrot"]
vegitables.append("pepper")
print(vegitables)

fruits = ["apple" , "pear"]
fruits.append("banana")
print(fruits)

country = ["Germany" , "France"]
country.append("Georgia")
print(country)


# pop - იგი აგდებს ელემტს სიიდან

city = ["London" , "Paris" , "Kiev"]
city.pop(1)
print(city)

color = ["blue" , "black" , "red"]
color.pop(0)
print(color)

shape = ["triangle" , "square" , "circle"]
shape.pop(2)
print(shape)

# insert - იგი ამატებს ელემენტს სადაც ჩვენ ვისურვერბთ

sports = ["basketball" , "football"]
sports.insert(1 , "rugby")
print(sports)

art = ["painting" , "dancing"]
art.insert(0 , "music")
print(art)

PC = ["keyboard" , "mouse"]
PC.insert(2 , "camera")
print(PC)