
function TweetForm() {
  const text='what are you humming about'
  return (
   <main class="container">

      <section class="error-container"><i class="fas fa-exclamation-triangle"></i>
      <h4></h4> <i class="fas fa-exclamation-triangle"></i></section>
    <section class="newtweet">
        <form method="post" action="/tweets" class="newtweet__form" >
          <textarea class="form__textarea" name="text" placeholder={text}></textarea>
          <input type="submit" value="Tweet" class="form__input" />
          <span class="form__counter">140</span>
        </form>
        </section>
    </main>
  );
}
export default TweetForm;