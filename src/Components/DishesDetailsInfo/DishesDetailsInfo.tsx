import { FC } from "react";
import styles from "./DishesDetailsInfo.module.css";
import { IDish } from "../../types/dish";
interface IProps {
	dish: IDish;
	loading: boolean;
}
export const DishesDetailsInfo: FC<IProps> = ({ dish, loading }) => {
	// const categoryData = ["Lunch", "Dinner", "breakfast"];
	if (loading) {
		return <div>Loading</div>;
	}
	return (
		<div className={styles.conteiner}>
			<div className={styles.headerCard}>
				<p>Dishes Details</p>
				<button className={styles.headerBtn}>Edit Details</button>
			</div>
			<div className={styles.detailsConteiner}>
				<img
					src="https://loremflickr.com/640/480/food"
					alt="img"
					className={styles.img}
				/>
				<div className={styles.textConteiner}>
					<div className={styles.NameConteiner}>
						<p className={styles.label}>Name:</p>
						<p>{dish && dish.name}</p>
					</div>
					<div className={styles.CategoryConteiner}>
						<p className={styles.label}>Category:</p>
						<ul className={styles.categoryList}>
							{dish &&
								dish.category.map((item) => (
									<li className={styles.categoryValue}>{item}</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
