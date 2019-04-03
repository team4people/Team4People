const createEvent = document.getElementById('create');
const events = [];
const accounts = [];
var globalLog = false;
// Function That Returns The Values To Push Into New Object
var loginButton = document.getElementById('loginTrigger');
loginButton.addEventListener('click', function (){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  login(username,password);

})
var signupButton = document.getElementById('signupTrigger');
signupButton.addEventListener('click', function (){
  var username = document.getElementById('newUsername').value;
  var password = document.getElementById('newPassword').value;

  signUp(username,password);
  password.value = "";
  username.value = "";
})


function signUp(username,password) {
  console.log(username,password);
  let canSignUp = true;
  for (i = 0; i < accounts.length; i++ ) {
    console.log(accounts[i].username);
    if (username === accounts[i].username){
      alert('Username taken');
      canSignUp = false;
    }
  }
      if(canSignUp) {
      accounts.push(createNewAccounts(username, password));
    }
}

function login(username,password){

  for (i = 0; i < accounts.length; i++ ) {

    if (username === accounts[i].username && password === accounts[i].password){
      accounts[i].loggedIn = true;
      displayProfile(accounts[i]);

    }
  }}
function displayRegisteredEvents(){
  clearText();
  for (i = 0; i < accounts.length; i++){
    if (accounts[i].loggedIn === true){
      for(j = 0; j < accounts[i].registeredEvents.length; j++) {
      appendRegisteredEvent(accounts[i].registeredEvents[j].title,
        accounts[i].registeredEvents[j].description,
        accounts[i].registeredEvents[j].id,
        accounts[i].registeredEvents[j].time,
        accounts[i].registeredEvents[j].timeEnd,
        accounts[i].registeredEvents[j].date,
      )
    }
    }
  }
}
function appendRegisteredEvent(title,description,id,time,timeEnd,date){
  var modalEventTitle = document.createElement('h6');
  var modalEventDescription = document.createElement('p');
  var modalEventTime = document.createElement('p');
  var modalEventTimeEnd = document.createElement('p');
  var modalEventDate = document.createElement('p');

  modalEventTitle.innerText = title;
  modalEventDescription.innerText = description;
  modalEventTime.innerText = time;
  modalEventTimeEnd.innerText = timeEnd;
  modalEventDate.innerText = date;


  document.getElementById('registerModalBody').appendChild(modalEventTitle);
  document.getElementById('registerModalBody').appendChild(modalEventDescription);
  document.getElementById('registerModalBody').appendChild(modalEventTime);
  document.getElementById('registerModalBody').appendChild(modalEventTimeEnd);
  document.getElementById('registerModalBody').appendChild(modalEventDate);
}


function displayProfile(accounts){
  var profileName = document.getElementById('profileName');
  profileName.innerText = accounts.username;
}

var signoutButton = document.getElementById('signout');

signoutButton.addEventListener('click', function(){
  globalLog = false;
  for (i = 0;  i < accounts.length; i ++){
    console.log(accounts[i].loggedIn)
    accounts[i].loggedIn = false;
    console.log(accounts[i].loggedIn);
  }
  clearText();
  displayProfile(accounts[0]);

})
function clearText(){
  $('#registerModalBody').empty();
}

function createNewAccounts(username, password) {
    this.username = username;
    this.password = password;

    return this;
}


function createNewObject(title, description, id,time,timeEnd,date){

  this.title = title;
  this.description = description;
  this.id =id;
  this.time = time;
  this.timeEnd = timeEnd;
  this.date;

  return this;
}

function createAccount(username, password){
  this.username,
  this.password

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



// Fake Accounts For Testing
accounts[0] = {
  username: "Profile Name",
  password: "pass",
  registeredEvents: [],
  loggedIn: false,
}
accounts[1] = {
  username: "lx",
  password: "pass",
  registeredEvents: [],
  loggedIn: false,
}
accounts[2] = {
  username: 'zach',
  password: 'passs',
  registeredEvents: [],
  loggedIn : false,
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
  var newElDate = document.createElement('p');
  var newElTime = document.createElement('p');
  var newElTimeEnd =document.createElement('p');

  //Gives Button A Unique ID
  newElButton.id = idGenerator();
  console.log(newElButton.id);

  //Retrieves Text within the elements

  var eventDescription = document.getElementById('eventDescriptor').value;
  var eventTitle = document.getElementById('eventTitler').value;
  var eventTime = document.getElementById('eventTime').value;
  var eventTimeEnd = document.getElementById('eventTimeEnd').value;
  var eventDate = document.getElementById('eventDate').value;


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
    eventTitle, eventDescription,newElButton.id,newElTime,newElTimeEnd,newElDate
  ))

  // Listener that adds the event to the profile object

    newElButton.addEventListener('click', function(){
    checkLog();

    if(globalLog) {
    for (i = 0; i < accounts.length; i ++){
      if (accounts[i].loggedIn === true) {
    accounts[i].registeredEvents.push(new createNewObject(
      eventTitle,eventDescription,newElButton.id, eventTime, eventTimeEnd,eventDate
    ));
  }
  console.log(accounts[0].registeredEvents[0]);
}
}
else {
  alert('Not logged in');
}



  });


  //Resets input values to have nothing in them

  document.getElementById('eventDescriptor').value = "";
  document.getElementById('eventTitler').value = "";

}

function checkLog (){
  for(i = 0; i< accounts.length; i++){
    if(accounts[i].loggedIn === true) {
      globalLog = true;
    }
  }
}
