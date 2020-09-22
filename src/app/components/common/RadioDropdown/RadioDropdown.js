import React, { useState, useEffect } from 'react';

import { Radio, Dropdown, IconButton, Icon } from 'rsuite';

const renderDropdownTitle = () => {
  return <IconButton icon={<Icon icon='angle-double-down' />} />;
};

export default function RadioDropdown(props) {
  const getCurrentOption = () => {
    const index = props.items.findIndex(
      item => item.value === props.value
    );

    return props.items[index] || {};
  };

  const getLabel = () => {
    if (props.value === props.defaultValue) {
      return props.children;
    }

    const { text } = getCurrentOption();

    return text || props.children;
  };

  const getValue = () => {
    if (props.value === props.defaultValue) {
      return props.defaultValue;
    }

    const { value } = getCurrentOption();

    return value || props.items[0].value;
  };

  const [label, setLabel] = useState(getLabel());
  const [value, setValue] = useState(getValue());

  const onChange = newValue => {
    if (!props.onChange) {
      return;
    }

    props.onChange(newValue);
  };

  useEffect(() => {
    const newValue = getValue();

    if (value !== newValue) {
      setLabel(getLabel());
      setValue(newValue);
    }
  });

  return (
    <React.Fragment>
      <Radio
        value={ value }
        onChange={ onChange }
      >
        { label }
      </Radio>

      <Dropdown
        renderTitle={ renderDropdownTitle }
        onSelect={ onChange }
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
    </React.Fragment>
  );
};
