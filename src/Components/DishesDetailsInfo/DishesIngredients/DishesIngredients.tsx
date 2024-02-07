import styles from "./DishesIngredients.module.css";
export interface IIng {
	img: string;
	name: string;
	id: string;
}
export const DishesIngredients = () => {
	const data: IIng[] = [
		{
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
		},
		{
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
		},
	];
	return (
		<div className={styles.conteiner}>
			<div className={styles.headerCard}>
				<p className={styles.headerTitle}>Dishes ingredients</p>
				<button className={styles.headerBtn}>Edit ingredients</button>
			</div>
			<div className={styles.listConteiner}>
				<ul className={styles.list}>
					{data.map(({ name, img, id }) => (
						<li>
							<div className={styles.itemConteiner}>
								<img src={img} alt={name} className={styles.img} />
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
