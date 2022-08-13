export function parseInput(input) {
  const normalizedInput = input.replace(/\s/g, '')
  const normalizedHexInput = normalizedInput.replace(/0x|,/g, '').toLowerCase()

  if (isHex(normalizedHexInput)) {
    return Buffer.from(normalizedHexInput, 'hex')
  } else {
    return Buffer.from(normalizedInput, 'base64')
  }
}

export function isHex(string) {
  return /^[0-9a-f]+$/i.test(string) && (string.length % 2) === 0
}

export function bufferToPrettyHex(buffer) {
  return buffer.toString('hex').replace(/(..)/g, '$1 ').trim()
}

export function bufferLeToBeHex(buffer) {
  return buffer.toString('hex').split(/(..)/).reverse().join('')
}
