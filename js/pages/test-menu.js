import { getTests } from "../api.js";

/* laboratory-test-options */
/* test-menu */

const testsList = document.getElementById("test-list");
const tests = await getTests();

tests.forEach((test) => {
  const li = document.createElement("li");
  li.textContent = test.name;
  li.classList.add("list-group-item");
  testsList.appendChild(li);
});

/* /test-menu */
/* /laboratory-test-options */
