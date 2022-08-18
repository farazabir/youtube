//Updates the title of a video to show either video or channel statistics
function statsTitle() {
  
  //Video info
  var videoID = '9adNUZSPRYg'; 
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  
  //Channel info (optional if you dont want to display subs, total views, number of videos)
  var channelID = 'UCA3O--Y2M97Yppi1g0LjZUg' ; 
  var part2 = 'snippet,contentDetails,statistics';
  var params2 = {'id': channelID};
  var response2 = YouTube.Channels.list(part2, params2);
  var channel = response2.items[0];

  //Video title variables
  var videoViews = video.statistics.viewCount;
  var videoLikes = video.statistics.likeCount;
  var videoDislikes = video.statistics.dislikeCount;
  var videoComments = video.statistics.commentCount;
  var channelSubs = channel.statistics.subscriberCount;
  var channelVideos = channel.statistics.videoCount;
  var channelViews = channel.statistics.viewCount;
  
  //Set Video Title incoportating "Video title variables"
  //Examples
  //var videoTitle = 'This channel has ' + channelSubs + ' subscribers, ' + channelVideos + ' videos and ' + channelViews + ' views!';
  //var videoTitle = 'This video has ' + videoViews + ' views, ' + videoLikes + ' likes, ' + videoDislikes + ' dislikes, and ' + videoComments + ' comments!';
  var videoTitle = 'Icon Hover Effect on Website Using HTML and CSS | Icons Animation on Website| This has '+ videoViews+' views';
  
  //Update youtube video
  video.snippet.title = videoTitle;
  try
  {
        YouTube.Videos.update(video, part);
  }
  catch(e){}
}
