# Chapter 3: Data Structures
# Lists
my_list = [1, 2, 3, 4, 5]
print(my_list)

# Tuples
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple)

# Dictionaries
my_dict = {"name": "Alice", "age": 25}
print(my_dict)

# Sets
my_set = {1, 2, 3, 4, 5}
print(my_set)

# Chapter 4: Advanced Python Concepts
# Decorators
"""Decorators are a very powerful and useful tool in Python since it allows programmers to modify the behaviour of a function or class. Decorators allow us to wrap another function in order to extend the behaviour of the wrapped function, without permanently modifying it. But before diving deep into decorators let us understand some concepts that will come in handy in learning the decorators."""


def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")

    return wrapper


@my_decorator
def say_hello():
    print("Hello!")


say_hello()


# Generators
def my_generator():
    for i in range(5):
        yield i


for number in my_generator():
    print(number)

# Regular Expressions
import re

print(re.match(r"\d+", "1234abc"))

# Multithreading and Multiprocessing
import threading


def print_numbers():
    for i in range(10):
        print(i)


thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()

from threading import Thread
import time

database_value = 0


def increase():
    global database_value
    local_copy = database_value
    local_copy += 1
    time.sleep(2)  # takes some time to processing
    database_value = local_copy


if __name__ == "__main__":
    print(f"Start value: {database_value}")
    thread_one = Thread(target=increase)
    thread_two = Thread(target=increase)
    thread_one.start()
    thread_two.start()
    thread_one.join()
    thread_two.join()
    print(f"end value: {database_value}")


from threading import Thread, Lock
import time

database_value = 0


def increase():
    global database_value
    # Lock the transiction
    lock.acquire()
    # copy the database value locally
    local_copy = database_value
    # processing to local copy
    local_copy += 1
    time.sleep(2)  # takes some time to processing
    # rewrite the updated value to database
    database_value = local_copy
    # remove the locking
    lock.release()


if __name__ == "__main__":
    print(f"Start value: {database_value}")
    lock = Lock()  # lock obj
    # create threads
    thread_one = Thread(target=increase)
    thread_two = Thread(target=increase)
    # start threads
    thread_one.start()
    thread_two.start()
    # join : wait till threads gets complitated
    thread_one.join()
    thread_two.join()
    print(f"end value: {database_value}")


# Chapter 5: Web Development with Python
# Introduction to Web Development
print("Web development involves building and maintaining websites.")

# Flask Framework
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, World!"


# Django Framework
# https://realpython.com/get-started-with-django-1/
print("Django is a high-level Python web framework.")

# Web Scraping
import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.python.org")
soup = BeautifulSoup(response.text, "html.parser")
print(soup.title)

# Chapter 6: Artificial Intelligence and Machine Learning with Python
# Introduction to Artificial Intelligence and Machine Learning
print("AI and ML involve creating systems that can learn and improve from experience.")

# NumPy and Pandas
import numpy as np
import pandas as pd

array = np.array([1, 2, 3, 4, 5])
print(array)

df = pd.DataFrame({"A": [1, 2, 3], "B": [4, 5, 6]})
print(df)

# Scikit-Learn
from sklearn.ensemble import RandomForestClassifier

print(RandomForestClassifier())

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

"""I hope these examples help you understand the concepts better. If you need more examples or have questions about specific topics, feel free to ask!
"""
