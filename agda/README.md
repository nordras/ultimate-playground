# Agda

## About

Agda is a dependently typed functional programming language based on intuitionistic type theory. It is also a proof assistant, allowing mathematical proofs to be written in a natural way as programs.

## Key Features

- **Dependent Types**: Types can depend on values, enabling precise specifications
- **Interactive Development**: Powerful editor support with holes and type-driven development
- **Theorem Proving**: Can be used to write and verify mathematical proofs
- **Total Functions**: Strong emphasis on totality checking
- **Unicode Support**: Beautiful mathematical notation using Unicode symbols
- **Pattern Matching**: Advanced pattern matching capabilities
- **Mixfix Operators**: Flexible syntax definition

## Repository


## Como Executar

Para verificar o código de exemplo:

```bash
agda HelloWorld.agda
```

## Basic Syntax

```agda
-- Natural numbers definition
data ℕ : Set where
  zero : ℕ
  suc  : ℕ → ℕ

-- Addition function
_+_ : ℕ → ℕ → ℕ
zero  + n = n
suc m + n = suc (m + n)

-- Proof that addition is commutative (type signature)
+-comm : (m n : ℕ) → m + n ≡ n + m
```

## Common Use Cases

- Formal verification of algorithms
- Mathematical theorem proving
- Type-level programming
- Programming language research
- Certified programming

## Learning Resources

### Official Documentation
- [Agda Wiki](https://wiki.portal.chalmers.se/agda/)
- [Agda Documentation](https://agda.readthedocs.io/)

### Books
- Programming Language Foundations in Agda
- Verified Functional Programming in Agda

### Tutorials
- [Learn You an Agda](http://learnyouanagda.liamoc.net/)
- [Agda Tutorial](https://people.inf.elte.hu/pgj/agda/tutorial/Index.html)

## File Extension

- `.agda` - Agda source files
- `.lagda.md` - Literate Agda with Markdown

## Community

- [Agda Mailing List](https://lists.chalmers.se/mailman/listinfo/agda)
- [Agda GitHub](https://github.com/agda/agda)
- [r/dependent_types](https://www.reddit.com/r/dependent_types/)

## Notable Features

- **Sized Types**: For termination checking
- **Coinduction**: Support for infinite data structures
- **Reflection**: Metaprogramming capabilities
- **Instance Arguments**: Type class-like functionality
- **Rewrite Rules**: Custom equality reasoning

## Links

- [Official Website](https://wiki.portal.chalmers.se/agda/)
- [Standard Library](https://agda.github.io/agda-stdlib/)
- [GitHub Repository](https://github.com/agda/agda)
