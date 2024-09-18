import { useTranslation } from 'react-i18next';
import styles from './EmptyWeek.module.css';
import { gql, useMutation } from '@apollo/client';
import dayjs from 'dayjs';
import { Loading } from '../Loading/Loading';
import { toast } from 'react-toastify';
const CREATE_WEEK = gql`
  mutation Mutation($content: AddWeek!) {
    createWeek(content: $content) {
      week {
        l {
          id
          name
        }
        d {
          name
          id
        }
        day
        b {
          name
          id
        }
      }
      period2
      period1
      id
    }
  }
`;
export const EmptyWeek = ({ refetchData }: any) => {
  const { t } = useTranslation();
  const [createWeek, { data, loading, error }] = useMutation(CREATE_WEEK);
  if (loading) {
    <Loading />;
  }
  if (error) {
    console.log(error);
    toast.error(`${error.message}`, {
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

  const handleCreateList = () => {
    createWeek({
      variables: {
        content: {
          period: dayjs().day(1).format('YYYY-MM-DD'),
        },
      },
    });
  };
  if (data) {
    refetchData({
      period: dayjs().day(1).format('YYYY-MM-DD'),
    });
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t(`EmptyWeek.title`)}</h2>
      <p className={styles.text}>{t(`EmptyWeek.dontHaveList`)}</p>
      <p className={styles.text}>{t(`EmptyWeek.doWantCreate`)}</p>
      <button onClick={handleCreateList} className={styles.btn}>
        {t(`EmptyWeek.create`)}
      </button>
    </div>
  );
};
