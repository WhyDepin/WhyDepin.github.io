var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/whydepin.github.io/visits");
xhr.responseType = "json";
xhr.onload = function() {
  document.querySelector('.footer-title').innerHTML = 'Total Visitor : ' + this.response.value;
}
xhr.send();
