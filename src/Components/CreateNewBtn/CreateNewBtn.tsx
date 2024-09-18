import { AiOutlinePlus } from 'react-icons/ai';
import styles from './CreateNewBtn.module.css';
import { Popover } from 'antd';
import { useLocation } from 'react-router-dom';

export const CreateNewBtn = () => {
  const { pathname } = useLocation();
  return (
    <Popover
      content={`Create new ${pathname === '/ingredients' && 'ingredients'}`}
    >
      <button className={styles.btn}>
        <AiOutlinePlus color='#ffffff' size={40} />
      </button>
    </Popover>
  );
};
