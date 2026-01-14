fn main() {
    println!("Hello, World!");
    // ===== Variable Bindings =====
    println!("\n ==== Data Types ====");
    let x = 5;
    println!("Immutable x: {}", x); // x cannot be changed

    let mut y = 10;
    println!("Mutable y (initial): {}", y); // y can be changed
    y = 15; // This is allowed
    println!("Mutable y (changed): {}", y);
    
    // Shadowing - creating a new variable with the same name
    let z = 20;
    println!("z (first): {}", z);
    let z = z + 5; // This creates a new variable
    println!("z (shadowed): {}", z);
    let z = "now I'm a string"; // Can even change type
    println!("z (shadowed again): {}", z);

    // Integers (signed)
    let i8_num: i8 = -128;                          // 8-bit signed
    let i16_num: i16 = -32_768;                     // 16-bit signed
    let i32_num: i32 = -2_147_483_648;              // 32-bit signed (default)
    let i64_num: i64 = -9_223_372_036_854_775_808;  // 64-bit signed
    let i128_num: i128 = 170_141_183_460_469_231_731_687_303_715_884_105_727; // 128-bit signed
    println!("Signed integers: i8={}, i16={}, i32={}, i64={}, i128={}", i8_num, i16_num, i32_num, i64_num, i128_num);
}

    
 