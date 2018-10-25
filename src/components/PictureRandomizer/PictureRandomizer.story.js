import React from 'react';
import { storiesOf } from '@storybook/react';
import { PictureRandomizer } from './PictureRandomizer';

const images = [
  {
    src: 'https://media.giphy.com/media/fs0r5olknYHjFB703e/giphy.gif',
    alt: 'bro laughing',
  },
  {
    src: 'https://media.giphy.com/media/2yxkPj5mWYOGh4UYBs/giphy.gif',
    alt: 'bro waving',
  },
  {
    src: 'https://media.giphy.com/media/w8ql63Ak3RLQx2QDOu/giphy.gif',
    alt: 'bro with hat',
  }
];

const style = {
  width: 200,
  height: 200,
  borderRadius: '50%',
}

storiesOf('PictureRandomizer', module)
  .add('without props', () => (
    <PictureRandomizer />
  )).add('with images array', () => (
    <PictureRandomizer 
      images={images}
    />
  )).add('custom css', () => (
    <PictureRandomizer
      images={images}
      style={style}
    />
  ));
