-- Hello World Agda
module HelloWorld where

data ℕ : Set where
  zero : ℕ
  suc  : ℕ → ℕ

next : ℕ → ℕ
next n = suc n

one : ℕ
one = suc zero

two : ℕ
two = suc one
_+_ : ℕ → ℕ → ℕ
zero  + n = n
suc m + n = suc (m + n)

four : ℕ
four = two + two