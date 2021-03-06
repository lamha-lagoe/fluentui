import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const TriangleSolidDown12Icon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M0 0h2048L1024 2048 0 0z" />
    </svg>
  ),
  displayName: 'TriangleSolidDown12Icon',
});

export default TriangleSolidDown12Icon;
