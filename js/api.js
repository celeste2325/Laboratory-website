
export const getInsurances = async () => {
  try {
    const data = await fetch("https://back-js-curse.onrender.com/patientInsurances");
    const insurances = await data.json();
    return insurances;
  } catch (error) {
    console.log(error);
  }
};

export const getTests = async () => {
  try {
    const data = await fetch("https://back-js-curse.onrender.com/patientTests");
    const tests = await data.json();
    return tests;
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = async () => {
  try {
    const data = await fetch("https://back-js-curse.onrender.com/patientLocations");
    const locations = await data.json();
    return locations;
  } catch (error) {
    console.log(error);
  }
};
