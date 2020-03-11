var tweetCount, tweetInput;
// set up a function called handleInput console.log('changed')
function main() {
    tweetCount = document.getElementById('tweet-count');
    tweetInput = document.getElementById('tweet-input');
 
    tweetInput.addEventListener('input', handleInput)
    
    console.info('page has loaded');
}