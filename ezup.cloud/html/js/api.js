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