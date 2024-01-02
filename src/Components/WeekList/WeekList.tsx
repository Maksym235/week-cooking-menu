import styles from "./WeekList.module.css";
import { WeekDay } from "../WeekDay/WeekDay.tsx";
import { useQuery, gql } from "@apollo/client";
const WEEK_LIST = gql`
  query Query($getWeekByIdId: ID!) {
    getWeekById(id: $getWeekByIdId) {
      period1
      period2
      monday {
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
      tuesday {
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
      wednesday {
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
      thursday {
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
      friday {
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
      saturday {
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
      sunday {
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
const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = "rgb(" + red + "," + green + "," + blue + ")";
  return color;
};

export const WeekList = () => {
  const { data, loading, error } = useQuery(WEEK_LIST, {
    variables: {
      getWeekByIdId: "656b864e3f291f75643930d8",
    },
  });
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <section className={styles.conteiner}>
      <ul className={styles.list}>
        {week.map((item: { day: string; key: number }) => (
          <li key={item.key}>
            <WeekDay color={getRandomColor()} title={item.day} />
          </li>
        ))}
      </ul>
    </section>
  );
};
