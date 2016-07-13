import React from 'react';

export default ({config: {InputType, placeholder}, onUpdate}) =>
    <InputType placeholder={placeholder} onChange={(event) => onUpdate(event.target.value)} />;