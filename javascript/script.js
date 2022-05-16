function truncateText () {
  let str = "Self-confidence NY NJ Meetup Group"
  if (str.length > 10) {
   let result = str.slice(0, 29) + "...";
   document.getElementById("group-name").textContent = result;
   console.log(result);
    return result;
  } else {
    result = str
    return document.getElementById("group-name").textContent = result;
  }
}

// console.log(truncateText())
document.getElementById("group-name").textContent = truncateText()