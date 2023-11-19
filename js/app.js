// Variables

const firstName = document.getElementById('firstName');
const childCheckbox = document.getElementById('childCheckbox');
const wheelchairSelect = document.getElementById('wheelchairSelect');
const pickupDatetime = document.getElementById('pickupDatetime');
const dropoffDatetime = document.getElementById('dropoffDatetime');
const contactMethod = document.getElementsByName('contactMethod');
const msgDiv = document.getElementById('msg');
const statusElement = document.getElementById('status');
const selector = document.getElementById('wheelchairtype-menu');
const resultElement = document.getElementById('reservationComfirmation');
const selectedValue = selector.value;


// Reservation processing and comfirmation

function test(){
    msgDiv.innerText = `Thanks for your reservation, ${firstNameValue}! Your ${childCheckbox} ${wheelchairSelect}. Your pickup time is scheduled for ${pickupDatetimeValue}. Your dropoff time is scheduled for ${dropoffDatetimeValue}. If /you need to change your reservation at any time, please contact us as soon as possible. A email will be sent to you with your reservation comfirmation along with more imformation. Any futher contact information will be sent to you via ${perferredContactMethod}.`;
};

// Kid or adult boolean checkbox

function checkboxStatus(){
    if (childCheckbox.checked===true) {
        return "child";
    }
    else{
        return "adult";
    }
};

// Wheelchair switch dropdown
function wheelchairDropdown(){
    switch (selector.value) {
        case 'standard-push':
            resultElement.textContent = 'Standard Push';
            break;
        case 'light-weight-manual':
            resultElement.textContent = 'Light weight Manual';
            break;
        case 'stroller':
            resultElement.textContent = 'Stroller';
            break;
        case 'all-terrain-power':
            resultElement.textContent = 'All Terrain Power';
            break;
        case 'light-weight-power':
            resultElement.textContent = 'Light Weight Power';
            break;
    };
};

// Contact radio buttons

function perferredContactMethod(){
    for (var i = 0; i < contactMethod.length; i++) {
        if (contactMethod[i].checked) {
            alert(contactMethod[i].value);
            return;
        }
    }
};

// Call onclick function

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", test);
});