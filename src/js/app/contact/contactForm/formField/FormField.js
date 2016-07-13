import React from 'react';

export default ({config: {InputType, placeholder, autofocus}, value, onUpdate}) =>
    <InputType placeholder={placeholder}
               autoFocus={autofocus}
               value={value}
               onChange={(event) => onUpdate(event.target.value)} />;