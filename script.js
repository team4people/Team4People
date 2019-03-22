const modal = document.querySelector('#my-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');
const createEvent = document.getElementById('create');
const events = [];
/*
events.push(new createNewObject(
  , "description of event",
))


function createNewObject(title, description){
  this.title = title;
  this.description = description;
  return this;
}
console.log(events[0]);
*/



function showModal(){
  document.getElementById('eventModal').setAttribute('aria-hidden', 'false');
}

const admin_account = {
  username: "alejandroxsx",
  password: "test",
  points: 0
}
const business_account = {
  username: "geekwise",
  password: "test"

}


function createElements () {

  //Creating New ELements
  var newElContainer = document.createElement('div');
  var newElBody = document.createElement('div');
  var newElHeader = document.createElement('h5');
  var newElText = document.createElement('p');
  var newELButton = document.createElement('button');

  //Retrieves Text within the elements

  var eventDescription = document.getElementById('eventDescriptor').value;
  var eventTitle = document.getElementById('eventTitler').value;

  //Assigns text new elements
  newElHeader.innerText = eventTitle;
  newElText.innerText = eventDescription;

  //Assign all the bootstrap classes to the ELements

  newElContainer.classList.add('media');
  newElBody.classList.add('media-body');
  newELButton.classList.add('btn');

  //Append Elements Together

  document.getElementById('mainEvent').appendChild(newElContainer);
  newElContainer.appendChild(newElBody);
  newElBody.appendChild(newElHeader);
  newElBody.appendChild(newElText);
  newELBody.appendChild(newELButton);


  document.getElementById('eventDescriptor').value = "";
  document.getElementById('eventTitler').value = "";





  console.log('created new div');
}
