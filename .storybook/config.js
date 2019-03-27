import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { themes } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';

addParameters({
  options: {
    showPanel: false,
    panelPosition: 'right',
    theme: {
      ...themes.dark,
      animation: true,
      brandTitle: 'RDK',
      url: 'https://jask-oss.github.io/rdk/'
    }
  }
});

addDecorator(centered);
addDecorator(withInfo);

// Grep src for .story file extensions
const req = require.context('../src', true, /\.story\.tsx/);
const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
