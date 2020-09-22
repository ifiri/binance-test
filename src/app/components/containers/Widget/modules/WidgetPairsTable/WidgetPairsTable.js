import React from 'react';
import classnames from 'classnames';

import { Table, Input } from 'rsuite';

import styles from './WidgetPairsTable.module.scss';

export default function WidgetPairsTable(props) {
  const { onSearch = () => {}, className: passedClassName, ...forwardingProps } = props;

  const className = classnames({
    [passedClassName]: !!passedClassName,

    [styles['widget-pairs-table']]: true,
  });

  return (
    <section className={ className }>
      <div className={ styles['widget-pairs-table-filters'] }>
        <div className={ styles['widget-pairs-table-search'] }>
          <Input type="text" placeholder="search" onChange={ onSearch } />
        </div>
      </div>

      <Table
        className={ styles['widget-pairs-table-table'] }
        data={props.data}
        // sortColumn={this.state.sortColumn}
        // sortType={this.state.sortType}
        // onSortColumn={this.handleSortColumn}

        {...forwardingProps }
      >
        <Table.Column width={ 150 } fixed sortable>
          <Table.HeaderCell>Pair</Table.HeaderCell>
          <Table.Cell dataKey="pair" />
        </Table.Column>

        <Table.Column sortable>
          <Table.HeaderCell>Last Price</Table.HeaderCell>
          <Table.Cell dataKey="lastPrice" />
        </Table.Column>
      </Table>
    </section>
  );
};
