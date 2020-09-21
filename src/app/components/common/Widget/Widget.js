import React from 'react';
import classnames from 'classnames';

import { Table } from 'antd';
import styles from './Widget.module.scss';

const dataSource = [
  {
    key: '1',
    pair: 'ADA/BTC',
    lastPrice: 0.000617,
    change: '-0.64%',
  },
  {
    key: '2',
    pair: 'ADX/BTC',
    lastPrice: 0.001017,
    change: '+1.10%',
  },
  {
    key: '3',
    pair: 'AE/BTC',
    lastPrice: 0.002127,
    change: '+0.33%',
  },
  {
    key: '4',
    pair: 'AGI/BTC',
    lastPrice: 0.000257,
    change: '-1.57%',
  },
  {
    key: '5',
    pair: 'AION/BTC',
    lastPrice: 0.001327,
    change: '+8.06%',
  },
  {
    key: '6',
    pair: 'ADA/BTC',
    lastPrice: 0.000617,
    change: '-0.64%',
  },
  {
    key: '7',
    pair: 'ADX/BTC',
    lastPrice: 0.001017,
    change: '+1.10%',
  },
  {
    key: '8',
    pair: 'AE/BTC',
    lastPrice: 0.002127,
    change: '+0.33%',
  },
  {
    key: '9',
    pair: 'AGI/BTC',
    lastPrice: 0.000257,
    change: '-1.57%',
  },
  {
    key: '10',
    pair: 'AION/BTC',
    lastPrice: 0.001327,
    change: '+8.06%',
  },
];

const columns = [
  {
    title: 'Pair',
    dataIndex: 'pair',
    key: 'pair',
    sorter: (a, b) => a.pair.localeCompare(b.pair),
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'Last Price',
    dataIndex: 'lastPrice',
    key: 'last-price',
    sorter: (a, b) => a.lastPrice - b.lastPrice,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'Change',
    dataIndex: 'change',
    key: 'change',
    sorter: (a, b) => parseFloat(a.change) - parseFloat(b.change),
    sortDirections: ['descend', 'ascend', 'descend'],
  },
];


export default function Widget(props) {
  const className = classnames({
    [props.className]: !!props.className,

    [styles.widget]: true,
  });

  return (
    <section className={ className }>
      <header className={ styles['widget-header'] }>
        <h3 className={ styles['widget-title'] }>
          Market
        </h3>
      </header>
      <div className={ styles['widget-markets'] }>
        <button>Market</button>
        <button>BNB</button>
        <button>BTC</button>
        <button>ALTS</button>
        <button>USD(S)</button>
      </div>
      <div className={ styles['widget-filters'] }>
        <div className={ styles['widget-search'] }>
          <input type="text" placeholder="search" />
        </div>
        <div className={ styles['widget-filters-type'] }>
          <label className={ styles.filter }><input className={ styles['filter-input'] } type="radio" /> Change</label>
          <label className={ styles.filter }><input className={ styles['filter-input'] } type="radio" /> Volume</label>
        </div>
      </div>
      <div className={ styles['widget-pair-list'] }>
        <Table dataSource={dataSource} columns={columns} size="small" pagination={ false } scroll={{ y: 240 }}/>
      </div>
    </section>
  );
};
