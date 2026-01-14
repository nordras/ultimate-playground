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

    /**
     * Integers unsigned and signed, with different bit sizes
     * Unsined are always positive numbers and include zero, both use binary representation,
     * but unsigned can represent a larger positive range.
     * source: https://doc.rust-lang.org/book/ch03-02-data-types.html
     */
    // Integers signeds
    let i8_num: i8 = -128;                          // 8-bit signed
    let i16_num: i16 = -32_768;                     // 16-bit signed
    let i32_num: i32 = -2_147_483_648;              // 32-bit signed (default)
    let i64_num: i64 = -9_223_372_036_854_775_808;  // 64-bit signed
    let i128_num: i128 = 170_141_183_460_469_231_731_687_303_715_884_105_727; // 128-bit signed
    println!("Signed integers: i8={}, i16={}, i32={}, i64={}, i128={}", i8_num, i16_num, i32_num, i64_num, i128_num);
    
    // Integers Unsigneds
    let u8_num: u8 = 255;                           // 8-bit unsigned
    let u16_num: u16 = 65_535;                      // 16-bit unsigned
    let u32_num: u32 = 4_294_967_295;               // 32-bit unsigned
    let u64_num: u64 = 18_446_744_073_709_551_615;  // 64-bit unsigned
    let u128_num: u128 = 340_282_366_920_938_463_463_374_607_431_768_211_455; // 128-bit unsigned
    println!("Unsigned integers: u8={}, u16={}, u32={}, u64={}, u128={}", u8_num, u16_num, u32_num, u64_num, u128_num);

    // Architecture-dependent integers - Depends on 32 or 64 bit system
    let isize_num: isize = -1000; 
    let usize_num: usize = 1000;  
    println!("Architecture-dependent: isize={}, usize={}", isize_num, usize_num);
}

    
 