let splittingWords = {
  'split': ['separate'],
  'words': null
}

export default {
  words: splittingWords,
  regex: new RegExp(`\\b(${Object.keys(splittingWords).join('|')})\\b`)
}
