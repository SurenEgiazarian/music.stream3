import * as S from './styles';

const emptyArray = Array.from({ length: 3 });

function Burger({ onClick }) {
  const lines = emptyArray.map((_, index) => <S.Line key={`${index}_line`} />);

  return (
    <S.Navigation onClick={onClick} aria-hidden="true">
      {lines}
    </S.Navigation>
  );
}

export default Burger;
