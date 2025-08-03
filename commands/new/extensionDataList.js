export function getContentUsingFilename(template, fileName) {
  return template.replace(/{{fileName}}/g, fileName);
}

export const exnList = [
  {
    id: 1,
    extension: "c",
    content: `
#include <stdio.h>

int main() {
  printf("Hello, World!");

  return 0;
}
`
  },
  {
    id: 2,
    extension: "cpp",
    content: `#include <iostream>

using namespace std;

int main() {
  cout << "Hello, World!" << endl;

  return 0;
}`
  },
  {
    id: 3,
    extension: "js",
    content: `console.log("Hello, World!");`
  },
  {
    id: 4,
    extension: "py",
    content: `print("Hello, World!")`
  },
  {
    id: 5,
    extension: "ts",
    content: `console.log("Hello, World!");`
  },
  {
    id: 6,
    extension: 'jsx',
    content: `import React from 'react';
  
export default function NewFile() {
    return (
      <div>
        Hello, World!
      </div>
    )
}  `
  },
  {
    id: 7,
    extension: 'tsx',
    content: `import React from 'react';
  
export default function NewFile() {
    return (
      <div>
        Hello, World!
      </div>
    )
}  `
  },
  {
    id: 8,
    extension: 'html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
  `
  },
  {
    id: 9,
    extension: 'css',
    content: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`
  },
  {
    id: 10,
    extension: 'json',
    content: `{
  "message": "Hello, World!"
}
`
  },
  {
    id: 11,
    extension: 'md',
    content: `# Hello, World!`
  },
  {
    id: 12,
    extension: 'sh',
    content: `#!/bin/bash
echo "Hello, World!"`
  },
  {
    id: 13,
    extension: 'go',
    content: `package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`
  },
  {
    id: 14,
    extension: 'java',
    content: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`
  },
  {
    id: 15,
    extension: 'rs',
    content: `fn main() {
println!("Hello, World!");`
  },
  {
    id: 16,
    extension: 'lua',
    content: `print("Hello, World!")`
  },
  {
    id: 17,
    extension: 'swift',
    content: `import Swift

print("Hello, World!")
`
  },
  {
    id: 18,
    extension: 'kt',
    content: `fun main() {
    println("Hello, World!")
  }`
  },
  {
    id: 19,
    extension: 'php',
    content: `<?php
  echo "Hello, World!";
?>`
  },
  {
    id: 20,
    extension: 'rb',
    content: `puts "Hello, World!"`
  },
  {
    id: 21,
    extension: 'dart',
    content: `void main() {
  print('Hello, World!');
}`
  },
  {
    id: 22,
    extension: 'scala',
    content: `object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}`
  },
  {
    id: 23,
    extension: 'r',
    content: `cat("Hello, World!")`
  },
  {
    id: 24,
    extension: 'pl',
    content: `print "Hello, World!\n";`
  },
  {
    id: 25,
    extension: 'hs',
    content: `main :: IO ()
main = putStrLn "Hello, World!"`
  },
  {
    id: 26,
    extension: 'ex',
    content: `IO.puts "Hello, World!"`
  },
  {
    id: 27,
    extension: 'clj',
    content: `(println "Hello, World!")`
  },
  {
    id: 28,
    extension: 'tsv',
    content: `Column1\tColumn2\tColumn3\nValue1\tValue2\tValue3`
  },
  {
    id: 29,
    extension: 'yaml',
    content: `message: "Hello, World!"`
  },
  {
    id: 30,
    extension: 'xml',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <message>Hello, World!</message>
</root>`
  },
  {
    id: 31,
    extension: 'bat',
    content: `@echo off
echo Hello, World!
`
  },
  {
    id: 32,
    extension: 'ini',
    content: `[message]
text=Hello, World!`
  },
  {
    id: 33,
    extension: 'sql',
    content: `SELECT 'Hello, World!' AS message;`
  },
  {
    id: 34,
    extension: 'ps1',
    content: `Write-Host "Hello, World!"`
  },
  {
    id: 35,
    extension: 'vbs',
    content: `MsgBox "Hello, World!"`
  },
  {
    id: 36,
    extension: 'tex',
    content: `\\documentclass{article}
\\begin{document}
Hello, World!
\\end{document}`
  },
  {
    id: 37,
    extension: 'env',
    content: `GREETING="Hello, World!"`
  },
  {
    id: 37,
    extension: 'toml',
    content: `message = "Hello, World!"`
  },
  {
    id: 38,
    extension: 'asm',
    content: `section .data
    hello db 'Hello, World!', 0xA  ; newline at end

section .text
    global _start

_start:
    ; write our string to stdout
    mov     rax, 1          ; syscall: write
    mov     rdi, 1          ; file descriptor: stdout
    mov     rsi, hello      ; pointer to message
    mov     rdx, 14         ; length (13 chars + newline)
    syscall

    ; exit
    mov     rax, 60         ; syscall: exit
    xor     rdi, rdi        ; status: 0
    syscall`
  },
  {
    id: 39,
    extension: 'm',
    content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
  @autoreleasepool {
    NSLog(@"Hello, World!");
  }
  return 0;
}`
  },
  {
    id: 40,
    extension: 'kts',
    content: `println("Hello, World!")`
  },
  {
    id: 41,
    extension: 'v',
    content: `module main
import io
io:println("Hello, World!")`
  },
  {
    id: 42,
    extension: 'zig',
    content: `const std = @import("std");
const main = std.io.getStdOut().writer().print("Hello, World!\n", .{});
pub fn main() !void {
  try main;
}
`
  },
  {
    id: 43,
    extension: 'nim',
    content: `echo "Hello, World!"`
  },
  {
    id: 44,
    extension: 'erl',
    content: `-module(hello).
-export([main/0]).
main() ->
  io:format("Hello, World!~n", []),
  ok.
`
  },
  {
    id: 45,
    extension: 'cr',
    content: `puts "Hello, World!"`
  },
  {
    id: 46,
    extension: 'f90',
    content: `program hello
  print *, "Hello, World!"
end program hello
`
  },
  {
    id: 47,
    extension: 'txt',
    content: "Hello, World!"
  }
]