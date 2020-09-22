import React from 'react';
import { useDispatch } from 'react-redux';

import {
  closeSocketDispatchable,
} from 'app/store/slices/products/dispatchables';

import { Button } from 'rsuite';

export default function WidgetSocketControls(props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(closeSocketDispatchable());
  };

  return <div className={ props.className }>
    <Button onClick={ onClick }>Disconnect</Button>
  </div>;
};
