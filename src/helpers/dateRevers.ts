export const DateRevers = (data: string) => {
  return data.slice(6, 10) + '-' + data.slice(3, 5) + '-' + data.slice(0, 2);
};
