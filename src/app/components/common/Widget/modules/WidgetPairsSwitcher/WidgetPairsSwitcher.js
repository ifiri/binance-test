import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import {
  changePair,
  selectPair,
} from 'app/store/slices/connect';

import Switcher from 'app/components/common/Switcher';

import styles from './WidgetPairsSwitcher.module.scss';

const AVAILABLE_MODES = [
  { text: 'Margin', value: 'margin' },
  { text: 'BNB', value: 'bnb' },
  { text: 'BTC', value: 'btc' },
  { text: 'ALTS', value: 'alts' },
  { text: 'USD(s)', value: 'usds' },
];

export default function WidgetPairsSwitcher(props) {
  const { className: passedClassName, ...forwardingProps } = props;

  const className = classnames({
    [passedClassName]: !!passedClassName,

    [styles['widget-pairs-switcher']]: true,
  });

  const currentPair = useSelector(selectPair);
  const dispatch = useDispatch();

  const onSwitch = pair => dispatch(changePair(pair));

  return <Switcher
    className={ className }
    items={ AVAILABLE_MODES }
    value={ currentPair }
    onSwitch={ onSwitch }
    { ...forwardingProps }
  />;
};
