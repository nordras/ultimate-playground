# Rust Hello World

## Compile and Run

```bash
# Compile
rustc main.rs

# Run
.\main.exe
```

## Using Cargo (recommended)

```bash
# Create new project
cargo new hello_world

# Compile and run
cargo run
```

## Exercise Checklist to Learn Rust

### Basics
- [ ] Hello World - print message to console
- [ ] Variables and mutability - use `let` and `let mut`
- [ ] Data types - integers, floats, booleans, characters
- [ ] Functions - create and call functions with parameters and return values
- [ ] Comments - line comments and documentation
- [ ] Arithmetic and logical operators

### Control Flow
- [ ] Conditionals - `if`, `else if`, `else`
- [ ] Loops - `loop`, `while`, `for`
- [ ] Match - basic pattern matching
- [ ] Break and continue

### Ownership and Borrowing
- [ ] Ownership - understand move semantics
- [ ] Borrowing - references `&` and `&mut`
- [ ] Slices - work with string and array slices
- [ ] Lifetimes - understand the basics of lifetimes

### Compound Types
- [ ] Tuples - create and destructure tuples
- [ ] Arrays - fixed-size arrays
- [ ] Vectors - `Vec<T>` and its operations
- [ ] Strings - `String` vs `&str`
- [ ] HashMaps - store key-value pairs

### Structs and Enums
- [ ] Structs - define and instantiate structs
- [ ] Methods - implement methods with `impl`
- [ ] Enums - create enumerations
- [ ] Option<T> - work with optional values
- [ ] Result<T, E> - error handling

### Functional Programming
- [ ] Closures - anonymous functions
- [ ] Iterators - `map`, `filter`, `collect`
- [ ] Higher-order functions
- [ ] Combinators - `and_then`, `or_else`, `unwrap_or`

### Intermediate
- [ ] Traits - define and implement traits
- [ ] Generics - generic functions and structs
- [ ] Error handling - `?` operator and error propagation
- [ ] Modules - organize code into modules
- [ ] Testing - write unit tests
- [ ] Documentation - generate docs with `cargo doc`

### Advanced
- [ ] Smart Pointers - `Box<T>`, `Rc<T>`, `RefCell<T>`
- [ ] Concurrency - threads and message passing
- [ ] Async/Await - asynchronous programming
- [ ] Macros - create simple macros
- [ ] Unsafe Rust - when and how to use it
- [ ] FFI - interoperability with C

### Practical Projects
- [ ] Command-line calculator
- [ ] Number guessing game
- [ ] To-do list with file persistence
- [ ] Simple web scraper
- [ ] REST API with Actix-web or Rocket
- [ ] CLI tool with arguments (using clap)
