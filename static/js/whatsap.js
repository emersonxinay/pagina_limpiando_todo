document.getElementById("send-whatsapp").addEventListener("click", function () {
  var message = document.getElementById("whatsapp-message").value;
  var encodedMessage = encodeURIComponent(message);
  var whatsappURL = "https://api.whatsapp.com/send?phone=+56940736538&text=" + encodedMessage;
  window.open(whatsappURL, "_blank");
});