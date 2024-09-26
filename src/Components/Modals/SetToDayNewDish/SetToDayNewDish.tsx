import { FC, useState } from 'react';
import Select from 'react-select';
import styles from './SetToDayNewDish.module.css';
import { useQuery, gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { errorOptions } from '../../../utils/toastOptions';
import { Loading } from '../../Loading/Loading';
import {
  IDish,
  ISelectedListCard,
  ISetToDayNewDishProps,
} from '../../../types/dish';
import { ICategoryColors } from '../../../types/category';

const GET_DISHES = gql`
  query Query($mealtime: String) {
    getDishesByMealtime(mealtime: $mealtime) {
      name
      id
      description
      category
    }
  }
`;

const UPDATE_WEEK = gql`
  mutation Mutation($updateWeekId: ID!, $content: UpdateWeek!) {
    updateWeek(id: $updateWeekId, content: $content) {
      period1
      period2
      week {
        l {
          name
          id
        }
        day
        d {
          name
          id
        }
        b {
          name
          id
        }
      }
    }
  }
`;
const categoryColors: ICategoryColors = {
  Breakfast: '#E8E0FF',
  Lunch: '#FFEDC8 ',
  Dinner: '#CCF2FF',
};
// const texzt = "this test desc this test desc this test desc this | 49 length";
// const St = "strawber";
// const ctSt = "Lunch";

export const SelectListCard: FC<ISelectedListCard> = ({
  name,
  desc,
  category,
}) => {
  return (
    <div className={styles.card_Container}>
      <div className={styles.text_wrapper}>
        <p style={{ whiteSpace: 'nowrap' }} className={styles.title}>
          {name}
        </p>
        <p className={styles.service_text}>{desc}</p>
      </div>
      <div className={styles.category_block}>
        {category.map((item) => (
          <p
            style={{
              backgroundColor: categoryColors[item as keyof ICategoryColors],
            }}
            className={`${styles.category_text} ${styles.mealtime}`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export const SetToDayNewDish: FC<ISetToDayNewDishProps> = ({
  mealtime,
  refetchData,
  toggleIsOpen,
  currentDay,
  weekId,
  dayData,
}) => {
  const { t } = useTranslation();
  const [selectedDish, setSelectedDIsh] = useState('');
  const { data, error, loading } = useQuery(GET_DISHES, {
    variables: {
      mealtime: mealtime,
    },
  });
  const [
    updateWeek,
    { data: WeekData, error: WeekError, loading: WeekLoading },
  ] = useMutation(UPDATE_WEEK);
  const navigate = useNavigate();

  if (WeekData) {
    return;
  }
  if (loading || WeekLoading) {
    return <Loading />;
  }
  if (error || WeekError) {
    if (
      error?.message === 'not auth' ||
      error?.message === 'Unauthorized' ||
      WeekError?.message === 'not auth' ||
      WeekError?.message === 'Unauthorized'
    ) {
      navigate('/');
      toast.error(`please sign in or sign up`, errorOptions);
    }
    if (
      error?.message === 'Context creation failed: jwt expired' ||
      WeekError?.message === 'Context creation failed: jwt expired'
    ) {
      localStorage.clear();
      navigate('/');
      toast.error(`please sign in or sign up`, errorOptions);
    }
    return <div>{error?.message}</div>;
  }

  const options = data.getDishesByMealtime.map((dish: IDish) => {
    return {
      value: dish.name,
      label: (
        <SelectListCard
          category={dish.category}
          name={dish.name}
          desc={dish.description ? dish.description : ''}
        />
      ),
    };
  });

  const onSubmit = async () => {
    const dish = data.getDishesByMealtime.find(
      (dish: IDish) => dish.name === selectedDish
    );
    const content: any = {};
    const lowerDayName = currentDay.day.toLowerCase();
    console.log(lowerDayName);
    switch (mealtime) {
      case 'Breakfast':
        content[lowerDayName] = {
          day: currentDay.day,
          b: {
            name: dish.name,
            id: dish.id,
          },
          l: {
            name: dayData.l.name,
            id: dayData.l.id,
          },
          d: {
            name: dayData.d.name,
            id: dayData.d.id,
          },
        };
        break;
      case 'Lunch':
        content[lowerDayName] = {
          day: currentDay.day,
          b: {
            name: dayData.b.name,
            id: dayData.b.id,
          },
          l: {
            name: dish.name,
            id: dish.id,
          },
          d: {
            name: dayData.d.name,
            id: dayData.d.id,
          },
        };
        break;
      case 'Dinner':
        content[lowerDayName] = {
          day: currentDay.day,
          b: {
            name: dayData.b.name,
            id: dayData.b.id,
          },
          l: {
            name: dayData.l.name,
            id: dayData.l.id,
          },
          d: {
            name: dish.name,
            id: dish.id,
          },
        };
        break;
    }
    await updateWeek({
      variables: {
        updateWeekId: weekId,
        content,
      },
    });
    toggleIsOpen();
    await refetchData();
  };
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>
          {t(`Categories.${mealtime.toLowerCase()}`)}
        </p>
      </div>
      <p className={styles.service_text}>
        {t(`Modals.SetToDayNewDish.selectDish`)}
      </p>
      <Select
        onChange={(evt: any) => setSelectedDIsh(evt.value)}
        options={options}
      />
      <button className={styles.submit_btn} onClick={onSubmit} type='submit'>
        {t(`Modals.SetToDayNewDish.submit`)}
      </button>
    </div>
  );
};
