
/**
 * the tweet counter should decrease 
 * I should be able to send a tweet
 */
var tweetInput;

function main() {
    tweetInput =  document.getElementById('tweetInput');
    tweetInput.addEventListener('input', handleChange);
}

function handleChange(e) {
    debugger;
    document.getElementById('letter-count')
        .innerHTML =   tweetInput.value.length;
                   
}

