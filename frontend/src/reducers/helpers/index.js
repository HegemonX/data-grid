import * as fromForm from "./form";
import * as fromSort from "./sort";

export const parseForm = form => fromForm.parse(form);
export const sortIds = (state, ids) => fromSort.sortIds(state, ids);
