var tweetLength, tweetInput;
var tweets = [];
var maxLength = 5;
// set up a function called handleInput console.log('changed')
function handleInput() {
    tweetLength.innerHTML = tweetInput.value.length; 
}

function main() {
    tweetLength = document.getElementById('tweet-length');
    tweetInput = document.getElementById('tweet-input');
 
    tweetInput.addEventListener('input', handleInput)
    
    console.info('page has loaded');
}