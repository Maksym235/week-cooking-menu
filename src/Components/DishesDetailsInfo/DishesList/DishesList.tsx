import styles from  './DishesList.module.css'
import {FC} from "react";
export interface IIng {
    img: string;
    name: string;
    id: string;
}
export interface ITitle {
    title: string
}
export const DishesList:FC<ITitle> = ({title}) => {
    const data: IIng[] = [{
        img: "https://loremflickr.com/640/480/food",
        name: "Bicycle",
        id: "1",
    },
        {
            img: "https://loremflickr.com/640/480/food",
            name: "male",
            id: "2",
        },
        {
            img: "https://loremflickr.com/640/480/food",
            name: "City",
            id: "3",
        },
        {
            img: "https://loremflickr.com/640/480/food",
            name: "responsive transmitter",
            id: "4",
        },]
return (
    <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
            <p className={styles.listTitle}>{title}</p>
            <ul className={styles.list}>
                {data.map(({img, name, id}) => <li>
                    <div className={styles.itemConteiner}>
                        <img src={img} alt={name}  className={styles.img}/>
                        <div className={styles.textConteiner}>
                            <p className={styles.itemTitle}>{name}</p>
                            <p className={styles.itemText}>200gram</p>
                            <p className={styles.itemText}>{id}</p>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    </div>
);
}

