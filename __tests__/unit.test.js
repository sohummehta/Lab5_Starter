// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('1st phoneNumber test', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('2nd phoneNumber test', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('3rd phoneNumber test', () => {
  expect(isPhoneNumber('what up man')).toBe(false);
});
test('4th phoneNumber test', () => {
  expect(isPhoneNumber('2848888')).toBe(false);
});

test('1st email test', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('2nd email test', () => {
  expect(isEmail('hey_123@host.co')).toBe(true);
});
test('3rd email test', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('4th email test', () => {
  expect(isEmail('thegoat')).toBe(false);
});

test('1st strongPassword test', () => {
  expect(isStrongPassword('Abc1')).toBe(true);
});
test('2nd strongPassword test', () => {
  expect(isStrongPassword('Hello_world123')).toBe(true);
});
test('3rd strongPassword test', () => {
  expect(isStrongPassword('9abcd')).toBe(false);
});
test('4th strongPassword test', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

test('1st date test', () => {
  expect(isDate('1/2/2020')).toBe(true);
});
test('2nd date test', () => {
  expect(isDate('12/17/1999')).toBe(true);
});
test('3rd date test', () => {
  expect(isDate('01-02-2020')).toBe(false);
});
test('4th date test', () => {
  expect(isDate('1/2/20')).toBe(false);
});

test('1st hexColor test', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('2nd hexColor test', () => {
  expect(isHexColor('a1B2c3')).toBe(true);
});
test('3rd hexColor test', () => {
  expect(isHexColor('#fgfggfgfggggg')).toBe(false);
});
test('4th hexColor test', () => {
  expect(isHexColor('#ab')).toBe(false);
});
