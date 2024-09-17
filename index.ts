let text = `
https://2023-923ce00f-e7c6-499a-96bf-ff03fbab8e82-gi.s3.toutemonannee.com/n1/42d25347-40b6-4510-8f06-b1037b39aaf8/hd/f06106d1-3942-46bc-a9b0-3f0723a95232.jpg?lastmod=1721985322
chunk-FYWFTXCL.js:5 https://2023-923ce00f-e7c6-499a-96bf-ff03fbab8e82-gi.s3.toutemonannee.com/n1/42d25347-40b6-4510-8f06-b1037b39aaf8/hd/2e7c34b7-a274-41a0-a5bf-e97a760c93db.jpg?lastmod=1709890602
chunk-FYWFTXCL.js:5 https://2023-923ce00f-e7c6-499a-96bf-ff03fbab8e82-gi.s3.toutemonannee.com/n1/42d25347-40b6-4510-8f06-b1037b39aaf8/hd/5338cb64-4010-43cc-9a7b-e96275d686d0.jpg?lastmod=1715099651
chunk-FYWFTXCL.js:5 https://2023-923ce00f-e7c6-499a-96bf-ff03fbab8e82-gi.s3.toutemonannee.com/n1/42d25347-40b6-4510-8f06-b1037b39aaf8/hd/69ede387-2d0c-4515-9911-ae7bde2cee7e.jpg?lastmod=1715099654
undefined
document.querySelectorAll('img.lg-image').forEach(img => console.log(img.src))
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

steps.createArrayTouteMonAnnee.forEach((step) => {
  text = text.replace(step.regex, step.replacer)
})
console.log(text)

// bun index.ts
