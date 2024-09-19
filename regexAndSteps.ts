const re = {
  lineBreak: /(\r\n|\n|\r)/g,
  lineBreak2: /(\r\n|\n|\r){2}/g
}

export const steps = {
  azDiscriptionSteps: [
    {
      regex: /(.*)$/gm,
      replacer: '// $1'
    },
    {
      regex: /\/{2}\s$/gm,
      replacer: '\n'
    },
    {
      regex: /(\r\n|\n|\r){2}/g,
      replacer: '\n'
    },
    {
      regex: /(\r\n|\n|\r){2}/g,
      replacer: '\n'
    }
  ],
  createArray: [
    {
      regex: re.lineBreak2, // replace 2 line breaks with one
      replacer: '\n'
    },
    {
      regex: /^\s/gm, // remove first space
      replacer: ''
    },
    {
      // regex: /^((\w|-)+)/gm,
      regex: /^(.+)/gm, // wrap work with quotes
      replacer: '"$1"'
    },
    {
      regex: re.lineBreak, // replace line breaks with comma
      replacer: ','
    },
    {
      regex: /^,/g, // replace first comma with [
      replacer: '['
    },
    {
      regex: /,$/g, // replace last comma with ]
      replacer: ']'
    },
    {
      regex: /^"/g, // replace first quote with [ only if first character is a quote
      replacer: '["'
    }
  ],
  createArrayTouteMonAnnee: [
    {
      regex: /^\s/gm, // remove first space
      replacer: ''
    },
    {
      regex: /^.*(http.+)/gm, // wrap work with quotes
      replacer: '"$1"'
    },
    {
      regex: /^[^"http].*/gm, // remove not starting with "http"
      replacer: ''
    },
    {
      regex: re.lineBreak2, // replace 2 line breaks with one
      replacer: '\n'
    },
    {
      regex: re.lineBreak2, // replace 2 line breaks with one
      replacer: '\n'
    },
    {
      regex: re.lineBreak, // replace line breaks with comma
      replacer: ','
    },
    {
      regex: /,$/g, // replace last comma with ]
      replacer: ']'
    },
    {
      regex: /^"/g, // replace first quote with [ only if first character is a quote
      replacer: '["'
    }
  ]
}
