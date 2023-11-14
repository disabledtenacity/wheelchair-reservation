// Variables

let firstName = document.getElementById('firstName');
let childCheckbox = document.getElementById('childCheckbox');
let wheelchairSelect = document.getElementById('wheelchairSelect');
let pickupDatetime = document.getElementById('pickupDatetime');
let dropoffDatetime = document.getElementById('dropoffDatetime');
let perferredContactMethod = document.getElementById('perferredContactMethod');

// Reservation processing and comfirmation

function reservation(){
    var msgDiv = document.getElementById("msg");
    msgDiv.innerText = `Thanks for your reservation, ${firstName}! Your ${childCheckbox} ${wheelchairSelect}. Your pickup time is scheduled for ${pickupDatetime}. Your dropoff time is scheduled for ${dropoffDatetime}. If /you need to change your reservation at any time, please contact us as soon as possible. A email will be sent to you with your reservation comfirmation along with more imformation. Any futher contact information will be sent to you via ${perferredContactMethod}`;
};

// Kid or adult boolean checkbox

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('child-checkbox');
    const statusElement = document.getElementById('status');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            statusElement.checked = 'Child';
        }
        else {
            statusElement.textContent = 'Adult';
        }
    });
});

// Wheelchair switch dropdown
function wheelchairSelect(){
    const selector = document.getElementById('wheelchairtype-menu');
    const resultElement = document.getElementById('reservationComfirmation');
    const selectedValue = selector.value;
    
    switch (selector.checked) {
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

// Calendar controls

// Contact radio buttons

    function perferredContactMethod(){
        var contactMethod = document.getElementsByName;

        for (var i = 0; i < contactMethod.length; i++) {
            if (contactMethod[i].checked) {
                alert( + contactMethod[i].value);
                return;
            }
        }
    };

// Call onclick function

document.getElementById("submit__btn"),addEventListener("click", reservation); 