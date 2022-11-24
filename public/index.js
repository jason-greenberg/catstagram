import { createMainContent } from './main.js';
import { fetchImage } from "./main.js";

const initializePage = () => {
  // Create main
  const main = document.createElement('main');
  document.body.appendChild(main);
  // Create left column
  const leftColumn = document.createElement('section');
  leftColumn.className = 'left-column';
  main.appendChild(leftColumn);
  // Create container
  const container = document.createElement("section");
  container.className = "container";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  main.appendChild(container);
  // Create comment section
  const comments = document.createElement('section');
  comments.className = 'comments'
  document.body.appendChild(comments);
};

const createUpVoteDownVote = () => {
  // create upvote and downvote buttons
  const counter = document.createElement('div');
  counter.setAttribute('class', 'counter');
  counter.innerText = '0'
  counter.style.fontWeight = 'bolder'

  const upVoteButton = document.createElement('button');
  upVoteButton.setAttribute('id', 'upvote');
  upVoteButton.innerText = '⬆';

  const downVoteButton = document.createElement('button');
  downVoteButton.setAttribute('id', 'downvote');
  downVoteButton.innerText = '⬇';
  // add elements to containers

  const counterAndVoteContainer = document.createElement('section');
  counterAndVoteContainer.appendChild(upVoteButton);
  counterAndVoteContainer.appendChild(counter);
  counterAndVoteContainer.appendChild(downVoteButton);
  counterAndVoteContainer.setAttribute('class', 'counter-vote-container');
  const leftColumn = document.querySelector('.left-column');
  leftColumn.appendChild(counterAndVoteContainer);
  /* change inner text of counter, helper func, 
  default to increment, if decrement true: decrement */
  const changeCounter = (bool = true) => {
    let currentCount = parseInt(counter.innerText);
    if (bool) currentCount += 1;
    else currentCount -= 1;
    counter.innerText = currentCount;
    return currentCount;
  }
  // increment counter on upvote click
  upVoteButton.addEventListener('click', event => {
    changeCounter();
  });
  // decrement counter on downvote click
  downVoteButton.addEventListener('click', event => {
    changeCounter(false);
  });
}

const getNewCatButton = () => {
    // Create button that gets a new cat
    const catButton = document.createElement('button');
    catButton.innerText = 'New Cat';
    catButton.id = 'new-cat-button'
    const container = document.querySelector('.container');
    container.appendChild(catButton)
    // reset counter to 0, helper func
    const counter = document.querySelector('.counter');
    const resetCounter = () => counter.innerText = '0';
    // fetch new image on button click
    catButton.addEventListener('click', async event => {
      // fetch new img
      await fetchImage();
      // reset counter
      await setTimeout(() => {
          resetCounter();
      }, 250);
      // reset comments section
      const comments = document.querySelector('.comments');
      const commentsList = document.querySelector('ul');

      commentsList.remove();
      console.log('removed');
      const newCommentSection = document.createElement('ul');
      comments.appendChild(newCommentSection);
      console.log('added');
    });
  }

const createCommentSection = () => {
  // Create section to submit a new comment
  const newCommentSection = document.createElement('section');
  newCommentSection.className = 'new-comment'
  const commentPrompt = document.createElement('p');
  commentPrompt.innerText = 'Comment:'
  commentPrompt.id = 'prompt'
  const input = document.createElement('input');
  input.placeholder = 'Add a comment...'
  input.id = 'input'
  const submitButton = document.createElement('button');
  submitButton.innerText = 'Submit';
  submitButton.id = 'submit'

  newCommentSection.appendChild(commentPrompt);
  newCommentSection.appendChild(input);
  newCommentSection.appendChild(submitButton);

  const comments = document.querySelector('.comments');
  comments.appendChild(newCommentSection);
  // Create section to display submitted comments
  const ul = document.createElement('ul');
  comments.appendChild(ul);
  // Handle new comment submission
  submitButton.addEventListener('click', event => {
    // set new li equal to user input and append to ul
    const newLi = document.createElement('li');
    newLi.innerText = input.value;;
    ul.appendChild(newLi);
    input.value = '';
  });
}


window.onload = async () => {
  initializePage();
  createUpVoteDownVote();
  createMainContent();
  getNewCatButton();
  createCommentSection();
};
