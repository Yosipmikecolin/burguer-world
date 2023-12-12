export const rangeMin = (item: number) => {
  switch (item) {
    case 1:
      return 0;
    case 2:
      return 4;

    case 3:
      return 8;
    default:
      return 0;
  }
};

export const rangeMax = (item: number) => {
  switch (item) {
    case 1:
      return 4;
    case 2:
      return 8;

    case 3:
      return 12;
    default:
      return 1;
  }
};
