export const fields = {
  fullName: "Full Name",
  job: "Job",
  status: "Status",
  salary: "Salary",
  birthDate: "Birth Date",
  joinedJob: "Joined Job"
};

const toCamelCase = raw => {
  const arr = raw.split("_");
  const casedArr = [...arr.slice(0, 1)];
  arr
    .slice(1)
    .forEach(el => casedArr.push(el.slice(0, 1).toUpperCase() + el.slice(1)));
  return casedArr.join("");
};

export const filters = {
  job: "setJob",
  status: "setStatus"
};
