from collections import deque

n, m = map(int, input().split())
d = deque([i for i in range(1, n + 1)])
list = list(map(int, input().split()))
count = 0

for x in list:
    while True:
        if d[0] == x:
            d.popleft()
            break
        else:
            if d.index(x) < len(d) / 2:
                while d[0] != x:
                    d.append(d.popleft())
                    count += 1
            else:
                while d[0] != x:
                    d.appendleft(d.pop())
                    count += 1

print(count)
