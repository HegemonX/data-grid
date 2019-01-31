export const parse = form => {
  try {
    const { formElems } = form;
    const data = {
      job: formElems.job.value,
      status: formElems.status.value,
      full_name: formElems.fullName.value
    };
    return data;
  } catch (error) {
    console.log("Error parsing data", error);
    return null;
  }
};
