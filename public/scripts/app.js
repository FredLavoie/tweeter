// Fake data taken from tweets.json
const data = [
  {
    'user': {
      'name': 'Newton',
      'avatars': {
        'small':   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        'regular': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        'large':   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
      },
      'handle': '@SirIsaac'
    },
    'content': {
      'text': 'If I have seen further it is by standing on the shoulders of giants'
    },
    'created_at': 1560363000000
  },
  {
    'user': {
      'name': 'Descartes',
      'avatars': {
        'small':   'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        'regular': 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        'large':   'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png'
      },
      'handle': '@rd' },
    'content': {
      'text': 'Je pense , donc je suis'
    },
    'created_at': 1560300000000
  },
  {
    'user': {
      'name': 'Johann von Goethe',
      'avatars': {
        'small':   'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        'regular': 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        'large':   'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png'
      },
      'handle': '@johann49'
    },
    'content': {
      'text': 'Es ist nichts schrecklicher als eine tätige Unwissenheit.'
    },
    'created_at': 1560110000000
  }
];

// append each post to tweets-container
function renderTweets(tweets) {
  for(let post of tweets) {
    let returnedTweet = createTweetElement(post);
    $('#tweets-container').append(returnedTweet);    
  }
}

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
  let $hr = $('<hr>');
  let $time = $('<span>').addClass('time-stamp').text(timeStamp);

  // append all tags in reverse order (starting with furthest nested tags)
  $divflex
    .append($img)
    .append($user);

  $header
    .append($divflex)
    .append($handle);

  $content 
    .append('<p>').text(content);
  
  $footer
    .append($hr)
    .append($time);

  $article
    .append($header)
    .append($content)
    .append($footer);
  
  return $article; 
  
}

// helper function to create time since posted stamp on each post
function getTime (num) {
  let days = num / 86400000;
  let hours = num / 3600000;
  let minutes = num / 60000;

  if (days > 1.5) {
    return `~${Math.round(days)} days ago`;
  } else if (days < 1.5 && days > 1) {
    return `~${Math.round(days)} day ago`;
  } else if (hours > 1.5) {
    return `~${Math.round(hours)} hour ago`;
  } else if (hours < 1.5 && hours > 1) {
    return `~${Math.round(hours)} hours ago`;
  } else if (minutes > 1.5) {
    return `~${Math.round(minutes)} minutes ago`;
  } else if (minutes < 1.5 && minutes > 1) {
    return `~${Math.round(minutes)} minute ago`;
  } else {
    return '< 1 minute ago';
  }
}


// function call to initiate post creation from database
$(document).ready(function() {
  renderTweets(data);
});

