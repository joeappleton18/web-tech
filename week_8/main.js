var tweetLength, tweetInput;
var tweets = [];
var maxLength = 5;
// set up a function called handleInput console.log('changed')
function handleInput() {
    var length = tweetInput.value.length
    tweetLength.innerHTML = length; 
    if (length > maxLength) {
        tweetLength.style.color = "red"      
    } else {
        tweetLength.style.color = ""      
    }

    //   tweetLength.style.color = "red" if tweetInput.value.length > maxLength
}

function main() {
    tweetLength = document.getElementById('tweet-length');
    tweetInput = document.getElementById('tweet-input');
 
    tweetInput.addEventListener('input', handleInput)
    
    console.info('page has loaded');
}