import ListenerEvents from './EventsListener';
import validateListenerEvents from './ContactValidation';

// calling calculator
const calc = new ListenerEvents();
calc.events();

// calling validation of contact from
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

const validate = new validateListenerEvents(nameInput,emailInput);
validate.events();