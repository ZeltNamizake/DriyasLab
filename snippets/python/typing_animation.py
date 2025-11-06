import sys
import time

def type_effect(text, delay=0.05):

    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()

if __name__ == "__main__":
    type_effect("Hello, this is a typing animation in Python!")
    type_effect("Now the next line runs after the first is done!", 0.03)
    print("✅ All animations completed!")
