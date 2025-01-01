# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle error in JavaScript: unexpected string concatenation when using the '+' operator with numbers and strings.

## The Bug

The `myFunction` adds two values. When one of the parameters is a string, JavaScript concatenates the values instead of performing arithmetic addition.

## Solution

The solution involves type checking or using the `parseInt()` function to convert the string to a number before performing the addition operation.