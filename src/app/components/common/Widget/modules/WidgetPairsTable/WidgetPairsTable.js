import React from 'react';
import classnames from 'classnames';

import { Table } from 'antd';

import styles from './WidgetPairsTable.module.scss';

const COLUMNS = [
  {
    title: 'Pair',
    dataIndex: 'pair',
    key: 'pair',
    // sorter: (a, b) => a.pair.localeCompare(b.pair),
  },
  {
    title: 'Last Price',
    dataIndex: 'lastPrice',
    key: 'last-price',
    // sorter: (a, b) => a.lastPrice - b.lastPrice,
  },
];

export default function WidgetPairsTable(props) {
  const { className: passedClassName, ...forwardingProps } = props;

  const className = classnames({
    [passedClassName]: !!passedClassName,

    [styles['widget-pairs-table']]: true,
  });

  return (
    <section className={ className }>
      <div className={ styles['widget-pairs-table-filters'] }>
        <div className={ styles['widget-pairs-table-search'] }>
          <input type="text" placeholder="search" />
        </div>
        
        <div className={ styles['widget-pairs-table-modes'] }>
          <label>
            <input
              type="radio"
              value="change"
              name="mode"
              selected={ true }
            />
            Change
          </label>
          <label>
            <input
              type="radio"
              value="volume"
              name="mode"
            />
            Volume
          </label>
        </div>
      </div>

      <Table
        columns={ COLUMNS }
        sortDirections={['descend', 'ascend', 'descend']}
        {...forwardingProps }
      />
    </section>
  );
};
