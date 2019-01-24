import React, { Component } from "react";
import Person from "../components/Person";

const processPerson = (personRaw, selectFields) => {
  const processSelectField = (fieldName, id) => {
    return selectFields[fieldName].find(type => type.id === id).title;
  };
  const processDate = raw => {
    return new Date(raw).toDateString();
  };
  const processSalary = raw => {
    const salary = Math.round((parseFloat(raw) / 1000) * 100) / 100;
    return `${salary}k RUB`;
  };
  const processName = raw => raw;

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
  // console.log(selectFields, personRaw);
  const parsedSelectFields = Object.keys(selectFields).reduce(
    (obj, fieldName) => {
      const id = personRaw[fieldName];
      obj[fieldName] = processSelectField(fieldName, id);
      return obj;
    },
    {}
  );

  return {
    name: processName(personRaw.full_name),
    joinedJob: processDate(personRaw.joined_job),
    salary: processSalary(personRaw.salary),
    age: processAge(personRaw.birth_date),
    ...parsedSelectFields
  };
};

export default class PersonC extends Component {
  render() {
    const { personRaw, selectFields } = this.props;
    const info = processPerson(personRaw, selectFields);
    return <Person {...info} />;
  }
}
