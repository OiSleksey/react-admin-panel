import * as React from 'react';
import { connect } from 'react-redux';
import { getActiveBtnDisplay } from '../../../store/selectors/filterTable.selector';

const escapeRegExp = string => {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
};

const getCorrectVariableString = variable => {
  const correctVariable = variable ? variable + '' : '';
  return correctVariable;
};

const getHighlightedText = (text, higlight) => {
  if (typeof text === 'object') return <React.Fragment>{text}</React.Fragment>;

  const correctText = getCorrectVariableString(text);
  const correctHiglight = getCorrectVariableString(higlight);

  const escapedHighlight = escapeRegExp(correctHiglight);
  const regex = new RegExp(`(${escapedHighlight})`, 'gi');
  const parts = correctText.split(regex);

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === correctHiglight.toLowerCase() ? (
        <b style={{ backgroundColor: '#e8bb49' }}>{part}</b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
};

const HighlightText = ({ higlight, value, activeBtnDisplay }) => {
  if (activeBtnDisplay === 'allUsers')
    return <React.Fragment>{value}</React.Fragment>;
  return <React.Fragment>{getHighlightedText(value, higlight)}</React.Fragment>;
};

const mapState = state => {
  return {
    activeBtnDisplay: getActiveBtnDisplay(state),
  };
};

export default connect(mapState)(HighlightText);
