**1/29/2026**

# Node

Node is made to run Javascript off the internet. It is kind of a run time environment for it. Enabling it to be used to interact with databases, servers and create microservices.

## REPL

read evaluate print loop, inside of the different programming packages.  
write `node` in the terminal, to get to the node REPL.

## Type Coercion

Depending on which operators we use, we'll get a true or false, on mismatcing data types. That's why we use the operator `===` to avoid "type coercion".

### type coercion:

    2 == “2” = true

The above example can be avoided, my making a "Strict Equality check", using the `===` operator.

### strict equality check:

    2 === “2” = false

## Variables

Declare all variables as const, unless there is a reason to declare as let, never var.
const is not immutable.  
It makes it so that the assignment is constant.  
for example you can change the contents of a const assigned as an object, but you can’t rebind the data type.  
you can also add new entries to an array.

## ASI

Javascript has ASI, Automatic Semi-colon Insertion.  
Some cases require manually inserting a semi-colon, like a multi-layered object for example.

    //backticks, String template literal, string interpolation
    console.log('My first name is ${firstName} and my last name is ${lastName}')
