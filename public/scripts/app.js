// append each post to tweets-container
function renderTweets(tweets) {
  for(let post of tweets) {
    let returnedTweet = createTweetElement(post);
    $('#tweets-container').prepend(returnedTweet);    
  }
}

// create HTML for new tweet element 
function createTweetElement(tweet) {

  // assign post information to variables
  let userName = tweet.user.name;
  let avatar = tweet.user.avatars.small;
  let content = tweet.content.text;
  let handle = tweet.user.handle;
  let timeStamp = getTime(Date.now() - tweet.created_at);
 
  // create all tags to be appended and assign the values where needed
  let $article = $('<article>').addClass('tweet');
  let $header = $('<header>').addClass('flex');
  let $divflex = $('<div>').addClass('flex');
  let $img = $('<img>').addClass('avatar').attr('src',avatar);
  let $user = $('<h2>').addClass('user-name').text(userName);
  let $handle = $('<span>').addClass('handle').text(handle);
  let $content = $('<div>').addClass('content');
  let $footer = $('<footer>');
  let $time = $('<span>').addClass('time-stamp').text(timeStamp);
  let $social = $('<div>').addClass('social');

  let $flag = $('<img>').attr('id', 'flag').attr('src', '/images/flag.png');
  let $like = $('<img>').attr('id', 'like').attr('src', '/images/like.png');
  let $retweet = $('<img>').attr('id', 'retweet').attr('src', '/images/retweet.png');

  // append all tags in reverse order
  // (starting with furthest nested tags)
  $divflex
    .append($img)
    .append($user);

  $social
    .append($flag)
    .append($like)
    .append($retweet);

  $header
    .append($divflex)
    .append($handle);

  $content 
    .append('<p>').text(content);
  
  $footer
    .append($time)
    .append($social);

  $article
    .append($header)
    .append($content)
    .append($footer);
  
  return $article; 
  
}

// cerate timestamp with result of current date
// minus tweet submission date
function getTime (num) {
  let days = num / 86400000;
  let hours = num / 3600000;
  let minutes = num / 60000;

  if (days > 1.5) {
    return `~${Math.round(days)} days ago`;
  } else if (days < 1.5 && days > 1) {
    return `~${Math.round(days)} day ago`;
  } else if (hours > 1.5) {
    return `~${Math.round(hours)} hours ago`;
  } else if (hours < 1.5 && hours > 1) {
    return `~${Math.round(hours)} hour ago`;
  } else if (minutes > 1.5) {
    return `~${Math.round(minutes)} minutes ago`;
  } else if (minutes < 1.5 && minutes > 1) {
    return `~${Math.round(minutes)} minute ago`;
  } else {
    return '< 1 minute ago';
  }
}

// function calls with AJAX after document is loaded
$(document).ready(function() {

  // toggle 'new-tweet' show/hide
  $('#compose-button').on('click', function () {
    $('.new-tweet').slideToggle(500);
    $('.new-tweet textarea').focus();
  });

  $('#validation1').hide();
  $('#validation2').hide();

  // form submission for new tweet
  $('#submit-new').on('submit', function (event) {
    event.preventDefault(); 
    let textArea = $(this).find('textarea');

    if (textArea.val() === '' || textArea.val() === null) {     
      $('#validation1').slideToggle(200);     
      setTimeout(function(){
        $('#validation1').slideToggle(300);
      }, 2000);      
      return;
    } else if (textArea.val().length > 140) {
      $('#validation2').slideToggle(200);     
      setTimeout(function(){
        $('#validation2').slideToggle(300);
      }, 2000);
      return;
    }
    let serialForm = $(this).serialize();
  
    $.ajax({ 
      method: 'POST',
      url: '/tweets/',
      data: serialForm
    })
      .then(function () {
        $('#submit-new textarea').val('');
        $('.counter').text('140').css('color','black');
        loadTweets();
      });
  });

  // fetch tweets from database after submission of new tweet
  const loadTweets = function(){

    $.ajax({
      method: 'GET',
      url: '/tweets/'
    })
      .then(function (data) {
        renderTweets(data);
      });
  };
  
  loadTweets();

});

