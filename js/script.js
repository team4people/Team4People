const createEvent = document.getElementById('create');
const events = [];
<<<<<<< HEAD
/*
events.push(new createNewObject(
  , "description of event",
))


function createNewObject(title, description){
=======
// Function That Returns The Values To Push Into New Object

function createNewObject(title, description, id){
>>>>>>> 1ac2f0624a9356ae0a7e894407d00b1d2231afd8
  this.title = title;
  this.description = description;
  this.id =id;
  return this;
}
<<<<<<< HEAD
console.log(events[0]);
*/
=======
function checksInput (title,description){
  if (title == null && description == null ||title == null|| description == null){
    alert('empty');
  }
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
>>>>>>> 1ac2f0624a9356ae0a7e894407d00b1d2231afd8

  modalEventTitle.innerText = eventTitle;
  modalEventDescription.innerText = eventDescription;

  document.getElementById('registerModalBody').appendChild(modalEventTitle);
  document.getElementById('registerModalBody').appendChild(modalEventDescription);

}

// Fake Accounts For Testing
const admin_account = {
  username: "alejandroxsx",
  password: "test",
  points: 0,
  registeredEvents: [],
}
const business_account = {
  username: "geekwise",
  password: "test"
}


// Main Function That Adds Events Onto Main Feed

function createElements () {

  //Creating New ELements
  var newElContainer = document.createElement('div');
  var newElBody = document.createElement('div');
  var newElHeader = document.createElement('h5');
  var newElText = document.createElement('p');
<<<<<<< HEAD
  var newELButton = document.createElement('button');
=======
  var newElButton = document.createElement('button');

  //Gives Button A Unique ID
  newElButton.id = idGenerator();
  console.log(newElButton.id);
>>>>>>> 1ac2f0624a9356ae0a7e894407d00b1d2231afd8

  //Retrieves Text within the elements

  var eventDescription = document.getElementById('eventDescriptor').value;
  var eventTitle = document.getElementById('eventTitler').value;

  //Assigns text new elements
  newElHeader.innerText = eventTitle;
  newElText.innerText = eventDescription;

  registeredList(newElHeader.innerText,newElText.innerText);

  //Assign all the bootstrap classes to the Elements

  newElContainer.classList.add('media');
  newElBody.classList.add('media-body');
<<<<<<< HEAD
  newELButton.classList.add('btn');
=======
  newElButton.classList.add('btn');
  newElButton.classList.add('btn-primary');
>>>>>>> 1ac2f0624a9356ae0a7e894407d00b1d2231afd8

  //Append Elements Together

  document.getElementById('mainEvent').appendChild(newElContainer);
  newElContainer.appendChild(newElBody);
  newElBody.appendChild(newElHeader);
  newElBody.appendChild(newElText);
<<<<<<< HEAD
  newELBody.appendChild(newELButton);

=======
  newElBody.appendChild(newElButton);
>>>>>>> 1ac2f0624a9356ae0a7e894407d00b1d2231afd8

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
