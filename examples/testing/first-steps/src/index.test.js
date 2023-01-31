// Orientadas al código
// TDD
// BDD

const { sum, multiply, subs, person, map} = require(".")

describe("sum", () => {
  
  it("should add two numbers correctly" , () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
    expect(sum(20, 100)).toBe(120)
    expect(sum(12341235, 21341234)).toBe(33682469)
    expect(sum(-1, 2)).toMatch(/numeros invalidos/)
  })
})


describe("multiply", () => {

  it("should multiply two numbers", () => {
    const result = multiply(2, 2)
    expect(result).toBe(4)
  })

  it("should multiply 3 and 5 correctly", () => {
    expect(multiply(3, 5)).toBe(15)
  })
})

describe("subs", () => {
  it("should substract two numbers correctly", () => {
    //const result = subs(3, 2)
    expect(subs(3, 2)).toBe(1)
  })
})

describe("person", () => {
  it("should create a person with name jhon and age 33", () => {
    const jhon = person("Jhon", 33)

    expect(jhon).toMatchObject({ name: "Jhon", age: 33 })
    expect(jhon.name).toMatch(/jhon/i)
    expect(jhon.age).toBe(33)
  })

  it("should be able to greet", () => {
    const jhon = person("Jhon", 33)

    expect(jhon.greet()).toMatch(/Hola soy Jhon/)
  })
})

describe("map", () => {
  it("should execute callback", () => {
    const handleSubmit = jest.fn()
    expect(map(handleSubmit)).toHaveBeenCalled()
  })
})