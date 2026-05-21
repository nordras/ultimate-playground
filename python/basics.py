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

# ------------------------------------------------------------
# 3. Operators
# ------------------------------------------------------------

# Arithmetic
print(10 + 3)   # 13
print(10 - 3)   # 7
print(10 * 3)   # 30
print(10 / 3)   # 3.333... (true division)
print(10 // 3)  # 3         (floor division)
print(10 % 3)   # 1         (modulo / remainder)
print(2 ** 10)  # 1024      (exponentiation)

# Comparison
print(5 > 3)    # True
print(5 == 5)   # True
print(5 != 4)   # True

# Logical
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# ------------------------------------------------------------
# 4. Control Flow
# ------------------------------------------------------------

# if / elif / else
grade = 75

if grade >= 90:
    print("A")
elif grade >= 70:
    print("B")
elif grade >= 50:
    print("C")
else:
    print("Failed")

# Ternary operator
status = "passed" if grade >= 50 else "failed"
print(status)

# ------------------------------------------------------------
# 5. Loops
# ------------------------------------------------------------

# for with range
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4
print()

# for with range(start, stop, step)
for i in range(0, 10, 2):
    print(i, end=" ")  # 0 2 4 6 8
print()

# while
counter = 0
while counter < 5:
    print(counter, end=" ")
    counter += 1
print()

# break and continue
for i in range(10):
    if i == 3:
        continue  # skip 3
    if i == 7:
        break     # stop at 7
    print(i, end=" ")
print()

