document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("contact-submit");
  if (btn) {
    btn.addEventListener("click", function() {
      alert("Ne cliquez pas !!");
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    });
  }
});
