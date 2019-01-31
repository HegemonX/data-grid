export const parseFromState = (personRaw, selectFields) => {
  const processSelectField = (fieldName, value) => {
    if (value === null) return "?";
    return selectFields[fieldName].find(type => type.id === value).title;
  };
  const processDate = raw => {
    if (raw === null) return "?";
    return new Date(raw).toDateString();
  };
  const processSalary = raw => {
    if (raw === null) return "?";
    const salary = Math.round((parseFloat(raw) / 1000) * 100) / 100;
    return `${salary}k RUB`;
  };
  const processName = raw => (!raw ? "?" : raw);

  const processAge = raw => {
    const parsed = new Date(raw);
    const now = new Date();
    let age = now.getFullYear() - parsed.getFullYear();
    if (
      now.getMonth() > parsed.getMonth() ||
      (now.getMonth() === parsed.getMonth() && now.getDate() > parsed.getDate())
    )
      return age++;
    return age;
  };

  return {
    id: personRaw.id,
    fullName: processName(personRaw.fullName),
    age: processAge(personRaw.birthDate),
    joinedJob: processDate(personRaw.joinedJob),
    salary: processSalary(personRaw.salary),
    birthDate: processDate(personRaw.birthDate),
    job: processSelectField("job", personRaw.job),
    status: processSelectField("status", personRaw.status)
  };
};
