import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import cn from 'classnames';
import { SortByFields } from './enums/sortFields';
import { getVisibleGoods } from './utils/getVisibleGoods';
import { VisibleGoods } from './components/VisibleGoods';

export const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [sortType, setSortType] = useState<SortByFields>(SortByFields.None);
  const [isReversed, setIsReversed] = useState<boolean>(false);

  const resetGoods = (): void => {
    setSortType(SortByFields.None);
    setIsReversed(false);
  };

  const visibleGoods: string[] = getVisibleGoods(
    goodsFromServer,
    sortType,
    isReversed,
  );

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={(): void => setSortType(SortByFields.Alphabetic)}
          type="button"
          className={cn('button is-info', {
            'is-light': sortType !== SortByFields.Alphabetic,
          })}
        >
          Sort alphabetically
        </button>

        <button
          onClick={(): void => setSortType(SortByFields.Length)}
          type="button"
          className={cn('button is-success', {
            'is-light': sortType !== SortByFields.Length,
          })}
        >
          Sort by length
        </button>

        <button
          onClick={(): void => setIsReversed(!isReversed)}
          type="button"
          className={cn('button is-warning', {
            'is-light': !isReversed,
          })}
        >
          Reverse
        </button>

        {(sortType !== SortByFields.None || isReversed) && (
          <button
            onClick={(): void => resetGoods()}
            type="button"
            className="button is-danger is-light"
          >
            Reset
          </button>
        )}
      </div>

      <VisibleGoods visibleGoods={visibleGoods} />
    </div>
  );
};
