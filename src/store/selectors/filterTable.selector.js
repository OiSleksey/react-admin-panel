export const getArrActiveColumns = state => {
  if (
    !state ||
    !state.filterTable ||
    !state.filterTable.showColumns ||
    state.filterTable.showColumns === {}
  )
    return null;
  const objSwitchFilter = state.filterTable.showColumns;
  let arrActiveColumns = [];
  for (const prop in objSwitchFilter) {
    if (objSwitchFilter[prop]) arrActiveColumns.push(prop);
  }
  //   console.log(arrActiveColumns);

  return arrActiveColumns;
};

export const getObjStateSwitch = state => {
  if (
    !state ||
    !state.filterTable ||
    !state.filterTable.showColumns ||
    state.filterTable.showColumns === {}
  )
    return null;

  const objStateSwitch = state.filterTable.showColumns;

  return objStateSwitch;
};

export const getValueSearch = state => {
  if (!state || !state.filterTable || !state.filterTable.valueSearch)
    return null;

  const valueSearch = state.filterTable.valueSearch;

  return valueSearch;
};
