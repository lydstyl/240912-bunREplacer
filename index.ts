let text = `
FILET ZINGER 80 gr 8 x 20pcs

 KF610416-HOTWINGS PREMARINE S 35GRS 6 X 68 PCS

 FILET OR 80gr

 Strips pré marinés

KF611038-MINI TENDERS 9x80pcs
`

const re = {
  lineBreak: /(\r\n|\n|\r)/g,
  lineBreak2: /(\r\n|\n|\r){2}/g
}

const steps = {
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
  ]
}

steps.createArray.forEach((step) => {
  text = text.replace(step.regex, step.replacer)
})
console.log(text)

// bun index.ts
