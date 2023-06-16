// script.js
document.getElementById("createThreadForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Retrieve values from form inputs
  var threadTitle = document.getElementById("threadTitle").value;
  var threadDescription = document.getElementById("threadDescription").value;

  // Create new list item for the thread
  var threadList = document.querySelector(".thread-list");
  var newThreadItem = document.createElement("li");
  var threadTitleHeading = document.createElement("h3");
  var threadDescriptionPara = document.createElement("p");
  threadTitleHeading.textContent = threadTitle;
  threadDescriptionPara.textContent = threadDescription;
  newThreadItem.appendChild(threadTitleHeading);
  newThreadItem.appendChild(threadDescriptionPara);
  threadList.appendChild(newThreadItem);

  // Clear form inputs
  document.getElementById("threadTitle").value = "";
  document.getElementById("threadDescription").value = "";

  // Display success message
  showMessage("Thread created successfully!");
});

function showMessage(message) {
  var messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  setTimeout(function () {
    messageElement.remove();
  }, 2000);
}
