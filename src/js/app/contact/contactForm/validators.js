import validator from 'email-validator';

export const required = (value) => !!value.length;

export const email = (value) => validator.validate(value);