import { Button } from '../../styles';
import * as S from './styles';

type Props = {
  showFilters: boolean;
};

const LateralBar = ({ showFilters }: Props) => {
  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <S.Campo type="text" name="Buscar" placeholder="Buscar" />
            <S.Filters></S.Filters>
          </>
        ) : (
          <Button>Return to PhoneList</Button>
        )}
      </div>
    </S.Aside>
  );
};

export default LateralBar;
