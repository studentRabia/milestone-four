var isImageVisible = true; // Track if the image is visible
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Retrieve input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePictureInput = document.getElementById('profilepicture');
    // Handle image file
    var profileImageURL = "";
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profileImageURL, name, email, phone, education, experience, skills);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(profileImageURL, name, email, phone, education, experience, skills);
    }
});
// Function to display resume
function displayResume(image, name, email, phone, education, experience, skills) {
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = ""; // Clear previous resume
    // Create the HTML for the resume
    var resumeHTML = "\n        <div style=\"text-align:center;\">\n            ".concat(isImageVisible && image ? "<img src=\"".concat(image, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%;\"/>") : "", "\n            <h2><b>Eidtable Resume</b>").concat(name, "</h2>\n            <p><strong>Name:</strong><span contenteditable=\"true\">").concat(name, "</span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        </div>\n    ");
    // Update the resume display area
    resumeDisplay.innerHTML = resumeHTML;
}
// Toggle button functionality
document.getElementById('toggle-picture').addEventListener('click', function () {
    isImageVisible = !isImageVisible; // Toggle the visibility state
    var profilePictureInput = document.getElementById('profilepicture');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle image file
    var profileImageURL = "";
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profileImageURL, name, email, phone, education, experience, skills);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(profileImageURL, name, email, phone, education, experience, skills);
    }
});
