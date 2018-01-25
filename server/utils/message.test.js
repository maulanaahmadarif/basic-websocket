const expect = require('expect');

const {generateMessage} = require('./message');
const {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Jen';
    const text = 'Some Message';
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Dab';
    const latitude = 15;
    const longtitude = 19;
    const url = `https://www.google.com/maps?q=${latitude},${longtitude}`;
    const message = generateLocationMessage(from, latitude, longtitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  })
})