# ============================================================
# Syntax and Core Concepts
# ============================================================

# ------------------------------------------------------------
# 1. Variables and Data Types
# ------------------------------------------------------------

integer = 42
floating = 3.14
text = "Hello, Python!"
boolean = True
null = None

print(type(integer))   # <class 'int'>
print(type(floating))  # <class 'float'>
print(type(text))      # <class 'str'>
print(type(boolean))   # <class 'bool'>
print(type(null))      # <class 'NoneType'>


# ------------------------------------------------------------
# 2. Strings
# ------------------------------------------------------------

first_name = "Mary"
last_name = 'Smith'

# Concatenation
full_name = first_name + " " + last_name
print(full_name)  # Mary Smith

# f-string (modern formatting)
age = 30
print(f"{first_name} is {age} years old.")

# String methods
print(text.upper())                     # HELLO, PYTHON!
print(text.lower())                     # hello, python!
print(text.replace("Python", "World"))  # Hello, World!
print(len(text))                        # string length

# Slicing
word = "Python"
print(word[0])      # P
print(word[-1])     # n
print(word[0:3])    # Pyt
print(word[::-1])   # nohtyP (reversed)
