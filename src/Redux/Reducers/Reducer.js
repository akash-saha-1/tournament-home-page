const reducer = (
  state = {
    prize: '$350',
    headerprize: '$159.23',
    first: '$200',
    second: '$120',
    third: '$30',
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
