import os
import sys
import platform


def sysInfo():
    print("=====System Information=====")
    print(f"OS Name        : {os.name}")
    print(f"Platform       : {platform.system()}")
    print(f"Release        : {platform.release()}")
    print(f"Version        : {platform.version()}")
    print(f"Machine        : {platform.machine()}")
    print(f"Processor      : {platform.processor()}")
    print(f"Python         : {platform.python_version()}")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "-o":
        print(os.name)
    elif len(sys.argv) > 1 and sys.argv[1] == "-r":
        print(platform.release())
    elif len(sys.argv) > 1 and sys.argv[1] == "-pm":
        print(platform.system())
    elif len(sys.argv) > 1 and sys.argv[1] == "-v":
        print(platform.version())
    elif len(sys.argv) > 1 and sys.argv[1] == "-m":
        print(platform.machine())
    elif len(sys.argv) > 1 and sys.argv[1] == "-pr":
        print(platform.processor())
    elif len(sys.argv) > 1 and sys.argv[1] == "-pyv":
        print(platform.python_version())
    else:
        sysInfo()
