import * as React from 'react';
import { ResizeGroupOverflowSetExample } from './ResizeGroup.OverflowSet.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { FlexBoxResizeGroupExample } from './ResizeGroup.FlexBox.Example';
import { ResizeGroupVerticalOverflowSetExample } from './ResizeGroup.VerticalOverflowSet.Example';

const ResizeGroupBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/ResizeGroup.OverflowSet.Example.tsx') as string;

const ResizeGroupVerticalExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/ResizeGroup.VerticalOverflowSet.Example.tsx') as string;

const ResizeGroupFlexBoxExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/ResizeGroup.FlexBox.Example.tsx') as string;

export const ResizeGroupPageProps: IDocPageProps = {
  title: 'ResizeGroup',
  componentName: 'ResizeGroup',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ResizeGroup',
  examples: [
    {
      title: 'Use ResizeGroup to move commands into an overflow menu',
      code: ResizeGroupBasicExampleCode,
      view: <ResizeGroupOverflowSetExample />,
    },
    {
      title: 'Use a vertical ResizeGroup to move commands into an overflow menu',
      code: ResizeGroupVerticalExampleCode,
      view: <ResizeGroupVerticalOverflowSetExample />,
      isScrollable: false,
    },
    {
      title: 'Use ResizeGroup to prevent two groups of items from overlapping',
      code: ResizeGroupFlexBoxExampleCode,
      view: <FlexBoxResizeGroupExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/docs/ResizeGroupOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/docs/ResizeGroupBestPractices.md'),
  dos: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/docs/ResizeGroupDos.md'),
  donts: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ResizeGroup/docs/ResizeGroupDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
