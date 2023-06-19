import { Address, Person } from "../prototype-shallow-copy/prototype-shallow";
import {
  Address as AddressDeep,
  Person as PersonDeep,
} from "../prototype-deep-copy/prototype-deep-copy";
describe("prototype test", () => {
  test("shallow copy", () => {
    const address = new Address("av president", 4909);
    const person = new Person("Gabriel", 24);
    person.addAddress(address);
    expect(person).toBeInstanceOf(Person);
    expect(person.name).toBe("Gabriel");
    expect(person.age).toBe(24);
    expect(person.addresses[0]).toBe(address);

    const person2 = person.clone();
    person2.name = "Dale";
    expect(person2.name).toBe("Dale");

    person.addresses[0].street = "av dale";
    expect(person2.addresses[0].street).toBe("av dale");
  });

  test("deep copy", () => {
    const address = new AddressDeep("av president", 4909);
    const person = new PersonDeep("Gabriel", 24);
    person.addAddress(address);
    expect(person).toBeInstanceOf(PersonDeep);
    expect(person.name).toBe("Gabriel");
    expect(person.age).toBe(24);
    expect(person.addresses[0]).toBe(address);

    const person2 = person.clone();
    person2.name = "Dale";
    expect(person2.name).toBe("Dale");

    person.addresses[0].street = "av dale";
    expect(person2.addresses[0].street).not.toBe("av dale");
  });
});
