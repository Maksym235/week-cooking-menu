import styles from "./WeekList.module.css";
import { WeekDay } from "../WeekDay/WeekDay.tsx";

import { useQuery, gql } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IWeekDay } from "../../types/WeekDay.ts";
import { WeekDaysSideBar } from "../WeekDaysSideBar/WeekDaysSideBar.tsx";
import { WeekSettingsBlock } from "../WeekSettingsBlock/WeekSettingsBlock.tsx";
const WEEK_LIST = gql`
  query Query($getWeekByIdId: ID!) {
    getWeekById(id: $getWeekByIdId) {
      period1
      period2
      week {
        day
        b {
          name
          id
        }
        l {
          name
          id
        }
        d {
          name
          id
        }
      }
    }
  }
`;
const week = [
  {
    day: "Monday",
    key: 1,
  },
  {
    day: "Tuesday",
    key: 2,
  },
  {
    day: "Wednesday",
    key: 3,
  },
  {
    day: "Thursday",
    key: 4,
  },
  {
    day: "Friday",
    key: 5,
  },
  {
    day: "Saturday",
    key: 6,
  },
  {
    day: "Sunday",
    key: 7,
  },
];
// const getRandomColor = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const color = "rgb(" + red + "," + green + "," + blue + ")";
//   return color;
// };

export const WeekList = () => {
  const [currentDay, setCurrentDay] = useState(week[0]);
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(WEEK_LIST, {
    variables: {
      getWeekByIdId: "656b864e3f291f75643930d8",
    },
    fetchPolicy: "no-cache",
  });
  console.log(data);
  const handleSetCurrentDay = (day: { day: string; key: number }) => {
    setCurrentDay(day);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.message === "not auth" || error.message === "Unauthorized") {
      navigate("/");
      toast.error(`please sign in or sign up`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (error.message === "Context creation failed: jwt expired") {
      localStorage.clear();
      navigate("/");
      toast.error(`please sign in or sign up`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return <div>{error.message}</div>;
  }
  return (
    <section className={styles.conteiner}>
      <WeekDaysSideBar
        curDayKey={currentDay.key}
        week={week}
        handleSetCurrentDay={handleSetCurrentDay}
      />
      {week && (
        <WeekDay
          day={
            data &&
            data.getWeekById.week.find(
              (item: IWeekDay) => item.day === currentDay.day.toLowerCase()
            )
          }
        />
      )}
      <WeekSettingsBlock />
      {/* <ul className={styles.list}>
        {week.map((item: { day: string; key: number }) => (
          <li key={item.key}>
            <WeekDay color={getRandomColor()} title={item.day} />
          </li>
        ))}
      </ul> */}
    </section>
  );
};
