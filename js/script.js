const createEvent = document.getElementById('create');
const events = [];



// Function That Returns The Values To Push Into New Object

function createNewObject(title, description, id){
  this.title = title;
  this.description = description;
  this.id =id;
  return this;
}
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
  var newElButton = document.createElement('button');

  //Gives Button A Unique ID
  newElButton.id = idGenerator();
  console.log(newElButton.id);

  //Retrieves Text within the elements

  var eventDescription = document.getElementById('eventDescriptor').value;
  var eventTitle = document.getElementById('eventTitler').value;

  //Assigns text new elements
  newElHeader.innerText = eventTitle;
  newElText.innerText = eventDescription;

  //Assign all the bootstrap classes to the Elements

  newElContainer.classList.add('media');
  newElBody.classList.add('media-body');
  newElButton.classList.add('btn');
  newElButton.classList.add('btn-primary');

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
    checksInput(eventTitle, eventDescription);
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
