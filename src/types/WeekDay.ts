interface IMealtimes {
  id: string;
  name: string;
}

export interface IWeekDay {
  day: string;
  b: IMealtimes;
  l: IMealtimes;
  d: IMealtimes;
  __typename: string;
}
