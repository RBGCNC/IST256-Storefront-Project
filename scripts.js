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

        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;

        if (!email || !name || !age || !address) {
            alert("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (isNaN(age) || age <= 0) {
            alert("Please enter a valid age.");
            return;
        }

        var formData = {
            email: email,
            name: name,
            phone: document.getElementById("phone").value,
            age: age,
            address: address
        };

        displayMailingLabel(formData);
    });

    function displayMailingLabel(formData) {
        var mailingLabel = document.getElementById("mailingLabel");
        mailingLabel.innerHTML = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "N/A"}</p>
            <p><strong>Age:</strong> ${formData.age}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
        `;

        // Show the modal
        $('#myModal').modal('show');

        // Clear the form fields after successful submission
        document.getElementById("shopperForm").reset();
    }
});
