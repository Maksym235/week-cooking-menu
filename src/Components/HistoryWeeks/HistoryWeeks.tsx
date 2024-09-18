import { FC, useState } from 'react';
import styles from './HistoryWeeks.module.css';
import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { Loading } from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ModalConteiner } from '../ModalConteiner/ModalContainer';
import { ShowHistoryList } from '../Modals/ShowHistoryList/ShowHistoryList';
interface IHistoryItem {
  id: string;
  period1: string;
  period2: string;
}
const GET_HISTORY = gql`
  query GetHistory($periods: String) {
    getHistory(periods: $periods) {
      period2
      period1
      id
    }
  }
`;

export const HistoryWeeks: FC = () => {
  const { t } = useTranslation();
  const currentMonday = dayjs().day(1).format('YYYY-MM-DD');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const subtractNumbers = [7, 14, 21];
  const navigate = useNavigate();
  const periods = subtractNumbers
    .map((el) => dayjs(currentMonday).subtract(el, 'days').format('YYYY-MM-DD'))
    .join(', ');
  const { data, loading, error } = useQuery(GET_HISTORY, {
    variables: {
      periods: periods,
      // fetchPolicy: "no-cache",
    },
  });
  const toggleCreateMenuModal = () => {
    setIsOpenModal((state) => !state);
  };

  const handleOpenSelectedMenu = (period: string) => {
    setSelectedPeriod(period);
    setIsOpenModal(true);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    if (error.message === 'not auth' || error.message === 'Unauthorized') {
      navigate('/');
      toast.error(`please sign in or sign up`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    if (error.message === 'Context creation failed: jwt expired') {
      localStorage.clear();
      navigate('/');
      toast.error(`please sign in or sign up`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    // return <div>{error.message}</div>;
  }
  // console.log(data);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t(`History.history`)}</h2>
      <ul className={styles.list}>
        {data &&
          data.getHistory.map(({ id, period1, period2 }: IHistoryItem) => (
            <li
              key={id}
              className={styles.list_item}
              onClick={() => handleOpenSelectedMenu(period1)}
            >
              <div className={styles.period_wrapper}>
                <p>{dayjs(period1).format('DD.MM.YY')}</p>
                {' - '}
                <p>{dayjs(period2).format('DD.MM.YY')}</p>
              </div>
            </li>
          ))}
      </ul>
      <ModalConteiner
        toggleIsOpen={toggleCreateMenuModal}
        isOpen={isOpenModal}
        children={
          <ShowHistoryList
            toggleIsOpen={toggleCreateMenuModal}
            period={selectedPeriod}
          />
        }
      />
    </div>
  );
};
