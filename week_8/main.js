
/**
 * the tweet counter should decrease 
 * I should be able to send a tweet
 */
var tweetInput;
var tweetLimit = 10;
var tweets = [];



function main() {
    tweetInput =  document.getElementById('tweetInput');
    tweetInput.addEventListener('input', handleChange);
    document.addEventListener('keydown', handleKeyDown);

}

function handleKeyDown(e) {
    // "Enter"
    var tweetOutput = "";
    if (e.code === "Enter") {
        // only tweet if text is within length
        if (tweetInput.value.length <= tweetLimit) {
            tweets.push(tweetInput.value);
            tweetInput.value = "";
            for (var i = 0; i < tweets.length; i++) {
                tweetOutput += tweets[i] + " ";
            }
            
            document.getElementById('tweetOutput').innerHTML =  tweetOutput;

        }
        
       
    }
    
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

