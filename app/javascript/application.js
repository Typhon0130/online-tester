import "@hotwired/turbo-rails"
import jquery from "jquery";

window.jQuery = jquery;
window.$ = jquery;

$(function() {
  console.log("hello world")
})