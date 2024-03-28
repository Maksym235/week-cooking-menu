import React, { useState } from "react";
import { NewWeekDay } from "../NewWeekDay";
import styles from "./Slider.module.css";
import { week } from "../../../WeekList/WeekList";
export const SliderComponent = ({
	data,
	day,
	breakfastDishes,
	lunchDishes,
	dinerDishes,
}: any) => {
	const [currentIndex, setCurrentIndex] = useState(3);
	const [isSlideMoving, setSlideMoving] = useState(false);
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};
	const changeSlide = (key: string) => {
		if (key === "+") {
			setCurrentIndex((state) => state + 1);
		} else {
			setCurrentIndex((state) => state - 1);
		}
	};
	return (
		<div>
			npm
			<div className={styles["slider_block"]}>
				{week.map(
					(item: { key: number; day: string }) =>
						item.key === currentIndex && (
							<NewWeekDay
								day={item.day}
								breakfastDishes={breakfastDishes}
								lunchDishes={lunchDishes}
								dinnerDishes={dinerDishes}
							/>
						),
				)}
			</div>
			<button disabled={currentIndex === 0} onClick={() => changeSlide("-")}>
				prew
			</button>
			<button disabled={currentIndex === 6} onClick={() => changeSlide("+")}>
				next
			</button>
		</div>
	);
};
