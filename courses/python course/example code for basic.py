# Chapter 1: Introduction to Python

# What is Python?
print(
    "Python is a high-level, interpreted, interactive and object-oriented scripting language."
)

# Installing Python
print("Python can be installed from the official website: www.python.org")

# Python Syntax
print("Python syntax is easy to learn and use.")

# Conditional Statements
x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")

# Loops
for i in range(5):
    print(i)

# Exception Handling
try:
    print(5 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")


# Chapter 2: Functions and Modules
# Functions
def greet(name):
    return f"Hello, {name}!"


print(greet("Alice"))

# Modules
import math

print(math.sqrt(16))


# Object-Oriented Programming
class Person:
    def __init__(self, name):
        self.name = name


p = Person("Bob")
print(p.name)

# File Handling
with open("file.txt", "w") as f:
    f.write("Hello, World!")

# Regular Expressions
import re

print(re.match(r"\d+", "1234abc"))

"""I hope these examples help you understand the concepts better. If you need more examples or have questions about specific topics, feel free to ask!"""
