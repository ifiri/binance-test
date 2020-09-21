import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import {
  changePair,
  selectPair,
} from 'app/store/slices/connect';

// import store from 'app/stores';

import Switcher from 'app/components/common/Switcher';

import styles from './WidgetPairsSwitcher.module.scss';

const AVAILABLE_MODES = [
  { text: 'Margin', value: 'margin', key: 'margin' },
  { text: 'BNB', value: 'bnb', key: 'bnb' },
  { text: 'BTC', value: 'btc', key: 'btc' },
  { text: 'ALTS', value: 'alts', key: 'alts' },
  { text: 'USD(s)', value: 'usds', key: 'usds' },
];

export default function WidgetPairsSwitcher(props) {
  const { className: passedClassName, ...forwardingProps } = props;

  const className = classnames({
    [passedClassName]: !!passedClassName,

    [styles['widget-pairs-switcher']]: true,
  });

  const currentPair = useSelector(selectPair);
  const dispatch = useDispatch();

  console.log('::: currentPair', currentPair);

  const onSwitch = pair => {
    console.log(':: sw', pair);
    return dispatch(changePair(pair));
  };

  return <Switcher
    className={ className }
    items={ AVAILABLE_MODES }
    value={ currentPair }
    onSwitch={ onSwitch }
    { ...forwardingProps }
  />;
};
