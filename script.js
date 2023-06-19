var questionButton = $("#submit")
var questionInput = $("#question")

var positiveResponses = [
  "Absolutely 💟❣️ you got this, queen! 👑",
  "I spend a lot of time listening to the weather. It said yes.",
  "I have three letters for you: Y-E-S ‼️",
  "🆗👍🏿💯",
  "Is the sky blue? 🌀🧿",
  "I’m watching you 🧿🧿🧿 and I think you’re great.",
  "A <b>yes</b> for every hair 💁‍♀️ on your head. And if you’re 👨🏿‍🦲 also <b>yes</b>.",
  "As an AI chatball 💬 I can’t tell you what to do. So YES."
]

var negativeResponses = [
  "Sorry, but the crystal ball just can't see any good vibes for you. 😔 Outlook not so fabulous, my friend. 🚫💫",
  "Oh no, the magical forces say 'No way, Jose!' 🙅‍♂️ Better luck next time, champ. 🍀😕",
  "Yikes! The cosmic energies are shaking their heads vigorously. 🌌🙅‍♀️ Don't count on it, my dear. 🤷‍♀️",
  "The mystical realms have spoken, and they're not mincing words: 'Absolutely not!' ❌🗯️ Looks like disappointment is heading your way. 😞",
  "Oopsie-daisy! The enchanted orb is feeling grumpy today. 🌑😡 Signs point to a resounding 'No'! Better prepare for some bummer news. 😔"
]

function randResponse(responses) {
  console.log(responses)
  var randindex = Math.floor(Math.random() * responses.length)
  return responses[randindex]
}

questionButton.click(function() {
  if ($("#submit").text() == "Reset") {
    $("#ball").effect("shake")
    $("#ball").toggle("fade")
    setTimeout(
      function() {
        $("#question").toggle("fade")
      }, 800
    )
    $("#submit").text("Submit")
    $("#target").html("")
  }
  else {
    responses = []
    negativity = document.getElementById("negativity")
    if (negativity.checked == true) {
      responses = negativeResponses
    } else {
      responses = positiveResponses
    }
    $("#question").effect("shake")
    $("#question").toggle("fade")
    setTimeout(
      function() {
        $("#ball").toggle("fade")
        $("#ball").effect("shake")
      }, 800
    )
    // ANSWER FADE IN
    setTimeout(
      function() {
        if (questionInput.val() == "") {
          $("#target").toggle("fade")
          setTimeout(function() {
            if (negativity.checked == true) {
              $("#target").html("Even when you don't ask me a question, I know you're wrong. Sorry, loser. ")
            } else {
              $("#target").html("Even when you don't ask me a question, I know you're right. YES. YES. YES.")
            }
          }, 400)
          $("#target").toggle("fade")
        } else if (questionInput.val().toLowerCase() == "hello") {
          $("#target").toggle("fade")
          setTimeout(function() {
            $("#target").html("Hello to you too. Try a question next time.")
          }, 400)
          $("#target").toggle("fade")
        } else {
          $("#target").toggle("fade")
          setTimeout(function() {
            $("#target").html(randResponse(responses))
          }, 400)
          $("#target").toggle("fade")
        }
      }
      , 1000)
    // reset button
    $("#submit").text("Reset")
  }
})

