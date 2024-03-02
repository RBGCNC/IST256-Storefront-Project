document.addEventListener("DOMContentLoaded", function() {
    var formInputs = document.querySelectorAll('.form-control');

    formInputs.forEach(function(input) {
        input.addEventListener("input", function(event) {
            var isValid = validateInput(input);
            var checkmarkIcon = input.parentElement.querySelector(".fa-check-circle");
            
            if (isValid) {
                checkmarkIcon.classList.remove("d-none");
            } else {
                checkmarkIcon.classList.add("d-none");
            }
        });
    });

    function validateInput(input) {
        var fieldValue = input.value.trim();
        var fieldType = input.getAttribute('type');

        switch (fieldType) {
            case 'email':
                return validateEmail(fieldValue);
            case 'text':
                return fieldValue.length > 0;
            case 'number':
                return fieldValue.length > 0;
            // Add more cases for other field types if needed
            default:
                return true;
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    document.getElementById("shopperForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var fname = document.getElementById("firstname").value; // Corrected ID
        var lname = document.getElementById("lastname").value; // Corrected ID
        var email = document.getElementById("email").value;
        var address1 = document.getElementById("address1").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zip = document.getElementById("zip").value;
        var age = document.getElementById("age").value;

        if (!email || !address1 || !city || !state || !zip || !age) {
            alert("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        var formData = {
            fName: fname,
            lName: lname,
            email: email,
            address1: address1,
            address2: document.getElementById("address2").value,
            city: city,
            state: state,
            zip: zip,
            age: age
        };

        displayMailingLabel(formData);
    });

    function displayMailingLabel(formData) {
        var mailingLabel = document.getElementById("mailingLabel");
        mailingLabel.innerHTML = `
            <p>${formData.email} ${formData.age}</p> <br/>
            <p>${formData.fName} ${formData.lName}</p> <!-- Corrected keys -->
            <p>${formData.address1} ${formData.address2 ? formData.address2 : ''}</p>
            <p>${formData.city}</p>
            <p>${formData.state}</p>
            <p>${formData.zip}</p> 
        `;

        // Show the modal
        $('#myModal').modal('show');

        // Clear the form fields after successful submission
        document.getElementById("shopperForm").reset();
    }
});
