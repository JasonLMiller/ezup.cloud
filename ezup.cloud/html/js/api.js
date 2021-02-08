//API JS 
var request = new XMLHttpRequest();

request.open('GET', 'https://ezup.design/wp-json/wp/v2/posts?exclude[]=207'); // using parameter to get a post by ID

request.onload = function () {
  var response = request.response
  var parsedData = JSON.parse(response); //string to an object
  console.log(parsedData);


  for (item in parsedData) {

    var title = parsedData[item].title.rendered;
    var content = parsedData[item].content.rendered;

    var postTitle = document.createElement('h3');
    var postContent = document.createElement('p');

    postTitle.innerHTML = title;
    postContent.innerHTML = content;
    document.body.appendChild(postTitle);
    document.body.appendChild(postContent);
  }


};

request.send();