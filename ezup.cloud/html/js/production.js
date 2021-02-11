//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);

  for (var key in response) {
    for (var i = 0; i < response[key].length; i++) {
      var titles = response[key][i].title.rendered;
      var descs = response[key][i].Description;
      var badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML =
        '<h1>' + titles + '</h1>'
        + '<h2>' + descs + '</h1>';
      document.getElementById(key).appendChild(badge);
    }
  }
};

request.send();

//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207&filter[orderby]=date&order=asc'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  //console.log(parsedData);

  for (var item in parsedData) {
    for (var i = 0; i < item.length; i++) {
      var title = parsedData[item].title.rendered;
      var content = parsedData[item].content.rendered;

      //var postTitle = document.createElement('h3');
      //var postContent = document.createElement('p');
      //postTitle.innerHTML = title;
      //postContent.innerHTML = content;
      //document.body.appendChild(postTitle);
      // document.body.appendChild(postContent);
      var post = document.createElement('div');
      post.className = 'main';
      post.innerHTML = '<div class="container">' + '<div class="row">' + '<div class="col-md-12">' + '<div id="posts">' + '<h3>' + title + '</h3>' + '<p>' + content + '</p></div></div></div></div>';
      document.body.appendChild(post);
    }
  }
};

request.send();
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);

  for (var key in response) {
    for (var i = 0; i < response[key].length; i++) {
      var titles = response[key][i].title.rendered;
      var descs = response[key][i].Description;
      var badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML =
        '<h1>' + titles + '</h1>'
        + '<h2>' + descs + '</h1>';
      document.getElementById(key).appendChild(badge);
    }
  }
};

request.send();

//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207&filter[orderby]=date&order=asc'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  //console.log(parsedData);

  for (var item in parsedData) {
    for (var i = 0; i < item.length; i++) {
      var title = parsedData[item].title.rendered;
      var content = parsedData[item].content.rendered;

      //var postTitle = document.createElement('h3');
      //var postContent = document.createElement('p');
      //postTitle.innerHTML = title;
      //postContent.innerHTML = content;
      //document.body.appendChild(postTitle);
      // document.body.appendChild(postContent);
      var post = document.createElement('div');
      post.className = 'main';
      post.innerHTML = '<div class="container">' + '<div class="row">' + '<div class="col-md-12">' + '<div id="posts">' + '<h3>' + title + '</h3>' + '<p>' + content + '</p></div></div></div></div>';
      document.body.appendChild(post);
    }
  }
};

request.send();
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);

  for (var key in response) {
    for (var i = 0; i < response[key].length; i++) {
      var titles = response[key][i].title.rendered;
      var descs = response[key][i].Description;
      var badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML =
        '<h1>' + titles + '</h1>'
        + '<h2>' + descs + '</h1>';
      document.getElementById(key).appendChild(badge);
    }
  }
};

request.send();

//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207&filter[orderby]=date&order=asc'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  //console.log(parsedData);

  for (var item in parsedData) {
    for (var i = 0; i < item.length; i++) {
      var title = parsedData[item].title.rendered;
      var content = parsedData[item].content.rendered;

      //var postTitle = document.createElement('h3');
      //var postContent = document.createElement('p');
      //postTitle.innerHTML = title;
      //postContent.innerHTML = content;
      //document.body.appendChild(postTitle);
      // document.body.appendChild(postContent);
      var post = document.createElement('div');
      post.className = 'main';
      post.innerHTML = '<div class="container">' + '<div class="row">' + '<div class="col-md-12">' + '<div id="posts">' + '<h3>' + title + '</h3>' + '<p>' + content + '</p></div></div></div></div>';
      document.body.appendChild(post);
    }
  }
};

request.send();
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);

  for (var key in response) {
    for (var i = 0; i < response[key].length; i++) {
      var titles = response[key][i].title.rendered;
      var descs = response[key][i].Description;
      var badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML =
        '<h1>' + titles + '</h1>'
        + '<h2>' + descs + '</h1>';
      document.getElementById(key).appendChild(badge);
    }
  }
};

request.send();

//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207&filter[orderby]=date&order=asc'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  //console.log(parsedData);

  for (var item in parsedData) {
    for (var i = 0; i < item.length; i++) {
      var title = parsedData[item].title.rendered;
      var content = parsedData[item].content.rendered;

      //var postTitle = document.createElement('h3');
      //var postContent = document.createElement('p');
      //postTitle.innerHTML = title;
      //postContent.innerHTML = content;
      //document.body.appendChild(postTitle);
      // document.body.appendChild(postContent);
      var post = document.createElement('div');
      post.className = 'main';
      post.innerHTML = '<div class="container">' + '<div class="row">' + '<div class="col-md-12">' + '<div id="posts">' + '<h3>' + title + '</h3>' + '<p>' + content + '</p></div></div></div></div>';
      document.body.appendChild(post);
    }
  }
};

request.send();
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();
//END API
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();
//END API
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();
//END API
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
//API JS
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();
//END API
// Countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// End Countdown JS
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();

// JavaScript Document
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();

// JavaScript Document
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();

// JavaScript Document
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?include[]=247'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);
  var title = parsedData[0].title.rendered;
  var content = parsedData[0].content.rendered;

  var postTitle = document.createElement('h3');
  var postContent = document.createElement('p');

  postTitle.innerHTML = title;
  postContent.innerHTML = content;
  document.body.appendChild(postTitle);
  document.body.appendChild(postContent);
}

request.send();

// JavaScript Document
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24) / 7);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
    weeks
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const weeksSpan = clock.querySelector('.weeks');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    weeksSpan.innerHTML = t.weeks;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2021-03-01'; //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);
var request=new XMLHttpRequest;function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}request.open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){const n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24),s=Math.floor(n/864e5),i=Math.floor(n/864e5/7);return{total:n,days:s,hours:r,minutes:o,seconds:t,weeks:i}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){const e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),t=Math.floor(n/1e3%60),o=Math.floor(n/1e3/60%60),e=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:e,minutes:o,seconds:t,weeks:Math.floor(n/864e5/7)}}function initializeClock(e,n){const t=document.getElementById(e),o=t.querySelector(".days"),r=t.querySelector(".hours"),s=t.querySelector(".minutes"),i=t.querySelector(".seconds"),l=t.querySelector(".weeks");function c(){var e=getTimeRemaining(n);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),s.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2),l.innerHTML=e.weeks,e.total<=0&&clearInterval(a)}c();const a=setInterval(c,1e3)}initializeClock("clockdiv",deadline),(request=new XMLHttpRequest).open("GET","https://ezup.design/wp-json/wp/v2/posts?include[]=247"),request.onload=function(){var e=request.response,n=JSON.parse(e);console.log(n);var t=n[0].title.rendered,o=n[0].content.rendered,e=document.createElement("h3"),n=document.createElement("p");e.innerHTML=t,n.innerHTML=o,document.body.appendChild(e),document.body.appendChild(n)},request.send();const deadline="2021-03-01";initializeClock("clockdiv",deadline);