import functools
import time
from abc import ABC, abstractmethod


def shout(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper() if isinstance(result, str) else result
    return wrapper


@shout
def greet(name):
    return f"hello, {name}"


print(greet("world"))
print(greet.__name__)
print(greet.__doc__)


def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator


@repeat(times=3)
def say(message):
    print(message)


say("Python!")


def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} ran in {elapsed:.6f}s")
        return result
    return wrapper


@timer
def slow_sum(n):
    return sum(range(n))


slow_sum(1_000_000)


@functools.lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(40))
print(fibonacci.cache_info())


class CountCalls:
    def __init__(self, func):
        functools.update_wrapper(self, func)
        self.func = func
        self.calls = 0

    def __call__(self, *args, **kwargs):
        self.calls += 1
        print(f"Call #{self.calls} to {self.func.__name__}")
        return self.func(*args, **kwargs)


@CountCalls
def add(a, b):
    return a + b


print(add(1, 2))
print(add(3, 4))
print(add.calls)


def bold(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<b>{func(*args, **kwargs)}</b>"
    return wrapper


def italic(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<i>{func(*args, **kwargs)}</i>"
    return wrapper


@bold
@italic
def render(text):
    return text


print(render("Python"))


class Temperature:
    def __init__(self, celsius: float):
        self._celsius = celsius

    @property
    def celsius(self) -> float:
        return self._celsius

    @celsius.setter
    def celsius(self, value: float):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero")
        self._celsius = value

    @property
    def fahrenheit(self) -> float:
        return self._celsius * 9 / 5 + 32

    @staticmethod
    def from_fahrenheit(f: float) -> "Temperature":
        return Temperature((f - 32) * 5 / 9)

    @classmethod
    def absolute_zero(cls) -> "Temperature":
        return cls(-273.15)


t = Temperature(100)
print(t.fahrenheit)
t.celsius = 0
print(t.celsius, t.fahrenheit)
print(Temperature.absolute_zero())
print(Temperature.from_fahrenheit(212).celsius)


class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...

    @abstractmethod
    def perimeter(self) -> float: ...

    def describe(self) -> str:
        return f"{type(self).__name__}: area={self.area():.2f}, perimeter={self.perimeter():.2f}"


class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        import math
        return math.pi * self.radius ** 2

    def perimeter(self) -> float:
        import math
        return 2 * math.pi * self.radius


class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self) -> float:
        return self.width * self.height

    def perimeter(self) -> float:
        return 2 * (self.width + self.height)


shapes: list[Shape] = [Circle(5), Rectangle(4, 6)]
for shape in shapes:
    print(shape.describe())
