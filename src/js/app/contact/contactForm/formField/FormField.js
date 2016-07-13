import React from 'react';

export default ({config: {InputType, placeholder, autofocus}, onUpdate}) =>
    <InputType placeholder={placeholder} autoFocus={autofocus} onChange={(event) => onUpdate(event.target.value)} />;