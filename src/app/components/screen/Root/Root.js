import React from 'react';

import Widget from 'app/components/common/Widget';
import styles from './Root.module.scss';

function Root() {
  return (
    <div className={ styles.root }>
      <Widget className={ styles['root-widget'] }></Widget>
    </div>
  );
}

export default Root;
