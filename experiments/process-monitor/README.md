# Process Monitor
Experimenting with trying to display a list of processes in real-time with `ps aux`.

I did it with the help of a script I created:

```bash
#!/bin/bash
while true; do
  clear
  echo "Process Monitor (Update every 0.5 seconds)"
  echo "---------------------------------------------"
  ps aux
  sleep 0.5
done
```
In fact, real-time process list monitoring can be done without using a script. Here's how: simply use `watch` : 
```bash
#`watch` will automatically refresh every 0.5 seconds.
watch -n 0.5 'ps aux'
```

Using `watch` eliminates the hassle of creating repeatable scripts.
