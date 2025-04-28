type Replacer = {
  regex: RegExp
  replacer: string
}

const re = {
  lineBreak: /(\r\n|\n|\r)/g,
  lineBreak2: /(\r\n|\n|\r){2}/g
}

const steps = {
  azCypExtractor: [
    // replace more than 1 space with 1 space
    {
      regex: /\s{2,}/g,
      replacer: ' '
    },
    {
      // regex: /\b(?!CYP-\d+)\w+\b/g,
      regex: /\b(?!CYP-409)\w+\b/g,
      replacer: ''
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

const findCYPWords = (text: string): string => {
  // This regex matches a word boundary, followed by 'CYP-',
  // then 2 or 3 digits, and ends at a word boundary.
  const regex = /\bCYP-\d{2,3}\b/g

  // Use the match method to find all occurrences.
  const matches = text.match(regex)

  // Return the found matches or an empty array if none were found.
  // return matches || []

  if (!matches) {
    return ''
  }

  return matches.join(' ')
}

class Text {
  private text: string

  constructor(text: string) {
    this.text = text
  }

  log(): string {
    console.log(this.text)
    return this.text
  }

  process(step: (text: string) => string): Text {
    this.text = step(this.text)
    return this
  }

  replace(replaceArray: Replacer[]) {
    replaceArray.forEach((replace) => {
      this.text = this.text.replace(replace.regex, replace.replacer)
    })
    return this
  }
}

export const getCYPs = (text: string): string =>
  new Text(text)
    .process(findCYPWords)
    .replace([
      {
        regex: /CYP-/g,
        replacer: ''
      }
    ])
    .log()

export const getAzDescription = (text: string): string =>
  new Text(text)
    .replace([
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
    ])
    .log()
