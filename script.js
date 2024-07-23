// Function to validate the form on submission
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Call individual validation functions
    validateFullName();
    validateEmail();
    validatePhoneNumber();
    validatePassword();
    validateConfirmPassword();

    // Check if any errors were found
    const errorElements = document.querySelectorAll('.is-invalid');
    if (errorElements.length === 0) {
        // If no errors, submit the form (normally you would submit the form here)
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset(); // Reset form after successful submission
    }
    // Function to validate Full Name
    function validateFullName() {
        const fullNameInput = document.getElementById('fullName');
        const fullNameValue = fullNameInput.value.trim();

        // Reset previous error message
        clearErrorMessage(fullNameInput);

        // Validate Full Name
        if (fullNameValue.length < 5) {
            displayErrorMessage(fullNameInput, 'Full Name must be at least 5 characters long.');
        }
    }

    // Function to validate Email
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();

        // Reset previous error message
        clearErrorMessage(emailInput);

        // Validate Email
        if (!isValidEmail(emailValue)) {
            displayErrorMessage(emailInput, 'Enter a valid email address.');
        }
    }

    // Function to validate Phone Number
    function validatePhoneNumber() {
        const phoneNumberInput = document.getElementById('phoneNumber');
        const phoneNumberValue = phoneNumberInput.value.trim();

        // Reset previous error message
        clearErrorMessage(phoneNumberInput);

        // Validate Phone Number
        if (phoneNumberValue.length !== 10 || phoneNumberValue === '1234567890' || isNaN(phoneNumberValue)) {
            displayErrorMessage(phoneNumberInput, 'Enter a valid 10-digit phone number.');
        }
    }

    // Function to validate Password
    function validatePassword() {
        const passwordInput = document.getElementById('password');
        const passwordValue = passwordInput.value;

        // Reset previous error message
        clearErrorMessage(passwordInput);

        // Fetch Full Name value for comparison
        const fullNameValue = document.getElementById('fullName').value.trim();

        // Validate Password
        if (passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue.toLowerCase() === fullNameValue.toLowerCase()) {
            displayErrorMessage(passwordInput, 'Password must be at least 8 characters long and should not be "password" or your name.');
        }
    }

    // Function to validate Confirm Password
    function validateConfirmPassword() {
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const confirmPasswordValue = confirmPasswordInput.value;
        const passwordValue = document.getElementById('password').value;

        // Reset previous error message
        clearErrorMessage(confirmPasswordInput);

        // Validate Confirm Password
        if (passwordValue !== confirmPasswordValue) {
            displayErrorMessage(confirmPasswordInput, 'Passwords do not match.');
        }
    }

    // Helper function to display error message
    function displayErrorMessage(inputElement, message) {
        const errorMessages = document.getElementById('errorMessages');
        errorMessages.innerHTML += `<p>${message}</p>`;
        inputElement.classList.add('is-invalid');
    }

    // Helper function to clear error message and validation styling
    function clearErrorMessage(inputElement) {
        // const errorMessages = document.getElementById('errorMessages');
        // errorMessages.innerHTML = '';
        inputElement.classList.remove('is-invalid');
    }

    // Helper function to check email validity
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


}

  