# Chapter 1: Introduction to Python
# What is Python?
print(
    "Python is a high-level, interpreted, interactive and object-oriented scripting language."
)
# Expected Output: Python is a high-level, interpreted, interactive and object-oriented scripting language.

# Installing Python
print("Python can be installed from the official website: www.python.org")
# Expected Output: Python can be installed from the official website: www.python.org

# Python Syntax
print("Python syntax is easy to learn and use.")
# Expected Output: Python syntax is easy to learn and use.

# Conditional Statements
x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")
# Expected Output: x is greater than 5

# Loops
for i in range(5):
    print(i)
x = 0
# define a while loop
while x < 4:
    print(x)
    x = x + 1

# Expected Output: 0
#                  1
#                  2
#                  3
#                  4

# Exception Handling
"""Example:-
   Division by Zero
   Accessing a file which does not exist.
   Addition of two incompatible types
   Trying to access a nonexistent index of a sequence
   Removing the table from the disconnected database server.
   ATM withdrawal of more than the available amount
   """
try:
    print(5 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")
# Expected Output: Cannot divide by zero!


# Chapter 2: Functions and Modules
# Functions
def greet(name):
    return f"Hello, {name}!"


print(greet("Alice"))
# Expected Output: Hello, Alice!

# Modules
import math

print(math.sqrt(16))
# Expected Output: 4.0


# Object-Oriented Programming
class Person:
    def __init__(self, name):
        self.name = name


p = Person("Bob")
print(p.name)
# Expected Output: Bob

# File Handling
with open("file.txt", "w") as f:
    f.write("Hello, World!")
# Expected Output: This will write "Hello, World!" to a file named "file.txt". No output will be printed.

# Regular Expressions
import re

print(re.match(r"\d+", "1234abc"))
# Expected Output: <re.Match object; span=(0, 4), match='1234'>

# I hope these examples help you understand the concepts better. If you need more examples or have questions about specific topics, feel free to ask!


# Chapter 4: Advanced Python Concepts
# Regular Expressions
import re

print(re.match(r"\d+", "1234abc"))
# Expected Output: <re.Match object; span=(0, 4), match='1234'>

# Multithreading and Multiprocessing
import threading


def print_numbers():
    for i in range(10):
        print(i)


thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()
# Expected Output: 0
#                  1
#                  2
#                  3
#                  4
#                  5
#                  6
#                  7
#                  8
#                  9

# Chapter 5: Web Development with Python
# Introduction to Web Development
print("Web development involves building and maintaining websites.")
# Expected Output: Web development involves building and maintaining websites.


# Flask Framework
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, World!"


# Expected Output: This will start a Flask web server. If you navigate to the server's URL, you will see "Hello, World!".

# Django Framework
print("Django is a high-level Python web framework.")
# Expected Output: Django is a high-level Python web framework.

# Web Scraping
import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.python.org")
soup = BeautifulSoup(response.text, "html.parser")
print(soup.title)
# Expected Output: <title>Welcome to Python.org</title>

# Chapter 6: Artificial Intelligence and Machine Learning with Python
# Introduction to Artificial Intelligence and Machine Learning
print("AI and ML involve creating systems that can learn and improve from experience.")
# Expected Output: AI and ML involve creating systems that can learn and improve from experience.

# NumPy and Pandas
import numpy as np
import pandas as pd

array = np.array([1, 2, 3, 4, 5])
print(array)
# Expected Output: array([1, 2, 3, 4, 5])

df = pd.DataFrame({"A": [1, 2, 3], "B": [4, 5, 6]})
print(df)
# Expected Output:
#    A  B
# 0  1  4
# 1  2  5
# 2  3  6

# Scikit-Learn
"""Scikit-Learn is your one-stop shop for building intelligent systems in Python. Imagine a vast toolbox filled with pre-built algorithms for tasks like classification, regression, and clustering. This library simplifies machine learning, letting you choose, customize, and train models with ease. It handles data preparation, evaluation, and even visualizes results, making you a data-driven magician!"""

from sklearn.ensemble import RandomForestClassifier

print(RandomForestClassifier())
# Expected Output: RandomForestClassifier()

# TensorFlow and Keras
import tensorflow as tf
from tensorflow import keras

model = keras.Sequential(
    [
        keras.layers.Dense(10, input_shape=(10,), activation="relu"),
        keras.layers.Dense(1, activation="sigmoid"),
    ]
)
print(model)
# Expected Output: <tensorflow.python.keras.engine.sequential.Sequential object at 0x7f8c0c0cdd90>

"""Tuples are used to store multiple items in a single variable. A tuple is a collection which is ordered and unchangeable. Tuples are written with round brackets. Tuple items are ordered, unchangeable, and allow duplicate values."""
thistuple = ("apple",)
print(type(thistuple))

# NOT a tuple
thistuple = "apple"
print(type(thistuple))

"""
Sets are used to store multiple items in a single variable. Set is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Tuple, and Dictionary, all with different qualities and usage.A set is a collection which is unordered, unchangeable*, and unindexed.
 The values True and 1 are considered the same value in sets, and are treated as duplicates:

Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered*, changeable and do not allow duplicates. As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered. Dictionaries are written with curly brackets, and have keys and values:
"""
