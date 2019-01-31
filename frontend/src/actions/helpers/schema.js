import { schema } from "normalizr";

export const person = new schema.Entity("people");
export const people = [person];
// export const results = { results: people };
