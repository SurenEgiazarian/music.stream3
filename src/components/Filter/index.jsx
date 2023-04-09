/* eslint-disable no-console */
import * as S from './styles';
import Popup from '../FilterPopup';

function Filter({ type, visible, content, callback, children }) {
  const clickHandler = () => {
    console.log('visible', visible);
    callback(type);
  };

  return (
    <S.Wrapper>
      <S.Button onClick={clickHandler} $isActive={visible}>
        {children}
      </S.Button>
      <Popup filterBy={type} content={content} isPopupVisible={visible} />
    </S.Wrapper>
  );
}

export default Filter;
