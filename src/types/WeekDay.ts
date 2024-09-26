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
export interface IDataProduct {
  count: number;
  weightType: string;
}

export interface IdataType {
  [key: string]: IDataProduct;
}

export interface IShowProductListProps {
  toggleIsOpen: () => void;
  data: IdataType;
}
// HistoryWeek
export interface IHistoryItem {
  id: string;
  period1: string;
  period2: string;
}

export interface IShowHistoryListProps {
  period: string;
  toggleIsOpen: () => void;
}

export interface IWeekDayProps {
  day: IWeekDay;
  weekId: string;
  togleIsOpen: () => void;
  changeMealtime: any;
}

interface IDay {
  day: string;
  key: number;
}

export interface IWeekDaysSideBarProps {
  week: IDay[];
  curDayKey: number;
  handleSetCurrentDay: (day: IDay) => void;
}

interface IPeriods {
  period1: string;
  period2: string;
}

export interface IWeekSettingsBlockProps {
  openModal: () => void;
  periods: IPeriods;
  refetchData: any;
  weekId: string;
}
