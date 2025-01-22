# What is Python?
print("Python is a high-level, interpreted, interactive and object-oriented scripting language.")
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
x=0
#define a while loop
while(x <4):
   print(x)
   x = x+1
# Expected Output: 0
#                  1
#                  2
#                  3
#                  4

# Exception Handling
'''Example:-
   Division by Zero
   Accessing a file which does not exist.
   Addition of two incompatible types
   Trying to access a nonexistent index of a sequence
   Removing the table from the disconnected database server.
   ATM withdrawal of more than the available amount'''
try:
   print(5/0)
except ZeroDivisionError:
   print("Cannot divide by zero!")
# Expected Output: Cannot divide by zero!