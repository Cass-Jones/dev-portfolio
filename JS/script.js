const formSubmission = async () => {
  const endpoint =
    "https://prod-186.westus.logic.azure.com:443/workflows/6c265b50d74945e79618b3088b76345b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ekrbi6lBqRF0vT4uKFZWKt36GMqrshry79RHlQgQESE";

  const formFields = document.getElementsByClassName("formField");

  fetch(endpoint, {
    method: "POST",
    body: {},
  });
};

const validateFormFields = (formFields) => {
  const valid = [];
  const invalid = [];

  const validation = {
    valid,
    invalid,
  };

  return validation;
};
