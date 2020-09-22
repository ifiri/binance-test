import React, { useState, useEffect, useCallback } from 'react';

import { Radio, Dropdown, IconButton, Icon } from 'rsuite';

import styles from './RadioDropdown.module.scss';

const renderDropdownTitle = () => {
  return <IconButton icon={<Icon icon='angle-double-down' />} />;
};

export default function RadioDropdown(props) {
  const currentOption = (() => {
    const index = props.items.findIndex(
      item => item.value === props.value
    );

    return props.items[index] || {};
  })();

  const getLabel = useCallback(() => {
    if (props.value === props.defaultValue) {
      return props.children;
    }

    const { text } = currentOption;

    return text || props.children;
  }, [props.value, props.defaultValue]);

  const getValue = useCallback(() => {
    if (props.value === props.defaultValue) {
      return props.defaultValue;
    }

    const { value } = currentOption;

    return value || props.items[0].value;
  }, [props.value, props.defaultValue]);

  const [label, setLabel] = useState(getLabel());
  const [value, setValue] = useState(getValue());

  useEffect(() => {
    // We should update label and value of current state every tick,
    // if they changed. This is required for be able to click and select
    // filter states from dropdown and by radio as well.
    setLabel(getLabel());
    setValue(getValue());
  }, [getLabel, getValue]);

  return (
    <div className={ styles['radio-dropdown'] }>
      <Radio
        value={ value }
        onChange={ props.onChange }
      >
        { label }
      </Radio>

      <Dropdown
        renderTitle={ renderDropdownTitle }
        onSelect={ props.onChange }
      >
        {(() => props.items.map(
          item =>
            <Dropdown.Item
              key={ item.key || item.value }
              eventKey={ item.value }
            >
              { item.text }
            </Dropdown.Item>
        ))()}
      </Dropdown>
    </div>
  );
};
