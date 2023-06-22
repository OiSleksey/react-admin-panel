export const getArrActiveColumns = state => {
  if (!state || !state.varFilterTable || state.varFilterTable === {})
    return null;
  const objSwitchFilter = state.varFilterTable;
  let arrActiveColumns = [];
  for (const prop in objSwitchFilter) {
    if (objSwitchFilter[prop]) arrActiveColumns.push(prop);
  }
  //   console.log(arrActiveColumns);
  return arrActiveColumns;
};
