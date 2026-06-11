import itertools
import operator


def count_up(start, stop):
    current = start
    while current <= stop:
        yield current
        current += 1


gen = count_up(1, 5)
print(next(gen))
print(next(gen))
print(list(gen))


def infinite_counter(start=0):
    n = start
    while True:
        yield n
        n += 1


counter = infinite_counter(10)
print([next(counter) for _ in range(5)])


squares_gen = (x ** 2 for x in range(10))
print(type(squares_gen))
print(sum(squares_gen))


big = (x * 2 for x in range(1_000_000))
print(next(big))
print(next(big))


def chain_gen(*iterables):
    for it in iterables:
        yield from it


print(list(chain_gen([1, 2], "ab", (3, 4))))


def accumulator():
    total = 0
    while True:
        value = yield total
        if value is None:
            break
        total += value


acc = accumulator()
next(acc)
print(acc.send(10))
print(acc.send(5))
print(acc.send(20))


class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value


for n in Countdown(5):
    print(n, end=" ")
print()


print(list(itertools.chain([1, 2], [3, 4], [5])))

print(list(itertools.islice(count_up(1, 100), 5)))

colors = itertools.cycle(["red", "green", "blue"])
print([next(colors) for _ in range(7)])

print(list(itertools.takewhile(lambda x: x < 5, [1, 3, 4, 6, 2])))
print(list(itertools.dropwhile(lambda x: x < 5, [1, 3, 4, 6, 2])))

print(list(itertools.combinations("ABC", 2)))
print(list(itertools.permutations("AB", 2)))

print(list(itertools.product([0, 1], repeat=3)))

data = [("a", 1), ("a", 2), ("b", 3), ("b", 4), ("c", 5)]
for key, group in itertools.groupby(data, key=lambda x: x[0]):
    print(key, list(group))

print(list(itertools.accumulate([1, 2, 3, 4, 5])))
print(list(itertools.accumulate([1, 2, 3, 4, 5], operator.mul)))


names = ["Alice", "Bob", "Carol"]
scores = [95, 87]
print(list(itertools.zip_longest(names, scores, fillvalue=0)))


pairs = [(2, 3), (4, 5), (1, 7)]
print(list(itertools.starmap(operator.mul, pairs)))


nested = [[1, 2], [3, 4], [5, 6]]
print(list(itertools.chain.from_iterable(nested)))


def fibonacci_gen():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


fib = fibonacci_gen()
print([next(fib) for _ in range(10)])


def running_average():
    total = 0
    count = 0
    while True:
        value = yield (total / count) if count else 0
        if value is None:
            break
        total += value
        count += 1


avg = running_average()
next(avg)
for n in [10, 20, 30, 40]:
    print(f"After {n}: avg = {avg.send(n):.1f}")


def windowed(iterable, size):
    it = iter(iterable)
    window = list(itertools.islice(it, size))
    if len(window) == size:
        yield tuple(window)
    for item in it:
        window.append(item)
        window.pop(0)
        yield tuple(window)


print(list(windowed(range(6), 3)))
