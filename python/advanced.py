from __future__ import annotations

import json
import contextlib
from collections import Counter, defaultdict, deque, namedtuple
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional, TypeVar, Generic, Protocol, runtime_checkable


def add(a: int, b: int) -> int:
    return a + b


def greet(name: str, loud: bool = False) -> str:
    msg = f"Hello, {name}"
    return msg.upper() if loud else msg


def first_or_none(items: list[int]) -> Optional[int]:
    return items[0] if items else None


print(add(3, 4))
print(greet("Ana", loud=True))
print(first_or_none([]))
print(first_or_none([5, 10, 15]))


@dataclass
class Point:
    x: float
    y: float

    def distance_to_origin(self) -> float:
        return (self.x ** 2 + self.y ** 2) ** 0.5


@dataclass(order=True)
class Product:
    sort_index: float = field(init=False, repr=False)
    name: str
    price: float
    tags: list[str] = field(default_factory=list)

    def __post_init__(self):
        self.sort_index = self.price


p1 = Point(3.0, 4.0)
print(p1)
print(p1.distance_to_origin())

products = [
    Product("Widget", 9.99, ["sale"]),
    Product("Gadget", 29.99),
    Product("Doohickey", 4.50),
]
products.sort()
for p in products:
    print(f"{p.name}: ${p.price}")


words = ["apple", "banana", "apple", "orange", "banana", "apple"]
counter = Counter(words)
print(counter)
print(counter.most_common(2))
print(counter["grape"])

groups: defaultdict[str, list[str]] = defaultdict(list)
for word in ["cat", "car", "dog", "door", "cow"]:
    groups[word[0]].append(word)
print(dict(groups))

dq: deque[int] = deque([1, 2, 3], maxlen=5)
dq.appendleft(0)
dq.append(4)
dq.append(5)
print(dq)
dq.rotate(2)
print(dq)

Color = namedtuple("Color", ["red", "green", "blue"])
white = Color(255, 255, 255)
print(white.red, white[1])
print(white._asdict())


class ManagedFile:
    def __init__(self, path: str, mode: str = "r"):
        self.path = path
        self.mode = mode
        self._file = None

    def __enter__(self):
        self._file = open(self.path, self.mode, encoding="utf-8")
        return self._file

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self._file:
            self._file.close()
        return False


@contextlib.contextmanager
def temp_file(path: str):
    p = Path(path)
    p.write_text("temporary content", encoding="utf-8")
    try:
        yield p
    finally:
        p.unlink(missing_ok=True)


with temp_file("_temp.txt") as f:
    print(f.read_text())

with contextlib.suppress(FileNotFoundError):
    Path("nonexistent.txt").unlink()


base = Path(".")
readme = base / "README.md"
src = base / "src" / "main.py"

print(readme.name)
print(readme.stem)
print(readme.suffix)
print(src.parent)
print(src.parts)

py_files = list(base.glob("*.py"))
print([f.name for f in py_files])

tmp = Path("_path_demo.txt")
tmp.write_text("hello from pathlib\n", encoding="utf-8")
print(tmp.read_text(encoding="utf-8"))
tmp.unlink()


data = {
    "name": "Alice",
    "age": 30,
    "languages": ["Python", "Go"],
    "active": True,
    "score": None,
}

json_str = json.dumps(data, indent=2)
print(json_str)

parsed = json.loads(json_str)
print(parsed["languages"])

json_path = Path("_demo.json")
json_path.write_text(json.dumps(data, indent=2), encoding="utf-8")
loaded = json.loads(json_path.read_text(encoding="utf-8"))
print(loaded["name"])
json_path.unlink()


from datetime import date

class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, date):
            return obj.isoformat()
        return super().default(obj)


event = {"title": "PyCon", "date": date(2026, 10, 15)}
print(json.dumps(event, cls=DateEncoder))


T = TypeVar("T")


class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        if not self._items:
            raise IndexError("pop from empty stack")
        return self._items.pop()

    def peek(self) -> T:
        if not self._items:
            raise IndexError("peek at empty stack")
        return self._items[-1]

    def __len__(self) -> int:
        return len(self._items)

    def __bool__(self) -> bool:
        return bool(self._items)


stack: Stack[int] = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.peek())
print(stack.pop())
print(len(stack))


@runtime_checkable
class Drawable(Protocol):
    def draw(self) -> str: ...


class Square:
    def __init__(self, side: float):
        self.side = side

    def draw(self) -> str:
        return f"Square(side={self.side})"


class Triangle:
    def __init__(self, base: float, height: float):
        self.base = base
        self.height = height

    def draw(self) -> str:
        return f"Triangle(base={self.base}, height={self.height})"


def render_all(shapes: list[Drawable]) -> None:
    for shape in shapes:
        print(shape.draw())


shapes = [Square(4), Triangle(3, 5)]
render_all(shapes)
print(isinstance(Square(1), Drawable))


sentence_counts: Counter[str] = Counter()
sentences = [
    "the cat sat on the mat",
    "the dog sat on the log",
    "the cat and the dog",
]
for s in sentences:
    sentence_counts.update(s.split())

print(sentence_counts.most_common(5))

a = Counter({"x": 3, "y": 2})
b = Counter({"x": 1, "y": 4, "z": 1})
print(a + b)
print(a - b)
print(a & b)
print(a | b)
