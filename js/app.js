// Variables
const firstName = document.getElementById('firstName');
const checkboxStatus = document.getElementById('childCheckbox');
const wheelchairDropdown = document.getElementById('wheelchairSelect');
const pickupDatetime = document.getElementById('pickupDatetime');
const dropoffDatetime = document.getElementById('dropoffDatetime'); 
const contactMethodInputs = document.getElementsByName('contactMethod');
const msgDiv = document.getElementById('msg');
const statusElement = document.getElementById('status');
const selector = document.getElementById('wheelchairtype-menu');
const resultElement = document.getElementById('reservationComfirmation');
const selectedValue = selector.value;

// Reservation processing and confirmation
function reservationConfirmation() {
    msgDiv.innerText = `Thanks for your reservation, ${firstName.value}! Your ${getCheckboxStatus()} ${wheelchairDropdownValue()}. Your pickup time is scheduled for ${pickupDatetime.value}. Your dropoff time is scheduled for ${dropoffDatetime.value}. If you need to change your reservation at any time, please contact us as soon as possible. An email will be sent to you with your reservation confirmation along with more information. Any further contact information will be sent to you via ${getContactMethod()}.`;
}

// Kid or adult boolean checkbox
function getCheckboxStatus() {
    return checkboxStatus.checked ? "child" : "adult";
}

// Wheelchair switch dropdown
function wheelchairDropdownValue() {
    switch (selector.value) {
        case 'standard-push':
            return 'Standard Push';
        case 'light-weight-manual':
            return 'Light weight Manual';
        case 'stroller':
            return 'Stroller';
        case 'all-terrain-power':
            return 'All Terrain Power';
        case 'light-weight-power':
            return 'Light Weight Power';
        default:
            return 'Unknown Wheelchair Type';
    }
}

// Contact radio buttons
function getContactMethod() {
    for (var i = 0; i < contactMethodInputs.length; i++) {
        if (contactMethodInputs[i].checked) {
            return contactMethodInputs[i].value;
        }
    }
}

// Call onclick function
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", reservationConfirmation);
});
