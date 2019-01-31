import * as parse from "./parse";
import { normalize } from "normalizr";
import * as schema from "./schema";

export const processPeopleToState = serverResponse => {
  const { results } = serverResponse;
  const normalized = normalize(results, schema.people);
  const parsedPeople = parse.peopleToState(normalized.entities.people);
  const parsed = JSON.parse(JSON.stringify(normalized));
  parsed.entities.people = {
    ...parsedPeople
  };
  return parsed;
};

export const processPersonToState = serverResponse => {
  const normalized = normalize(serverResponse, schema.person);
  const parsedPerson = parse.peopleToState(normalized.entities.people);
  const parsed = JSON.parse(JSON.stringify(normalized));
  parsed.entities.people = {
    ...parsedPerson
  };
  return parsed;
};

export const processPersonToServer = data => {
  const parsed = parse.personToServer(data);
  return parsed;
};
