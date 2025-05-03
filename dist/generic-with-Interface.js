"use strict";
{
    // Create developer using HP watch and no bike (default X = null)
    const developer1 = {
        name: "Monjur",
        computer: {
            brand: "HP",
            model: "1200",
            releasedYear: 2025,
        },
        smartWatch: {
            brand: "HP",
            model: "1200",
            display: "4K",
        },
    };
    console.log("Developer with HP Watch (no bike):", developer1);
    // Create developer using Apple Watch and Yamaha bike
    const developer2 = {
        name: "Monjur",
        computer: {
            brand: "HP",
            model: "1200",
            releasedYear: 2025,
        },
        smartWatch: {
            brand: "Apple",
            model: "8500",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            brand: "Yamaha",
            EmgineCapecity: "200cc",
        },
    };
    console.log("Developer with Apple Watch and Bike:", developer2);
}
