/* to receive and display service locations in ascending alphabetical order*/

//data mock
const services = [
  {
    id: 1,
    name: "Laboratory Tests",
    locations: ["Boedo", "Villa urquiza", "Balvanera"],
  },
  {
    id: 2,
    name: "Veterinary Tests",
    locations: ["Munro", "Lujan", "Palermo"],
  },
];
//simulate a database call to get services data
const getServices = () => {
  //obtained by data base
  return services;
};

// sort service locations in ascending alphabetical order
const sortLocations = (services) => {
  for (let service of services) {
    service.locations.sort((a, b) => a.localeCompare(b));
  }
};
// Display sorted service locations
const displayLocationsOrdered = (services) => {
  for (let service of services) {
    alert(
      `Service name: ${service.name}. Locations sorted: ${service.locations}`,
    );
  }
};

const servicesByDataBase = getServices();
sortLocations(servicesByDataBase);
displayLocationsOrdered(servicesByDataBase);

/* /to receive and display service locations in ascending alphabetical order*/

/* Receive and send form data to the database */

let contactData = {};

//receive data from contact form
const enterData = () => {
  const name = prompt("Enter your name");
  const email = prompt("Enter your email");
  const comment = prompt("Please provide a detailed question or comment");
  return { name, email, comment };
};

//send data to the data base
const saveData = (name, email, comment) => {
  // all fields are required
  if (name && email && comment) {
    //this data will be sent to the data base
    contactData = {
      name: name,
      email: email,
      comment: comment,
    };

    return contactData;
  } else {
    alert("Error! All fields are required");
  }
};
const { name, email, comment } = enterData();
saveData(name, email, comment);
/* /to receive and send form data to the data base */
