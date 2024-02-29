import { PageBar } from "../../Components/PageBar/PageBar";
import { SettingsBlock } from "../../Components/SettingsBlock/SettingsBlock";
import styles from "./SettingsMenu.module.css";
export const Settings = () => {
	return (
		<main className={styles.main_container}>
			<PageBar title="Settings" />
			<div className={styles.main_block}>
				<SettingsBlock />
				<button className={styles.logout_btn}>Logout</button>
			</div>
		</main>
	);
};
