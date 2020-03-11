
/**
 * the tweet counter should decrease 
 * I should be able to send a tweet
 */
var tweetInput;
var tweetLimit = 10;

function main() {
    tweetInput =  document.getElementById('tweetInput');
    
    tweetInput.addEventListener('input', handleChange);
}

function handleChange(e) {
    // githubcom/joeappleton18/web-dev 
    var tweetLength = tweetInput.value.length;
    var letterCount =   document.getElementById('letter-count');
   
    if(tweetLength >= tweetLimit) {
        letterCount.style.color = "red";
    } else {
        letterCount.style.color = "";
    }
    
    letterCount.innerHTML =  tweetLength;
                   
}

