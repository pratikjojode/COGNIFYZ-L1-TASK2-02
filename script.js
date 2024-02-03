function currentTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const fromatedTime = hours + ":" + minutes + ":" + seconds;

  alert("Welcome user the current timing is:" + fromatedTime);
}

// setTimeout(currentTime, 3000);
