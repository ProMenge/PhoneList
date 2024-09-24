import FilterCard from '../../components/FilterCard';
import { Button } from '../../styles';
import * as S from './styles';
import * as enums from '../../utils/enums/Contact';

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
            <S.Filters>
              <FilterCard subtitle={'ALL'} criterion={'all'} />
              <FilterCard
                subtitle={'Family'}
                value={enums.Category.FAMILY}
                criterion={'category'}
              />
              <FilterCard
                subtitle={'Pessoal'}
                value={enums.Category.PERSONAL}
                criterion={'category'}
              />
              <FilterCard
                subtitle={'SERVICES'}
                value={enums.Category.SERVICES}
                criterion={'category'}
              />
              <FilterCard subtitle={'WORK'} value={enums.Category.WORK} criterion={'category'} />
            </S.Filters>
          </>
        ) : (
          <Button>Return to PhoneList</Button>
        )}
      </div>
    </S.Aside>
  );
};

export default LateralBar;
