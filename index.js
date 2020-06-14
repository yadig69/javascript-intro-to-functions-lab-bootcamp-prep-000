function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = "I can't hear you"
  var uppercase = "YES INDEED!"
  var lovegrandma = "I love you, to"
  if (lowercase.toLowerCase(string) === string) {
    return lowercase;
  }
  else if (uppercase.toUpperCase(string) === string) {
    return uppercase;
  }
  else if ("I love you, Grandma." === string) {
    return lovegrandma;
  }
}

sayHiToGrandma("I love you Grandma")
