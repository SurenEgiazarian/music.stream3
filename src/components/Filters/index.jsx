import { useState } from 'react';
import Filter from '../Filter';
import * as S from './styles';
import { TRACK_FILTERS } from '../../constants';

function Filters() {
  const [clickedType, setClickedType] = useState(null);

  const saveType = (type) => {
    setClickedType((prevType) => (prevType === type ? null : type));
  };

  const calcVisible = (type) => type === clickedType;

  return (
    <S.Filters>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {TRACK_FILTERS.map(({ id, type, text, content }) => (
        <Filter
          key={id}
          callback={saveType}
          type={type}
          content={content}
          visible={calcVisible(type)}
        >
          {text}
        </Filter>
      ))}
    </S.Filters>
  );
}

export default Filters;
