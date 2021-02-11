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
