from turtle import *


#house

width(12)
begin_fill()
color("light green")
forward(100)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)


forward(135)
left(90)
end_fill()
#end of walls
begin_fill()
color("red")
forward(70)
left(90)

forward(50)
left(90)

forward(70)
left(90)
forward(50)
end_fill()
#end of door
penup()
goto(100, 200)
pendown()
begin_fill()
color("blue")
right(225)
forward(141)
left(90)
forward(141)
left(135)
forward(200)
end_fill()

#end of roof
penup()
goto(-100, 150)
pendown()
color("brown")
forward(60)
right(90)
forward(60)
right(90)
forward(60)
right(90)
forward(60)
penup()
goto(-70, 150)
pendown()
left(180)
forward(60)
penup()
goto(-40, 120)
pendown()
right(90)
forward(60)


exitonclick()
