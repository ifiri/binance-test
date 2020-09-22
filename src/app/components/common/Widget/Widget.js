import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import {
  fetchProducts,
  setFilter,
} from 'app/store/slices/products';

import {
  selectProducts,
  selectProductsExistence,
  selectLoadingState,
} from 'app/store/slices/products/selectors';

import WidgetPairsSwitcher from './modules/WidgetPairsSwitcher';
import WidgetPairsTable from './modules/WidgetPairsTable';

import styles from './Widget.module.scss';

export default function Widget(props) {
  const className = classnames({
    [props.className]: !!props.className,

    [styles.widget]: true,
  });

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const areProductsExists = useSelector(selectProductsExistence);
  const isLoading = useSelector(selectLoadingState);

  const onSearch = searchString => {
    dispatch(setFilter(searchString));
  };

  useEffect(() => {
    if (areProductsExists || isLoading) {
      return;
    }

    dispatch(fetchProducts());
  });

  return (
    <section className={ className }>
      <header className={ styles['widget-header'] }>
        <h3 className={ styles['widget-title'] }>
          Market
        </h3>
      </header>

      <WidgetPairsSwitcher
        className={ styles['widget-markets'] }
      />

      <div >
        <WidgetPairsTable
          data={ products }
          className={ styles['widget-pair-list'] }
          loading={ isLoading }
          virtualized= { true }
          shouldUpdateScroll={ false }
          onSearch={ onSearch }
        />
      </div>
    </section>
  );
};
