import time
import sys

def progress_bar(total=20, delay=0.1):
    for i in range(total + 1):
        bar = "#" * i + "-" * (total - i)
        sys.stdout.write(f"\r[{bar}] {int((i/total)*100)}%")
        sys.stdout.flush()
        time.sleep(delay)
    sys.stdout.write("\r\x1b[K✅ Done!\n")

progress_bar(30, 0.05)
