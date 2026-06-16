import asyncio
import threading
import multiprocessing
import concurrent.futures
import time


def cpu_task(n: int) -> int:
    return sum(i * i for i in range(n))


def io_task(name: str, seconds: float) -> str:
    time.sleep(seconds)
    return f"{name} done after {seconds}s"


with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    futures = [executor.submit(io_task, f"task-{i}", 0.1) for i in range(5)]
    for f in concurrent.futures.as_completed(futures):
        print(f.result())


with concurrent.futures.ProcessPoolExecutor() as executor:
    results = list(executor.map(cpu_task, [100_000, 200_000, 300_000]))
    print(results)


results_list: list[int] = []
lock = threading.Lock()


def thread_worker(value: int) -> None:
    time.sleep(0.01)
    with lock:
        results_list.append(value * 2)


threads = [threading.Thread(target=thread_worker, args=(i,)) for i in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(sorted(results_list))


async def fetch(name: str, delay: float) -> str:
    await asyncio.sleep(delay)
    return f"{name} fetched"


async def main():
    tasks = [
        asyncio.create_task(fetch("alpha", 0.3)),
        asyncio.create_task(fetch("beta", 0.1)),
        asyncio.create_task(fetch("gamma", 0.2)),
    ]
    results = await asyncio.gather(*tasks)
    for r in results:
        print(r)


asyncio.run(main())


async def producer(queue: asyncio.Queue, items: list[str]) -> None:
    for item in items:
        await asyncio.sleep(0.05)
        await queue.put(item)
    await queue.put(None)


async def consumer(queue: asyncio.Queue) -> list[str]:
    received = []
    while True:
        item = await queue.get()
        if item is None:
            break
        received.append(item)
        queue.task_done()
    return received


async def pipeline():
    queue: asyncio.Queue = asyncio.Queue(maxsize=3)
    items = ["a", "b", "c", "d", "e"]
    prod = asyncio.create_task(producer(queue, items))
    cons = asyncio.create_task(consumer(queue))
    await prod
    result = await cons
    print(result)


asyncio.run(pipeline())


async def retry(coro_fn, retries: int = 3, delay: float = 0.1):
    for attempt in range(1, retries + 1):
        try:
            return await coro_fn()
        except Exception as e:
            if attempt == retries:
                raise
            print(f"attempt {attempt} failed: {e}, retrying...")
            await asyncio.sleep(delay)


call_count = 0


async def flaky() -> str:
    global call_count
    call_count += 1
    if call_count < 3:
        raise ConnectionError("not ready")
    return "success"


async def run_retry():
    result = await retry(flaky)
    print(result)


asyncio.run(run_retry())


async def timeout_example():
    try:
        async with asyncio.timeout(0.05):
            await asyncio.sleep(10)
    except TimeoutError:
        print("timed out")


asyncio.run(timeout_example())


async def stream_numbers(n: int):
    for i in range(n):
        await asyncio.sleep(0)
        yield i


async def consume_stream():
    total = 0
    async for num in stream_numbers(100):
        total += num
    print(f"stream total: {total}")


asyncio.run(consume_stream())
