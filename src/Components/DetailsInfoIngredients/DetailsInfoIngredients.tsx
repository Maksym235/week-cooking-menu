import { useTranslation } from "react-i18next";
import styles from "./DetailsInfoingredients.module.css";
import { useQuery, gql } from "@apollo/client";
export const DetailsInfoIngredients = ({ item }: any) => {
	const { t } = useTranslation();
	const INGREDIENT = gql`
		query Query($getIngByIdId: ID!) {
			getIngById(id: $getIngByIdId) {
				id
				name
				category
				defaultValue
				description
			}
		}
	`;

	const { data, loading, error } = useQuery(INGREDIENT, {
		variables: {
			getIngByIdId: item.id,
		},
	});
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return (
		<div className={styles.conteiner}>
			<div className={styles.main_info_block}>
				<div className={styles.infoHeader}>
					<p className={styles.title}>{t(`IngredientsPage.ingDesc`)}</p>
					<button className={styles.button}>
						{t(`IngredientsPage.addToShopList`)}
					</button>
				</div>
				<div className={styles.infoConteiner}>
					<img className={styles.img} src={item.img} alt={item.name} />
					<div className={styles.textWrapper}>
						<h3 className={styles.text}>
							{t(`IngredientsPage.name`)}:
							<span className={styles.spanText}>{data.getIngById.name}</span>
						</h3>
						<p className={styles.text}>
							{t(`IngredientsPage.category`)}:
							<span className={styles.spanText}>
								{data.getIngById.category}
							</span>
						</p>
						<p className={styles.text}>
							{t(`IngredientsPage.default`)}:
							<span className={styles.spanText}>
								{data.getIngById.defaultValue}
								{t(`IngredientsPage.gram`)}
							</span>
						</p>
						<p className={styles.text}>
							{t(`IngredientsPage.desc`)}:
							<span className={styles.spanDescription}>
								{data.getIngById.description}
							</span>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
