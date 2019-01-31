export const peopleToState = data => {
  return Object.keys(data).reduce((res, id) => {
    const { full_name, joined_job, birth_date, ...rest } = data[id];
    res[id] = {
      fullName: full_name,
      joinedJob: joined_job,
      birthDate: birth_date,
      ...rest
    };
    return res;
  }, {});
};

export const peopleToServer = data => {
  return Object.keys(data).reduce((res, id) => {
    const { fullName, birthDate, joinedJob, ...rest } = data[id];
    res[id] = {
      full_name: fullName,
      joined_job: joinedJob,
      birth_date: birthDate,
      ...rest
    };
    return res;
  }, {});
};

export const personToServer = data => {
  const { fullName, birthDate, joinedJob, ...rest } = data;
  return {
    full_name: fullName,
    joined_job: joinedJob,
    birth_date: birthDate,
    ...rest
  };
};

// export const personToState = data => {
//   const { full_name, birth_date, joined_job, ...rest } = data;
//   return {
//     fullName: full_name,
//     birthDate: birth_date,
//     joinedJob: joined_job,
//     ...rest
//   };
// };
