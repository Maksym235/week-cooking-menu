import React, { useState } from "react";
import { NewWeekDay } from "../NewWeekDay";
import styles from "./Slider.module.css";
import { week } from "../../../WeekList/WeekList";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "antd";
export const SliderComponent = ({
	data,
	day,
	breakfastDishes,
	lunchDishes,
	dinerDishes,
}: any) => {
	const swiper = useSwiper();
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
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					cssMode={true}
					navigation={true}
					// pagination={true}
					// mousewheel={true}
					// keyboard={true}
					modules={[Navigation]}
					onSlideChange={() => console.log("")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{week.map((item: { key: number; day: string }) => (
						<SwiperSlide>
							<NewWeekDay
								day={item.day}
								breakfastDishes={breakfastDishes}
								lunchDishes={lunchDishes}
								dinnerDishes={dinerDishes}
							/>
						</SwiperSlide>
					))}
					{/* <SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide> */}
					...
				</Swiper>

				{/* {week.map(
					(item: { key: number; day: string }) =>
						item.key === currentIndex && (
							<NewWeekDay
								day={item.day}
								breakfastDishes={breakfastDishes}
								lunchDishes={lunchDishes}
								dinnerDishes={dinerDishes}
							/>
						),
				)} */}
			</div>
			{/* <button disabled={currentIndex === 0} onClick={() => changeSlide("-")}>
				prew
			</button>
			<button disabled={currentIndex === 6} onClick={() => changeSlide("+")}>
				next
			</button> */}
		</div>
	);
};
