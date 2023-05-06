console.log("Hello!!");

// Basic data types string number boolean void undefined null
let namePerson: string = "Maria Giraldo";
let years: number = 12;
let statusPerson: boolean = true; // false

// Don't know data type
let data: any = undefined;
data = "string";
data = 12345;

// List - Array
const aNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];
const aNumbers2: number[] = [1, 2, 3, 4, 5, 6, 7];
const aString: string[] = ["1", "2"];
const aBool: Array<boolean> = [true, false];

// Functions
const getName: Function = (id: number): string => {
  return "nombre";
};

const newName: string = getName(12);

// Void function
const printMessage = (message: string): void => {
  console.log(message);
};

const f1 = (n1: number, n2: number) => n1 * n2;

f1(2, 2);

// ENUM
enum Color {
  "Red",
  "Green",
  "Yellow",
}
const newColor = Color.Yellow;
console.log(newColor, Color[newColor], typeof Color[newColor]);

enum BikeType {
  Electric,
  Normal,
  Old,
}

// TYPE
type RentBykeType = {
  id: number;
  owner: string;
  type: BikeType;
  type2: "Electric" | "Normal" | "Old";
  active?: boolean; // Optional
};

const rentBike: RentBykeType = {
  id: 1,
  owner: "Pepito",
  type: BikeType.Electric,
  type2: "Electric",
};

// INTERFACES
interface IPerson {
  id: number;
  name: string;
  email?: string;
  active?: boolean;
  years?: number;
  getFullName: Function; // ()=> string
  isMajor: () => boolean; // () => void
}

interface IPerson {
  parents: string[];
}

interface GPerson extends IPerson {
  gender: ".." | 124 | true;
}

const objPerson: GPerson = {
  id: 1,
  name: "maria",
  gender: 124,
  parents: ["mother", "father"],
  getFullName: function () {
    return this.name;
  },
  isMajor: function () {
    return true;
  },
};

objPerson.getFullName();

