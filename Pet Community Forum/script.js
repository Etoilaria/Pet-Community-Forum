window.addEventListener('DOMContentLoaded', function() {
  var threadHistory = [
    { title: 'Thread 1', content: 'Thread 1 content' },
    { title: 'Thread 2', content: 'Thread 2 content' },
    { title: 'Thread 3', content: 'Thread 3 content' }
  ];

  var threadsContainer = document.getElementById('threads');

  threadHistory.forEach(function(thread) {
    var threadElement = document.createElement('div');
    threadElement.classList.add('thread');

    var titleElement = document.createElement('h3');
    titleElement.textContent = thread.title;

    var contentElement = document.createElement('p');
    contentElement.textContent = thread.content;

    threadElement.appendChild(titleElement);
    threadElement.appendChild(contentElement);

    threadsContainer.appendChild(threadElement);
  });
});
