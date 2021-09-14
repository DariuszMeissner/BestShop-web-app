import ListenerEvents from './EventsListener';
import ValidateForm from './ContactValidation';

// calling calculator
const calc = new ListenerEvents();
calc.events();

// calling validation of contact from
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

const initEvents = new ValidateForm(nameInput,emailInput);
initEvents.events();