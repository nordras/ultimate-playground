fn main() {
    println!("Hello, World!");

    let x = 5;
    println!("Immutable x: {}", x); // x cannot be changed

    let mut y = 10;
    println!("Mutable y (initial): {}", y); // y can be changed
    y = 15; // This is allowed
    println!("Mutable y (changed): {}", y);
    
        let z = 20;
    println!("z (first): {}", z);
    let z = z + 5; // This creates a new variable
    println!("z (shadowed): {}", z);
    let z = "now I'm a string"; // Can even change type
    println!("z (shadowed again): {}", z);
}

    
    // Shadowing - creating a new variable with the same name
    let z = 20;
    println!("z (first): {}", z);
    let z = z + 5; // This creates a new variable
    println!("z (shadowed): {}", z);
    let z = "now I'm a string"; // Can even change type
    println!("z (shadowed again): {}", z);

    // ===== Data Types =====
    println!("\n--- Data Types ---");
    
    // Integers (signed)
    let i8_num: i8 = -128; // 8-bit signed
    let i16_num: i16 = -32_768; // 16-bit signed
    let i32_num: i32 = -2_147_483_648; // 32-bit signed (default)
    let i64_num: i64 = -9_223_372_036_854_775_808; // 64-bit signed
    let i128_num: i128 = 170_141_183_460_469_231_731_687_303_715_884_105_727; // 128-bit signed
    println!("Signed integers: i8={}, i16={}, i32={}, i64={}, i128={}", 
             i8_num, i16_num, i32_num, i64_num, i128_num);
    
    // Integers (unsigned)
    let u8_num: u8 = 255; // 8-bit unsigned
    let u16_num: u16 = 65_535; // 16-bit unsigned
    let u32_num: u32 = 4_294_967_295; // 32-bit unsigned
    let u64_num: u64 = 18_446_744_073_709_551_615; // 64-bit unsigned
    let u128_num: u128 = 340_282_366_920_938_463_463_374_607_431_768_211_455; // 128-bit unsigned
    println!("Unsigned integers: u8={}, u16={}, u32={}, u64={}, u128={}", 
             u8_num, u16_num, u32_num, u64_num, u128_num);
    
    // Architecture-dependent integers
    let isize_num: isize = -1000; // Pointer-sized signed integer
    let usize_num: usize = 1000; // Pointer-sized unsigned integer
    println!("Architecture-dependent: isize={}, usize={}", isize_num, usize_num);
    
    // Floats
    let f32_num: f32 = 3.14159; // 32-bit float
    let f64_num: f64 = 2.718281828459045; // 64-bit float (default)
    println!("Floats: f32={}, f64={}", f32_num, f64_num);
    
    // Booleans
    let is_rust_fun: bool = true;
    let is_learning: bool = false;
    println!("Booleans: is_rust_fun={}, is_learning={}", is_rust_fun, is_learning);
    
    // Characters (Unicode scalar values)
    let letter: char = 'A';
    let emoji: char = '🦀'; // Rust's mascot (Ferris the crab)
    let chinese: char = '中';
    let heart: char = '❤';
    println!("Characters: letter='{}', emoji='{}', chinese='{}', heart='{}'", 
             letter, emoji, chinese, heart);
    
    // Type inference
    let inferred_int = 42; // i32 by default
    let inferred_float = 3.14; // f64 by default
    println!("Type inference: int={}, float={}", inferred_int, inferred_float);
    
    // Numeric operations
    let sum = 5 + 10;
    let difference = 95.5 - 4.3;
    let product = 4 * 30;
    let quotient = 56.7 / 32.2;
    let remainder = 43 % 5;
    println!("\nNumeric operations:");
    println!("  sum: {}, difference: {}, product: {}", sum, difference, product);
    println!("  quotient: {}, remainder: {}", quotient, remainder);
    
    println!("\n=== Examples Complete! ===");