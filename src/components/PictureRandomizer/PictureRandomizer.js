import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderNothing } from 'recompose';

class PictureRandomizerPure extends PureComponent {
  
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })),
    onClick: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    images: [],
    onClick: () => {},
    style: {},
  }

  getImageProps = (images) => {
    return images[Math.floor(Math.random() * images.length)]
  }

  render() {
    const {
      images,
      onClick,
      style,
    } = this.props;
    const image  = this.getImageProps(images);
    return (
      <img
        src={image.src}
        alt={image.alt}
        style={style}
        onClick={onClick}
      />);
  }
};

export const PictureRandomizer = compose(
  branch(
    ({ images }) => !images,
    renderNothing,
  )
)(PictureRandomizerPure);