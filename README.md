# README
This is a JavaScript, HTML, CSS application that allows users to view and vote on images of cats, as well as submit comments on those images. The application is built on a Node.js server and utilizes the Cat API (https://thecatapi.com/) to fetch images of cats.

## **Functionality**
- The application creates a main content container and a left-column container on the page.
- The left-column container includes an upvote and downvote button, as well as a counter to keep track of the total number of votes on the current image.
- The main content container includes a button to fetch a new image, and a section for users to submit comments on the current image.
- The comments section includes a prompt for users to input their comment, as well as a button to submit the comment. Once submitted, the comment will appear in a list of comments on the current image.
- The application uses the Cat API to fetch new images of cats when the "New Cat" button is clicked.
- The server is built on Node.js and serves the application's HTML, CSS, and JavaScript files to the browser.
## **How to use**
- To view a new image, click the "New Cat" button in the main content container.
- To vote on the current image, click the upvote or downvote button in the left-column container.
- To submit a comment on the current image, type your comment in the input field in the comments section and click the "Submit" button.
## **How to run**
- Clone the repository and run the command npm install in the root directory to install the dependencies.
- Start the server by running the command node app.js in the root directory.
- Open your browser and navigate to http://localhost:5000 to view the application.
## **Technologies Used**
- JavaScript
- HTML
- CSS
- Node.js
- The Cat API
