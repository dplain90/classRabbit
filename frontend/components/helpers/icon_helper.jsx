import React from 'react';

export const generateIcon = (name) => {
  return (<i className={name} />);
}

export const pencilIcon = generateIcon('icon-pencil step-icon');
export const checkIcon = generateIcon('icon-checkmark step-icon');
export const locationIcon = generateIcon('icon-location2');
