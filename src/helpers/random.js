export const getRandomInt = (max, min = 1, except = null) => {
  let random = Math.floor(Math.random() * max) + min
  //We don't want the same planet to appear twice in a row.
  if (except && random >= except) {
    random++
  }
  return random;
}
