export const getInsurances = async () => {
  try {
    const data = await fetch("http://localhost:3001/patientInsurances");
    const insurances = await data.json();
    return insurances;
  } catch (error) {
    console.log(error);
  }
};

export const getTests = async () => {
  try {
    const data = await fetch("http://localhost:3001/patientTests");
    const tests = await data.json();
    return tests;
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = async () => {
  try {
    const data = await fetch("http://localhost:3001/patientLocations");
    const locations = await data.json();
    return locations;
  } catch (error) {
    console.log(error);
  }
};
