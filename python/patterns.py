from dataclasses import dataclass
from typing import Any


numbers = [1, -2, 3, -4, 5, -6, 7, -8]

positives = [x for x in numbers if x > 0]
negatives = [x for x in numbers if x < 0]
print(positives, negatives)

matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)

flat = [cell for row in matrix for cell in row]
print(flat)

unique_squares = {x ** 2 for x in range(-5, 6)}
print(sorted(unique_squares))

word_lengths = {w: len(w) for w in ["python", "is", "great"]}
print(word_lengths)

pairs = [(x, y) for x in range(4) for y in range(4) if x != y and x + y == 4]
print(pairs)


data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if chunk := data[:3]:
    print(f"first chunk has {len(chunk)} items: {chunk}")

while line := data.pop(0) if data else None:
    if line > 7:
        print(f"found {line}, stopping")
        break


def process(value: Any) -> str:
    match value:
        case int(n) if n < 0:
            return f"negative int: {n}"
        case int(n):
            return f"positive int: {n}"
        case str(s) if s.startswith("http"):
            return f"url: {s}"
        case str(s):
            return f"string: {s}"
        case [x, y]:
            return f"two-element list: {x}, {y}"
        case [x, *rest]:
            return f"list starting with {x}, then {len(rest)} more"
        case {"action": action, "value": val}:
            return f"command {action!r} with value {val!r}"
        case None:
            return "nothing"
        case _:
            return f"unknown: {value}"


print(process(-5))
print(process(42))
print(process("hello"))
print(process("https://example.com"))
print(process([1, 2]))
print(process([1, 2, 3, 4]))
print(process({"action": "move", "value": "left"}))
print(process(None))


@dataclass
class Point:
    x: float
    y: float


@dataclass
class Circle:
    center: Point
    radius: float


@dataclass
class Rectangle:
    top_left: Point
    bottom_right: Point


def describe_shape(shape: Any) -> str:
    match shape:
        case Circle(center=Point(x=0, y=0), radius=r):
            return f"circle at origin with radius {r}"
        case Circle(center=Point(x=x, y=y), radius=r):
            return f"circle at ({x}, {y}) with radius {r}"
        case Rectangle(top_left=Point(x=x1, y=y1), bottom_right=Point(x=x2, y=y2)):
            width = abs(x2 - x1)
            height = abs(y2 - y1)
            return f"rectangle {width}x{height}"
        case _:
            return "unknown shape"


shapes = [
    Circle(Point(0, 0), 5),
    Circle(Point(3, 4), 2),
    Rectangle(Point(0, 0), Point(10, 5)),
]
for s in shapes:
    print(describe_shape(s))


def classify_http(status: int) -> str:
    match status:
        case 200 | 201 | 204:
            return "success"
        case 301 | 302:
            return "redirect"
        case 400:
            return "bad request"
        case 401 | 403:
            return "auth error"
        case 404:
            return "not found"
        case code if 500 <= code < 600:
            return f"server error {code}"
        case _:
            return "unknown"


for code in [200, 201, 301, 400, 404, 500, 503]:
    print(f"{code}: {classify_http(code)}")


values = [0, "", None, False, [], {}, 1, "hello", [1], {"a": 1}]
truthy = [v for v in values if v]
falsy  = [v for v in values if not v]
print(f"truthy: {truthy}")
print(f"falsy:  {falsy}")

nested = [[1, 2, [3, 4]], [5, [6, [7, 8]]]]


def flatten(items):
    for item in items:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item


print(list(flatten(nested)))


sentences = ["the quick brown fox", "jumps over", "the lazy dog"]
word_count = {
    word: count
    for sentence in sentences
    for word, count in (
        (w, sentences[0].count(w) + sentences[1].count(w) + sentences[2].count(w))
        for w in sentence.split()
    )
}
print(word_count)
