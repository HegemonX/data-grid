import * as fromPeople from "../people";

export const sortIds = (state, ids) => {
  let order = fromPeople.getOrder(state);
  if (!order) return ids;
  const flag = order[0] === "-";
  if (flag) order = order.slice(1);

  switch (order) {
    // like strings
    case "fullName":
      return ids.sort((id1, id2) => {
        const [person1, person2] = fromPeople.getByIds(state, [id1, id2]);
        if (person1[order] > person2[order]) return flag ? 1 : -1;
        return flag ? -1 : 1;
      });
    // like numbers
    case "job":
    case "status":
    case "salary":
      return ids.sort((id1, id2) => {
        const [person1, person2] = fromPeople.getByIds(state, [id1, id2]);
        if (+person1[order] > +person2[order]) return flag ? 1 : -1;
        return flag ? -1 : 1;
      });
    //like dates
    case "birthDate":
      return ids.sort((id1, id2) => {
        const [person1, person2] = fromPeople.getByIds(state, [id1, id2]);
        const [date1, date2] = [
          new Date(person1.birth_date),
          new Date(person2.birth_date)
        ];
        if (date1 > date2) return flag ? 1 : -1;
        return flag ? -1 : 1;
      });
    case "joinedJob":
      return ids.sort((id1, id2) => {
        const [person1, person2] = fromPeople.getByIds(state, [id1, id2]);
        const [date1, date2] = [
          new Date(person1.joined_job),
          new Date(person2.joined_job)
        ];
        if (date1 > date2) return flag ? 1 : -1;
        return flag ? -1 : 1;
      });
  }
};
