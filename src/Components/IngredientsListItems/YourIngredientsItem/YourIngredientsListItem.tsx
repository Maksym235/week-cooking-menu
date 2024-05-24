import styles from "./YourIngredientsListItem.module.css";
import { FC } from "react";
export type IItem = {
	img?: string;
	name: string;
	id: string;
	description: string;
};
const MAX_LENGTH = 33;
// const description = 'Sadipscing ipsum dolores luptatum labore in sed clita quod diam diam nibh sit facilisi stet. Labore sit soluta dolore amet illum ut et eos stet. Et erat gubergren iriure stet sadipscing dolore no dolor. Ea iriure amet duo justo aliquyam dolor amet dolores ea adipiscing nonumy. Et et labore clita kasd eros duo imperdiet'
export const YourIngredientsListItem: FC<IItem> = ({
	img,
	name,
	description,
}) => {
	const cutLength = (description: string, maxLength: number) => {
		if (description.length > maxLength) {
			description = description.substring(0, maxLength - 3) + "...";
		}
		return description;
	};
	return (
		<div className={styles.conteiner}>
			<div className={styles.wrapper}>
				<img className={styles.ing_image} src={img} alt={name} />
				<div className={styles.textWrapper}>
					<p className={styles.name}>{name}</p>
					<p className={styles.description}>
						{cutLength(description, MAX_LENGTH)}
					</p>
				</div>
			</div>
			<div className={styles.icon}></div>
		</div>
	);
};
