function changeLanguage() {
    const languageSelect = document.getElementById('language-select');
    const selectedLanguage = languageSelect.value;
    let backgroundColorClass = 'white';

    switch (selectedLanguage) {
        case 'hi':
            backgroundColorClass = 'blue';
            break;
        case 'zh':
            backgroundColorClass = 'green';
            break;
        case 'fr':
            backgroundColorClass = 'yellow';
            break;
    }

    document.body.className = backgroundColorClass;

    if (selectedLanguage === 'fr') {
        verifyEmailForFrench();
    } else {
        verifyMobileForOtherLanguages();
    }
}

function verifyEmailForFrench() {
    const email = prompt("Please enter your email for verification:");
    // Send email verification OTP logic here
    alert("OTP has been sent to your email.");
    const otp = prompt("Please enter the OTP:");
    // Verify OTP logic here
    alert("Email verified successfully!");
}

function verifyMobileForOtherLanguages() {
    const mobile = prompt("Please enter your mobile number for verification:");
    // Send mobile verification OTP logic here
    alert("OTP has been sent to your mobile number.");
    const otp = prompt("Please enter the OTP:");
    // Verify OTP logic here
    alert("Mobile number verified successfully!");
}

//working on otp generation



export default changeLanguage;

