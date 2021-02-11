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