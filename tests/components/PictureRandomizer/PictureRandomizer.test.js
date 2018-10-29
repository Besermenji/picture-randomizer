import React from 'react';
import { shallow } from 'enzyme';
import { PictureRandomizer } from '../../../src/components/PictureRandomizer/PictureRandomizer';

describe('<PictureRandomizer />', () => {
  it('handles onClick callback', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<PictureRandomizer onClick={onClick} />);
    expect(onClick).not.toBeCalled();
    wrapper.simulate('click');
    expect(onClick).toBeCalled();
  });
});