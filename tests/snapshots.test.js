import initStoryshots from '@storybook/addon-storyshots';
import { mockRandomForEach } from 'jest-mock-random';

mockRandomForEach(0.5);
initStoryshots();
