//External Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Internal Dependencies
import FilterCard from '../../components/FilterCard';
import * as S from './styles';
import * as enums from '../../utils/enums/Contact';
import { RootState } from '../../Redux/store';
import { changeTerm } from '../../Redux/filter/slice';
import { Campo } from '../../styles';

type Props = {
  showFilters: boolean;
};

const LateralBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootState) => state.filter);
  const navigate = useNavigate();
  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Campo
              type="text"
              name="Buscar"
              placeholder="Search"
              value={term}
              onChange={(event) => dispatch(changeTerm(event.target.value))}
            />
            <S.Filters>
              <FilterCard subtitle={'All'} criterion={'all'} />
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
          <S.returnBtn type="button" to="/">
            {' '}
            Return to PhoneList
          </S.returnBtn>
        )}
      </div>
    </S.Aside>
  );
};

export default LateralBar;
