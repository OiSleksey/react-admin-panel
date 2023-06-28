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

export const getActiveBtnDisplay = state => {
  if (!state || !state.filterTable || !state.filterTable.activeBtnDisplay)
    return null;

  const activeBtnDisplay = state.filterTable.activeBtnDisplay;
  return activeBtnDisplay;
};
export const getPrevActiveBtnDisplay = state => {
  if (!state || !state.filterTable || !state.filterTable.prevActiveBtnDisplay)
    return null;

  const prevActiveBtnDisplay = state.filterTable.prevActiveBtnDisplay;
  return prevActiveBtnDisplay;
};
