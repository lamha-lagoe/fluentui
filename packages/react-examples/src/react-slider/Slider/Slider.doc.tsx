import * as React from 'react';
import { SliderBasicExample } from './Slider.Basic.Example';
import { SliderVerticalExample } from './Slider.Vertical.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';

const SliderBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-slider/Slider/Slider.Basic.Example.tsx') as string;
const SliderVerticalExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-slider/Slider/Slider.Vertical.Example.tsx') as string;

export const SliderPageProps: IDocPageProps = {
  title: 'Slider',
  componentName: 'Slider',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/react-slider/src/components/slider',
  examples: [
    {
      title: 'Horizontal sliders',
      code: SliderBasicExampleCode,
      view: <SliderBasicExample />,
    },
    {
      title: 'Vertical sliders',
      code: SliderVerticalExampleCode,
      view: <SliderVerticalExample />,
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-examples/src/react-slider/Slider/docs/SliderOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/react-slider/Slider/docs/SliderBestPractices.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};
