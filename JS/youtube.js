/* https://developers.google.com/youtube/iframe_api_reference  */
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
function onYouTubeIframeAPIReady() {
player2 = new YT.Player('player1', {
    height: 'auto',
    width: 'auto',
    videoId: 'ohFNXh4UZY8',
    playerVars: {
        'playsinline': 1
    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
    }), 
  player1 = new YT.Player('player2', {
    height: 'auto',
    width: 'auto',
    videoId: 'ORYe6DrQCs8',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }
  ),
  player2 = new YT.Player('player3', {
    height: 'auto',
    width: 'auto',
    videoId: 'bB0wSBXOalQ',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }),
  player2 = new YT.Player('player4', {
    height: 'auto',
    width: 'auto',
    videoId: 'LtXOAKOyrJg',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }),
  player2 = new YT.Player('player5', {
    height: 'auto',
    width: 'auto',
    videoId: 'cQaqpRuTRO4',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  
  
  
  
  
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player1.stopVideo();
  player2.stopVideo();
  player3.stopVideo();
  player4.stopVideo();
  player5.stopVideo();

}


