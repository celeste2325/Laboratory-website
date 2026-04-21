import { getLocations } from "../api.js";

const containerLocations = document.getElementById("locations");
const locations = await getLocations();
locations.forEach((location) => {
  const column = document.createElement("div");
  column.classList.add("col-12", "col-md-5");

  const card = document.createElement("div");
  card.classList.add("card", "h-100", "shadow-sm");

  column.appendChild(card);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");

  card.appendChild(cardBody);

  const name = document.createElement("h2");
  name.textContent = location.name;
  name.classList.add("card-title");

  const address = document.createElement("p");
  address.textContent = location.address;
  address.classList.add("card-text", "mb-1");

  const city = document.createElement("p");
  city.textContent = location.city;
  city.classList.add("card-text", "mb-3");

  const hours = document.createElement("p");
  const weekdays = document.createElement("strong");

  hours.classList.add("card-text");
  weekdays.textContent = "Mon - Fri:";
  hours.appendChild(weekdays);
  hours.append(location.hours.mondayToFriday);

  const saturdayHour = document.createElement("p");
  saturdayHour.classList.add("card-text");

  const saturdayStrong = document.createElement("strong");
  saturdayStrong.textContent = "Sat:";
  saturdayHour.appendChild(saturdayStrong);
  saturdayHour.append(location.hours.saturday);

  cardBody.appendChild(name);
  cardBody.appendChild(address);
  cardBody.appendChild(city);
  cardBody.appendChild(hours);
  cardBody.appendChild(saturdayHour);

  containerLocations.appendChild(column);
});
