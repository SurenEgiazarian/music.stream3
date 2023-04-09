import * as S from './styles';

function FilterPopup({ isPopupVisible, content, filterBy }) {
  const elements = content.map((element) => (
    <S.Text key={element.id}>{element[filterBy]}</S.Text>
  ));

  return isPopupVisible ? <S.Popup>{elements}</S.Popup> : null;
}

export default FilterPopup;
