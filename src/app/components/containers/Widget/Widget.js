import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import {
  fetchProducts,
} from 'app/store/slices/products';

import {
  sort,
} from 'app/store/slices/sort';

import {
  setSearch,
} from 'app/store/slices/search';

import {
  selectProducts,
  selectProductsExistence,
} from 'app/store/slices/products/selectors';

import {
  selectLoadingState,
} from 'app/store/slices/loading/selectors';

import WidgetPairsSwitcher from './modules/WidgetPairsSwitcher';
import WidgetSocketControls from './modules/WidgetSocketControls';
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
    dispatch(setSearch(searchString));
  };

  const onSort = (dataKey, sortType) => {
    dispatch(sort({
      column: dataKey,
      type: sortType,
    }));
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

      <div className={ styles['widget-controls'] }>
        <WidgetPairsSwitcher />
        <WidgetSocketControls />
      </div>

      <WidgetPairsTable
        data={ products }
        loading={ isLoading }
        virtualized= { true }
        shouldUpdateScroll={ false }
        onSearch={ onSearch }
        onSort={ onSort }
      />
    </section>
  );
};
