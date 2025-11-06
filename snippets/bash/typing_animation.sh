#!/bin/bash

type_effect() {
  local text="$1"
  local delay="${2:-0.05}" # default 0.05

  for ((i=0; i<${#text}; i++)); do
    printf "%s" "${text:$i:1}"
    sleep "$delay"
  done
  printf "\n"
}

type_effect "Hello, this is a typing animation in Bash!"
type_effect "Now this line runs after the previous one." 0.03
echo "✅ All animations completed!"
