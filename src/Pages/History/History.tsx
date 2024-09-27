import { HistoryWeeks } from '../../Components/HistoryWeeks/HistoryWeeks';
import { PageBar } from '../../Components/PageBar/PageBar';
import styles from './History.module.css';
const History = () => {
  return (
    <main className={styles.container}>
      <PageBar title='Історія' />
      <HistoryWeeks />
    </main>
  );
};

export default History;
