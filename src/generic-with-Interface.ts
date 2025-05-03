{
  // ✅ Generics with Interface in TypeScript

  // The IDeveloper interface is generic.
  // It accepts two type parameters:
  // - T: The type of the smartWatch (required)
  // - X: The type of the bike (optional, defaults to null)
  interface IDeveloper<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  // Define a specific smartwatch type (HP Watch)
  interface IHpWatch {
    brand: string;
    model: string;
    display: string;
  }

  // Create developer using HP watch and no bike (default X = null)
  const developer1: IDeveloper<IHpWatch> = {
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

  // Define another smartwatch type (Apple Watch)
  interface IAppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  // Define a bike interface
  interface IBike {
    brand: string;
    EmgineCapecity: string;
  }

  // Create developer using Apple Watch and Yamaha bike
  const developer2: IDeveloper<IAppleWatch, IBike> = {
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
