// Reservation processing and comfirmation

function makeReservation(){

    // Contact radio buttons

// Calendar controls

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
    function comfirmReservation(){
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
};