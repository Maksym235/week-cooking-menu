import styles from "./DishesList.module.css";
import { FC } from "react";
export interface IIng {
	name: string;
	id: string;
	category: string[];
}
export interface IProps {
	title: string;
	data: any;
	setDish: (id: string) => void;
}

export const DishesList: FC<IProps> = ({ setDish, data, title }) => {
	const categoryColors: Record<string, string> = {
		Breakfast: "#E8E0FF",
		Lunch: "#FFEDC8 ",
		Dinner: "#CCF2FF",
	};
	const handleSelectDish = (id: string) => {
		setDish(id);
	};
	return (
		<div className={styles.listsContainer}>
			<div className={styles.listWrapper}>
				<p
					style={{ backgroundColor: categoryColors[title] }}
					className={styles.listTitle}
				>
					{title}
				</p>
				<ul className={styles.list}>
					{data &&
						data.map(({ name, id }: IIng) => (
							<li>
								<div
									onClick={() => handleSelectDish(id)}
									className={styles.itemConteiner}
								>
									<img
										src='"https://loremflickr.com/640/480/food"'
										alt={name}
										className={styles.img}
									/>
									<div className={styles.textConteiner}>
										<p className={styles.itemTitle}>{name}</p>
										<p className={styles.itemText}>200gram</p>
										<p className={styles.itemText}>{id}</p>
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
