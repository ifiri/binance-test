import React from 'react';
import classnames from 'classnames';

import styles from './Switcher.module.scss';

export default function Switcher(props) {
  const className = classnames({
    [props.className]: !!props.className,

    [styles.switcher]: true,
  });

  const onClick = event => {
    if (!props.onSwitch) {
      return;
    }

    props.onSwitch(event.target.value);
  };

  return (
    <section className={ className }>
      {(() => 
        props.items.reduce(
          (accumulator, item) => ([
            ...accumulator,
            <button
              className={ styles['switcher-button'] }
              disabled={ props.value === item.value }
              key={ item.key || item.value }
              value={ item.value }
              onClick={ onClick }
            >
              { item.text }
            </button>
          ]), []
        )
      )()}
    </section>
  );
};
