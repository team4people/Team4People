const createEvent = document.getElementById('create');
const events = [];
// Function That Returns The Values To Push Into New Object

function createNewObject(title, description, id){
  this.title = title;
  this.description = description;
  this.id = id;
  return this;
}
// Generates 8 Character Short ID

var ID_LENGTH = 8;
var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function idGenerator() {
  var rtn = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
}
return rtn;
}


function registeredList(eventTitle,eventDescription){

  var modalEventTitle = document.createElement('h6');
  var modalEventDescription = document.createElement('p');

  modalEventTitle.innerText = eventTitle;
  modalEventDescription.innerText = eventDescription;

  document.getElementById('registerModalBody').appendChild(modalEventTitle);
  document.getElementById('registerModalBody').appendChild(modalEventDescription);

}


function readInput (){
  var eventDescription = document.getElementById('eventDescriptor').value;
  var eventTitle = document.getElementById('eventTitler').value;
  var id = idGenerator();

  pushElementInfo(eventDescription,eventTitle,id);
}
var 
function pushElementInfo(eventTitle,eventDescription,id){
  events.push(new createNewObject(
    eventTitle, eventDescription, id,
  ))
}
function addClass(newElContainer,newElBody,newElButton){

  newElContainer.classList.add('media');
  newElBody.classList.add('media-body');
  newElButton.classList.add('btn');
  newElButton.classList.add('btn-primary');

}

// Main Function That Adds Events Onto Main Feed

function createElements () {

  var newElContainer = document.createElement('div');
  var newElBody = document.createElement('div');
  var newElHeader = document.createElement('h5');
  var newElText = document.createElement('p');
  var newElButton = document.createElement('button');

  readInput();

  //Assigns text new elements
  newElHeader.innerText = eventTitle;
  newElText.innerText = eventDescription;

  registeredList(newElHeader.innerText,newElText.innerText);

  //Assign all the bootstrap classes to the Elements

  addClass(newElContainer,newElBody,newElButton);



  //Append Elements Together

  document.getElementById('mainEvent').appendChild(newElContainer);
  newElContainer.appendChild(newElBody);
  newElBody.appendChild(newElHeader);
  newElBody.appendChild(newElText);
  newElBody.appendChild(newElButton);

  // Calls Function That Pushes Input Into A New Object
  events.push(new createNewObject(
    eventTitle, eventDescription,newElButton.id,
  ))

  // Listener that adds the event to the profile object

  newElButton.addEventListener('click', function(){

    admin_account.registeredEvents.push(new createNewObject(
      eventTitle,eventDescription,newElButton.id,
    ));
      console.log(admin_account.registeredEvents[0]);
      console.log(admin_account.registeredEvents[1]);

  });

  //Resets input values to have nothing in them

  document.getElementById('eventDescriptor').value = "";
  document.getElementById('eventTitler').value = "";

}
