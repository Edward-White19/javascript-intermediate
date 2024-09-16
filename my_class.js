////////////////////////////////////////////////////////////////////////////////////////////////
//// Address                                                                                ////
////////////////////////////////////////////////////////////////////////////////////////////////

class Address {
  constructor(house, street, city, state, country, postcode) {
    this.house = house;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postcode = postcode;
  }

  toString() {
    return `${this.house} ${this.street}, ${this.city} ${this.state}, ${this.country}, ${this.postcode}`;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
//// Person                                                                                 ////
////////////////////////////////////////////////////////////////////////////////////////////////

class Person {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }

  toString() {
    return `PERSON: ${this.name}
        Age: ${this.age}
        Phone: ${this.phone}
        Address: ${this.address.toString()}`;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
//// Script                                                                                 ////
////////////////////////////////////////////////////////////////////////////////////////////////

let examplePerson = new Person(
  "Jen Smith",
  25,
  "0403-02010",
  new Address(17, "Location Avenue", "Sydney", "NSW", "Australia", 2070)
);

console.log(examplePerson.toString());
