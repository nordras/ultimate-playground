import re
import heapq
import bisect
import functools
from enum import Enum, IntEnum, auto, Flag


pattern = re.compile(r"\b\d{3}-\d{4}\b")
text = "Call 555-1234 or 555-9876 for support."
print(pattern.findall(text))

email_re = re.compile(r"[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}")
emails = email_re.findall("Contact alice@example.com and bob.smith@work.org")
print(emails)

date_re = re.compile(r"(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})")
m = date_re.search("Event on 2026-10-15 at noon")
if m:
    print(m.group("year"), m.group("month"), m.group("day"))
    print(m.groupdict())

slug = re.sub(r"[^\w\s-]", "", "Hello, World! 2026").strip()
slug = re.sub(r"[\s_]+", "-", slug).lower()
print(slug)

tokens = re.split(r"[;,\s]+", "one, two;three  four")
print(tokens)

camel = "getFirstName"
snake = re.sub(r"(?<!^)(?=[A-Z])", "_", camel).lower()
print(snake)


class Direction(Enum):
    NORTH = "N"
    SOUTH = "S"
    EAST  = "E"
    WEST  = "W"

    def opposite(self) -> "Direction":
        opposites = {
            Direction.NORTH: Direction.SOUTH,
            Direction.SOUTH: Direction.NORTH,
            Direction.EAST:  Direction.WEST,
            Direction.WEST:  Direction.EAST,
        }
        return opposites[self]


class Color(IntEnum):
    RED   = auto()
    GREEN = auto()
    BLUE  = auto()


class Permission(Flag):
    READ    = auto()
    WRITE   = auto()
    EXECUTE = auto()
    ALL     = READ | WRITE | EXECUTE


print(Direction.NORTH)
print(Direction.NORTH.value)
print(Direction.NORTH.opposite())
print(list(Direction))

print(Color.RED < Color.BLUE)
print(Color(2))

user_perms = Permission.READ | Permission.WRITE
print(user_perms)
print(Permission.READ in user_perms)
print(Permission.EXECUTE in user_perms)


nums = [5, 1, 8, 3, 2, 9, 4, 7, 6]

top3 = heapq.nlargest(3, nums)
bot3 = heapq.nsmallest(3, nums)
print(top3, bot3)

heap: list[int] = []
for n in nums:
    heapq.heappush(heap, n)
print([heapq.heappop(heap) for _ in range(len(heap))])

tasks = [(3, "low"), (1, "high"), (2, "medium")]
task_heap: list[tuple[int, str]] = []
for priority, name in tasks:
    heapq.heappush(task_heap, (priority, name))
while task_heap:
    p, name = heapq.heappop(task_heap)
    print(f"[{p}] {name}")

merged = list(heapq.merge([1, 3, 5], [2, 4, 6], [0, 7, 8]))
print(merged)


sorted_data = [1, 3, 5, 7, 9, 11, 13]

idx = bisect.bisect_left(sorted_data, 7)
print(f"7 found/would be at index {idx}")

bisect.insort(sorted_data, 6)
print(sorted_data)

def grade(score: int) -> str:
    breakpoints = [60, 70, 80, 90]
    labels      = ["F", "D", "C", "B", "A"]
    return labels[bisect.bisect(breakpoints, score)]

for score in [45, 65, 75, 85, 95]:
    print(f"{score} -> {grade(score)}")


def add(a, b):
    return a + b

add5 = functools.partial(add, b=5)
print(add5(10))
print(add5(20))

from functools import reduce

product = reduce(lambda a, b: a * b, range(1, 6))
print(product)

total = reduce(lambda acc, x: acc + x["price"], [
    {"name": "a", "price": 10},
    {"name": "b", "price": 20},
    {"name": "c", "price": 30},
], 0)
print(total)


@functools.singledispatch
def process(value):
    raise NotImplementedError(f"no handler for {type(value)}")

@process.register(int)
def _(value: int) -> str:
    return f"int: {value * 2}"

@process.register(str)
def _(value: str) -> str:
    return f"str: {value.upper()}"

@process.register(list)
def _(value: list) -> str:
    return f"list of {len(value)} items"

print(process(21))
print(process("hello"))
print(process([1, 2, 3]))


@functools.total_ordering
class Version:
    def __init__(self, major: int, minor: int, patch: int):
        self.major = major
        self.minor = minor
        self.patch = patch

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Version):
            return NotImplemented
        return (self.major, self.minor, self.patch) == (other.major, other.minor, other.patch)

    def __lt__(self, other: "Version") -> bool:
        return (self.major, self.minor, self.patch) < (other.major, other.minor, other.patch)

    def __repr__(self) -> str:
        return f"v{self.major}.{self.minor}.{self.patch}"


versions = [Version(1, 2, 0), Version(2, 0, 0), Version(1, 10, 3), Version(1, 2, 1)]
print(sorted(versions))
print(max(versions))
print(Version(1, 10, 3) >= Version(1, 2, 0))
