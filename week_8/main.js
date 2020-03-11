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


function handleKeyDown(e) {
  
if (e.code === "Enter") {

    if ( tweetInput.value.length < maxLength && tweetInput.value.length > 0 ) {
        tweets.push(tweetInput.value);
        var  tweetOutput ="";
        for (var i=0; i < tweets.length; i++) {
            tweetOutput +=  '<p>' + tweets[i] + '</p>'
        }

        document.getElementById('tweets').innerHTML = tweetOutput;
    }
   
      // add tweet to tweets
      // clear the tweet input 
      // render tweets to screen 
  }
}


function main() {
    document.addEventListener('keydown', handleKeyDown);
    tweetLength = document.getElementById('tweet-length');
    tweetInput = document.getElementById('tweet-input');
 
    tweetInput.addEventListener('input', handleInput)
    
    console.info('page has loaded');
}