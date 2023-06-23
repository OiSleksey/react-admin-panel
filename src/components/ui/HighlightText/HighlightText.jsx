import React, { useEffect, useMemo, useState } from 'react';

const list = [
  'This is the first text first',
  'Second',
  'Hi how are you hi!!!',
  'QwiREE',
];

export default function HighlightText() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <input
        label="Text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {list.map(v => (
        <Compo key={v} value={v} higlight={text} />
      ))}
    </div>
  );
}

const Compo = ({ higlight, value }) => {
  return <p>{getHighlightedText(value, higlight)}</p>;
};

function getHighlightedText(text, higlight) {
  // Split text on higlight term, include term itself into parts, ignore case
  var parts = text.split(new RegExp(`(${higlight})`, 'gi'));
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === higlight.toLowerCase() ? (
        <b style={{ backgroundColor: '#e8bb49' }}>{part}</b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}
