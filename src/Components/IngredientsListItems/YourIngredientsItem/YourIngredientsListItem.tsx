import styles from "./YourIngredientsListItem.module.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import ArrowSvg from "../../../../public/arow-right.svg?react";
import { FC } from "react";
export type IItem = {
	img?: string;
	isCurrent: boolean;
	name: string;
	id: string;
	description: string;
};
const MAX_LENGTH = 33;
// const description = 'Sadipscing ipsum dolores luptatum labore in sed clita quod diam diam nibh sit facilisi stet. Labore sit soluta dolore amet illum ut et eos stet. Et erat gubergren iriure stet sadipscing dolore no dolor. Ea iriure amet duo justo aliquyam dolor amet dolores ea adipiscing nonumy. Et et labore clita kasd eros duo imperdiet'
export const YourIngredientsListItem: FC<IItem> = ({
	name,
	description,
	isCurrent,
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
				<div className={styles.ing_image}>
					{name ? name.slice(0, 1).toUpperCase() : ""}
				</div>
				<div className={styles.textWrapper}>
					<p className={styles.name}>{name}</p>
					<p className={styles.description}>
						{cutLength(description, MAX_LENGTH)}
					</p>
				</div>
			</div>
			<ArrowSvg
				stroke={isCurrent ? "var(--textColor)" : "var(--silverColor)"}
			/>
			{/* <div className={styles.icon}></div> */}
		</div>
	);
};
