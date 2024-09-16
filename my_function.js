////////////////////////////////////////////////////////////////////////////////////////////////
//// Address                                                                                ////
////////////////////////////////////////////////////////////////////////////////////////////////

function Address(house, street, city, state, country, postcode) {
  this.house = house;
  this.street = street;
  this.city = city;
  this.state = state;
  this.country = country;
  this.postcode = postcode;
};

Address.prototype.toString = function () {
  return `${this.house} ${this.street}, ${this.city} ${this.state}, ${this.country}, ${this.postcode}`;
};

////////////////////////////////////////////////////////////////////////////////////////////////
//// Person                                                                                 ////
////////////////////////////////////////////////////////////////////////////////////////////////

function Person(name, age, phone, address) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.address = address;
};

Person.prototype.toString = function () {
  return `PERSON: ${this.name}
  Age: ${this.age}
  Phone: ${this.phone}
  Address: ${this.address.toString()}`;
};

////////////////////////////////////////////////////////////////////////////////////////////////
//// Script                                                                                 ////
////////////////////////////////////////////////////////////////////////////////////////////////

let examplePerson = new Person(
  "Jen Smith",
  25,
  "0403-02010",
  new Address(17, "Location Avenue", "Sydney", "NSW", "Australia", 2070)
);

//console.log(examplePerson.toString());



let bAddress = new Address(45, "Block Place", "Sydney", "NSW", "Australia", 2050);

let bPeople = [
    new Person("Bob", 30, "0404-11111", bAddress),
    new Person("Bill", 20, "0401-34232", bAddress),
    new Person("Ben", 26, "0400-99875", bAddress)
];

let bStrings = bPeople.map(
    (person) => { return '\n' + person.toString(); }
);

// console.log(`People: [${bStrings}
// ]`);

let bStringHtml = bPeople.map(
    (person) => { return `
    <div class="person_entry">
        <div><h3>${person.name}, ${person.age}</h3></div>
        <ul>
            <div>${person.phone}</div>
            <div>${person.address.toString()}</div>
        </ul>
    </div>` }
);

bStringHtml.forEach(element => {
    document.getElementById("script_test").innerHTML += element;
});
