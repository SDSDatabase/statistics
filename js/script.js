// Get the form fields container
const formFields = document.querySelector('.form-fields');

// Counter for input ids
let inputIdCounter = 0;

// Add event listener to "Add Field" button
document.querySelector('#add-field').addEventListener('click', () => {
  // Get the input type and label text
  const inputType = document.querySelector('#input-type').value;
  const labelText = document.querySelector('#form-label').value;

  // Generate new input id
  const inputId = `input-${inputIdCounter}`;
  inputIdCounter++;

  // Create new label element
  const label = document.createElement('label');
  label.textContent = labelText;
  label.setAttribute('for', inputId);
  
  // Create new input element
  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  input.setAttribute('id', inputId);
  input.setAttribute('name', inputId);
  
  // Create new "Delete" button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    // Remove label, input, and delete button
    label.remove();
    input.remove();
    deleteButton.remove();
  });
  
  // Create new div for label and input
  const field = document.createElement('div');
  field.appendChild(label);
  field.appendChild(input);
  field.appendChild(deleteButton);
  
  // Add new div to form fields container
  formFields.appendChild(field);
});

// Add event listener to "Finalize Form" button
document.querySelector('#finalize-form').addEventListener('click', () => {
  // Hide the form and show the "View Form" link
  document.querySelector('form').classList.add('hidden');
  document.querySelector('#view-form').classList.remove('hidden');
});
