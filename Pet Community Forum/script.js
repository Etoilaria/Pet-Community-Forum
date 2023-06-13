// Example data for threads (replace with your own logic)
const threadsData = [
    { title: 'Thread 1', content: 'This is the first thread.' },
    { title: 'Thread 2', content: 'This is the second thread.' },
    { title: 'Thread 3', content: 'This is the third thread.' },
  ];
  
  // Function to create a new thread element
  function createThreadElement(thread) {
    const threadElement = document.createElement('div');
    threadElement.classList.add('thread');
    threadElement.innerHTML = `
      <h3>${thread.title}</h3>
      <p>${thread.content}</p>
    `;
    return threadElement;
  }
  
  // Function to render threads
  function renderThreads() {
    const threadsContainer = document.getElementById('threads');
    threadsContainer.innerHTML = '';
  
    threadsData.forEach(thread => {
      const threadElement = createThreadElement(thread);
      threadsContainer.appendChild(threadElement);
    });
  }
  
  //
  