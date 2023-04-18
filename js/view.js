const urlParams = new URLSearchParams(window.location.search);
const formId = urlParams.get('formId');
const formFieldsDiv = document.getElementsByClassName('form-container')[0];
const formLabelView = document.getElementById('form-label-view');
const formView = document.getElementById('form-view');

if (formId) {
  fetch(`/form/${formId}`)
    .then(response => response.json())
    .then(data => {
      formLabelView.textContent = data.label;

      data.fields.forEach(field => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'form-row';

        const fieldLabel = document.createElement('label');
        fieldLabel.textContent = field.label;

        const inputField = document.createElement('input');
        inputField.type = field.type;

        fieldDiv.appendChild(fieldLabel);
        fieldDiv.appendChild(inputField);

        formView.appendChild(fieldDiv);
      });
    })
    .catch(error => console.error(error));
} else {
  formFieldsDiv.innerHTML = '<p>No form found.</p>';
}
