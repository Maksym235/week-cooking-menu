import styles from "./WeekSettingsBlock.module.css";
export const WeekSettingsBlock = ({ openModal }: { openModal: () => void }) => {
	return (
		<div className={styles.container}>
			<button onClick={openModal} className={styles.btn}>
				Create new list
			</button>
			<button className={styles.btn}>save this list</button>
		</div>
	);
};
