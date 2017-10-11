
var ScriptTweetDeck_Clear = document.createElement('script');
ScriptTweetDeck_Clear.src = chrome.extension.getURL('TweetDeck_Clear.js');
ScriptTweetDeck_Clear.type = "text/javascript";


ScriptTweetDeck_Clear.onload = function() {
    ScriptTweetDeck_Clear.parentNode.removeChild(ScriptTweetDeck_Clear);
};

document.body.appendChild(ScriptTweetDeck_Clear);


var s = document.createElement('script');
s.src = chrome.extension.getURL('280Characters.js');
s.onload = function() {
    s.parentNode.removeChild(s);
};
(document.head || document.documentElement).appendChild(s);