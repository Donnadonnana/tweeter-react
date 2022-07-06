import Tweet from './Tweet.js'
function TweetList() {
   const tweet1 = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
   }
  const tweet2 = {
    avatar: "https://i.imgur.com/nlhLi3I.png",
    firstName: "rd",
    lastName: "Descartes",
    handle: "@SirIsaac",
    body: "Je pense , donc je suis",
    age: "10 days ago"
  }
  return (<main className="container">
     <section class="tweets">
      {Tweet(tweet1)}
     {Tweet(tweet2)}
    </section></main>
  );
}
export default TweetList;