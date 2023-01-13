const getClasses = (classes) =>
  classes
    .filter((item) => item !== "")
    .join(" ")
    .trim();

export default getClasses;
