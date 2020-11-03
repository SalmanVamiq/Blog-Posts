const formValidator = (form) => {
  let hasError = false;
  const newForm = form.map((formItem) => {
    if (formItem.isrequired && formItem.value.trim() === "") {
      hasError = true;
      return Object.assign(formItem, {
        error: true,
        errortext: "This field cannot be left blank.",
      });
    }
    return formItem;
  });
  return [hasError, newForm];
};
export default formValidator;
