
// Variables

const firstName = document.getElementById('firstName');
const childCheckbox = document.getElementById('childCheckbox');
const wheelchairSelect = document.getElementById('wheelchairSelect');
const pickupDatetime = document.getElementById('pickupDatetime');
const dropoffDatetime = document.getElementById('dropoffDatetime');
const perferredContactMethod = document.getElementById('perferredContactMethod');

// Reservation processing and comfirmation
// function reservation(){
//     childCheckbox();
// 	wheelchairSelect()
// };

// How you might get the date-time

function reservation(){
	
    msgDiv.innerText = `Thanks for your reservation, ${firstName.value}! Your ${childCheckbox()} ${wheelchairSelect()}. Your pickup time is scheduled for ${pickupDatetime()}. Your dropoff time is scheduled for ${dropoffDatetime()}. If /you need to change your reservation at any time, please contact us as soon as possible. A email will be sent to you with your reservation comfirmation along with more imformation. Any futher contact information will be sent to you via ${perferredContactMethod()}`;
};

// Kid or adult boolean checkbox

// Kid or adult boolean checkbox
function childCheckbox() {
	if (childCheckbox.checked===true) {
		return "Child";
	}
	else {
		return "Adult";
	}
}

// Wheelchair switch dropdown
function wheelchairSelect(){
    const selector = wheelchairSelect.value;
    
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

document.getElementById("submit__btn").addEventListener("click", reservation); 