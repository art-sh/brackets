module.exports = function check(str, bracketsConfig) {
  if (str.length % 2)
    return false;

  let splitted = str.split('');

  for (let i = 0; i < splitted.length; i++) {
    for (let config of bracketsConfig) {
      if (config[0] === splitted[i] && config[1] === splitted[i + 1])
        return check(splitted.slice(0, i).concat(splitted.slice(i + 2)).join(''), bracketsConfig);
    }
  }

  return !splitted.length;
}
