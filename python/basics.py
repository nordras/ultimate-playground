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

# ------------------------------------------------------------
# 6. Lists
# ------------------------------------------------------------

fruits = ["apple", "banana", "orange", "grape"]

print(fruits[0])       # apple
print(fruits[-1])      # grape
print(fruits[1:3])     # ['banana', 'orange']

fruits.append("mango")       # add to end
fruits.insert(1, "kiwi")     # insert at position 1
fruits.remove("banana")      # remove by value
removed = fruits.pop()       # remove and return last item

print(len(fruits))     # length
print(sorted(fruits))  # sorted copy (does not modify original)
fruits.sort()          # sort in place

# List comprehension
squares = [x ** 2 for x in range(6)]
print(squares)  # [0, 1, 4, 9, 16, 25]

evens = [x for x in range(20) if x % 2 == 0]
print(evens)

# ------------------------------------------------------------
# 7. Tuples
# ------------------------------------------------------------

coordinates = (10, 20)
point = (1, 2, 3)

print(coordinates[0])  # 10
x, y = coordinates     # unpacking
print(x, y)

# Tuples are immutable — coordinates[0] = 5 would raise a TypeError

# ------------------------------------------------------------
# 8. Dictionaries
# ------------------------------------------------------------

person = {
    "name": "John",
    "age": 25,
    "city": "New York"
}

print(person["name"])              # John
print(person.get("phone", "N/A"))  # N/A (missing key)

person["email"] = "john@email.com"  # add key
person["age"] = 26                  # update value
del person["city"]                  # remove key

print(person.keys())    # keys
print(person.values())  # values
print(person.items())   # key-value pairs

# Iterating
for key, value in person.items():
    print(f"{key}: {value}")

# Dict comprehension
squares_dict = {x: x ** 2 for x in range(5)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# ------------------------------------------------------------
# 9. Sets
# ------------------------------------------------------------

numbers = {1, 2, 3, 4, 4, 5}  # duplicates are removed
print(numbers)  # {1, 2, 3, 4, 5}

numbers.add(6)
numbers.discard(3)

a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)  # union
print(a & b)  # intersection
print(a - b)  # difference

