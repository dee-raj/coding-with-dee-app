# Chapter Title: Getting Started with Python
# Chapter Contents:


# Heading: What is Python?
# Example code for printing "Hello, World!" in Python
print("Hello, World!")

"""
Heading: Installing Python

# Example code for installing Python on Windows
1. Download the latest version of Python from the official website.
2. Run the installer and follow the instructions.
3. Add Python to your system PATH environment variable.
4. Verify the installation by running "python --version" in the command prompt.
"""

# Heading: Python Syntax
# Example code for variables and data types in Python
x = 5
y = "Hello, World!"
z = 3.14
print(x)
print(y)
print(z)


# Heading: Conditional Statements
# Example code for if-else statements in Python
x = 5
if x > 10:
    print("x is greater than 10")
else:
    print("x is less than or equal to 10")


# Heading: Loops
# Example code for for loops in Python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)


# Heading: Exception Handling
# Example code for handling exceptions in Python
try:
    x = 5 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")


# Chapter Title: Writing Reusable Code with Functions and Modules
# Chapter Contents:


# Heading: Functions
# Example code for defining and calling functions in Python
def greet(name):
    print("Hello, " + name + "!")


greet("John")


# Heading: Modules
# Example code for creating and using modules in Python
# mymodule.py
def greet(name):
    print("Hello, " + name + "!")


# main.py
import mymodule

mymodule.greet("John")


# Heading: Object-Oriented Programming
# Example code for classes and objects in Python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(
            "Hello, my name is "
            + self.name
            + " and I am "
            + str(self.age)
            + " years old."
        )


person = Person("John", 30)
person.greet()


# Heading: File Handling
# Example code for reading and writing files in Python
# Writing to a file
file = open("example.txt", "w")
file.write("Hello, World!")
file.close()
# Reading from a file
file = open("example.txt", "r")
print(file.read())
file.close()


# Heading: Regular Expressions
# Example code for using regular expressions in Python
import re

text = "The quick brown fox jumps over the lazy dog."
pattern = "fox"
result = re.search(pattern, text)
if result:
    print("Match found!")
else:
    print("Match not found.")
