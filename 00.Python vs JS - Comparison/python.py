#1. Conditionals, functions, loops:
i = 2
x=4 

if x < 5:
    print(x)

def foo(x):
    print(x)

foo(x)

for i in range(5):
    print(i)

#2. Defining a variable

x = 5

#3. Naming conventions: snake_case

first_name = 'Bogomila'

#4. Constants: we rely on naming conventions to define contants because
# there are no strict rules in the language to prevent changes to their value.

TAX_RATE_PERCENTAGE = 32 

#5. Data types and values: int, float and complex

#6. None vs null:
# - None: a variable does not have a value at a particular point in the program 
# - In python, you have to assign an initial value to the variable. We can't declare it without an initial value.
# We can assign None as the initial value of a variable in Python to represent the absence of a value.

# 7. Primitive data types: int, float, bool, str

# 8. Built-in Data Structures: 
# - Tuple(like list but immutable - used to store data that should not be modified)
# - Lists(used to store a sequence of values in the same data structure. Can be modified, indexed, sliced)
# - Dict(map certain values to other values and create KVP. This works as a hash table.)

# 9. Floor division: the integer division operator is represented with a double slash (//)

# 10. Comparing values:
print(1==1)

# 11. Logical operators: and or not
# 12. Type operators:
print(type('bogomila'))

# 13. Input and Output: we use the input() function to ask for user input. We write the message within paranthesis
user_input = input("Enter a number:")

# 14.Loops:
n = 5

for i in range(n):
    print(i)

for el in "books":
    print("books"[el])

while condition:
    pass

# 15. Classes:

class Circle:
    def __init__(self, radius, color):
        self.radius = radius
        self.color = color

    def calc_diameter(self):
        return self.radius * 2

my_circle = Circle(3, "Red")