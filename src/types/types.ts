export interface FormProps {
  bill: string | number;
  setBill: (item: string | number) => void;
  setTip: (item: string | number) => void;
  people: string | number;
  setPeople: (item: string | number) => void;
  customTip: string | number;
  setCustomTip: (item: string) => void;
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

export interface DisplayProps {
  calculatedTip: number;
  handleResetBtn: () => void;
  people: string | number;
  bill: string | number;
  tip: string | number;
  customTip: string | number;
}
