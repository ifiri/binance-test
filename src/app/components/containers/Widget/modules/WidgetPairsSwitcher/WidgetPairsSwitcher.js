import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import {
  setFilter,
} from 'app/store/slices/filter';
import {
  selectFilter,
} from 'app/store/slices/filter/selectors';

import Switcher from 'app/components/common/Switcher';

import { AVAILABLE_MODES } from './WidgetPairsSwitcher.constants';
import styles from './WidgetPairsSwitcher.module.scss';

export default function WidgetPairsSwitcher(props) {
  const { className: passedClassName, ...forwardingProps } = props;

  const className = classnames({
    [passedClassName]: !!passedClassName,

    [styles['widget-pairs-switcher']]: true,
  });

  const currentPair = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSwitch = pair => {
    dispatch(setFilter(pair));
  };

  return <Switcher
    className={ className }
    items={ AVAILABLE_MODES }
    value={ currentPair }
    onSwitch={ onSwitch }
    { ...forwardingProps }
  />;
};
