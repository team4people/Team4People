const modal = document.querySelector('#my-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');
const createEvent = document.getElementById('create');
const events = [];

const buttonTester = document.querySelector('btn');
buttonTester.addEventListener('click', console.log('test'));



function test(){
  console.log('test');
}


function createNewObject(title, description, id){
  this.title = title;
  this.description = description;
  this.id =id;
  return this;
}



function test(message){
  console.log(message);
}
var i = 1 ;

function showModal(){
  document.getElementById('eventModal').setAttribute('aria-hidden', 'false');
}

var ID_LENGTH = 8;
var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function idGenerator() {
  var rtn = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
}
return rtn;
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

  events.push(new createNewObject(
    eventTitle, eventDescription,newElButton.id,
  ))
  console.log(events[0]);
  console.log(events[1]);
  //Resets input values to have nothing in them

  document.getElementById('eventDescriptor').value = "";
  document.getElementById('eventTitler').value = "";





  console.log('created new div');
}
