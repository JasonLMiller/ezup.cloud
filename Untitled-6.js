window.addEventListener('load', (event) => {
  function ezuo() {
    console.log('page is fully loaded');
  }
  setTimeout(ezuo, 5000);
});
window.onload = (event) => {
  function ezuo() {
    var rcontent = document.getElementById("numberOfReviews").textContent;
    var hidecat = document.getElementsByClassName("filter-options-title")[0].textContent;
    console.log('page is fully loaded 2');
    if (rcontent == "No reviews") {
      document.getElementById("numberOfReviews").style.display = "none";
    }
    if (hidecat == "Category") {
      document.getElementsByClassName("filter-options-item")[0].style.display = "none";
    }
  }
  setTimeout(ezuo, 5000);
};
window.addEventListener('load', function () {
  console.log('All assets are loaded')
})






//require([
//  'jquery'
//], function ($) {
//	$(window).on('load', function() {
//    console.log('All assets are loaded jQ')
//});
//
