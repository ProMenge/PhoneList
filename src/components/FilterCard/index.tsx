//External Dependencies
import { useDispatch, useSelector } from 'react-redux';

//Internal Dependencies
import * as enums from '../../utils/enums/Contact';
import * as S from './style';
import { RootState } from '../../Redux/store';
import { changeFilter } from '../../Redux/filter/slice';

export type Props = {
  subtitle: string;
  criterion: 'category' | 'all';
  value?: enums.Category;
};

const FilterCard = ({ subtitle, value, criterion }: Props) => {
  const dispatch = useDispatch();
  const { filter, contacts } = useSelector((state: RootState) => state);

  const verifyIfIsActive = () => {
    const sameCriterion = filter.criterion === criterion;
    const sameValue = filter.value === value;

    return sameCriterion && sameValue;
  };

  const countTasks = () => {
    if (criterion === 'all') return contacts.itens.length;
    if (criterion === 'category') {
      return contacts.itens.filter((item) => item.category === value).length;
    }
  };

  const makeTheFilter = () => {
    dispatch(
      changeFilter({
        criterion,
        value,
      })
    );
  };

  const active = verifyIfIsActive();

  const counter = countTasks();
  return (
    <S.Card active={active} onClick={makeTheFilter}>
      <S.Label>{subtitle}</S.Label>
      <S.Label>{counter}</S.Label>
    </S.Card>
  );
};

export default FilterCard;
