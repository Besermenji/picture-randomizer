# Picture Randomizer

Package used to pick random image from the Array of images.

## Table of contents

- [Picture Randomizer](#picture-randomizer)
  - [Table of contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation and Setup](#installation-and-setup)
  - [CLI Commands](#cli-commands)
  - [Usage](#usage)
    - [`images` prop](#images-prop)
    - [`style` prop](#style-prop)
    - [`onClick` prop](#onclick-prop)
  - [Testing](#testing)

## Prerequisites

You need to have already installed (and configured) `node` (v10.2.1+) and `yarn` (v1.7.0+)

## Installation and Setup

Before running the app you need to install dependencies. In order to get validated package versions run:

```bash
yarn install
```

## CLI Commands

After everything is installed and set up, here is the list of commands that
can be ran from console.

- `yarn start` - Starts up storybook server on port `6006`
- `yarn test` - Run `jest` tests


## Usage 

``` js
import { PictureRandomizer } from 'picture-randomizer';

  <PictureRandomizer
    images={images}
    style={style}
    onClick={() => {}}
  />
```

### `images` prop
Prop that contains array of image objects with shape:

``` js
[
  {
    src: `image url`,
    alt: 'image description',
  },
]
```
One of the images will be chosen randomly.

### `style` prop
Prop that contains object for inline styling of the image:

``` js
{
  width: 200,
  height: 200,
  borderRadius: '50%',
}
```

### `onClick` prop
Prop used to handle `onClick` callback.

## Testing

Testing rules are yet to be defined.
You can run tests in watch mode with `yarn test --watchAll`. It will allow you to select specific tests that you want to run.
