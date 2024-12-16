function validateForm() {
    
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";

        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        let valid = true;

    
        if (name.length < 3) {
            document.getElementById("nameError").textContent = "Name must be at least 3 characters";
            valid = false;
        }

    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address";
            valid = false;
        }

        if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
            valid = false;
        }

        if (valid) {
            document.getElementById("output").textContent = "Form submitted successfully!";
            document.getElementById("output").style.color = "green";
        } else {
            document.getElementById("output").textContent = "Please correct the errors above";
            document.getElementById("output").style.color = "red";
        }
    }