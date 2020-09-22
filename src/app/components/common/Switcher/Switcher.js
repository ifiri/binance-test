import React from 'react';
import classnames from 'classnames';

import { RadioGroup, Radio } from 'rsuite';
import RadioDropdown from 'app/components/common/RadioDropdown';

import styles from './Switcher.module.scss';

export default function Switcher(props) {
  const className = classnames({
    [props.className]: !!props.className,

    [styles.switcher]: true,
  });

  const onChange = value => {
    if (!props.onSwitch) {
      return;
    }

    props.onSwitch(value);
  };

  const renderItem = item => {
    if (item.descendants) {
      return <RadioDropdown
        key={ item.key || item.value }
        onChange={ onChange }
        items={ item.descendants }
        value={ props.value }
        defaultValue={ item.value }
      >
        { item.text }
      </RadioDropdown>;
    }

    return <Radio
      key={ item.key || item.value }
      value={ item.value }
      onChange={ onChange }
    >
      { item.text }
    </Radio>;
  };

  return (
    <section className={ className }>
      <RadioGroup
        name={ props.name }
        appearance="picker"
        defaultValue={ props.value }
        value={ props.value }
        inline
      >
        {(() => 
          props.items.reduce(
            (accumulator, item) => ([
              ...accumulator,
              renderItem(item)
            ]), []
          )
        )()}
      </RadioGroup>
    </section>
  );
};
