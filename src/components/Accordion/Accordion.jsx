import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordion.scss';
import { accordionHeight } from '../../redux/actions/heightComponents.actions';
import { connect } from 'react-redux';
import SampleQuestions from '../SampleQuestions/SampleQuestions';
import { stateAccordion } from '../../redux/actions/chatWithOpenAi.actions';

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderRadius: '1rem',
  backgroundColor: 'transparent',
  fontSize: '2rem',
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: '#08c',
  margin: '0px',
  borderRadius: '1rem',

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderRadius: '1rem',
}));

const CustomizedAccordions = ({
  setStateAccordion,
  getAccordionHeight,
  expandedAccordion,
}) => {
  const myRef = useRef(null);

  const changeHeight = () => {
    const clientHeight = myRef.current.clientHeight;
    getAccordionHeight(clientHeight);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(changeHeight);
    if (myRef.current) {
      resizeObserver.observe(myRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleChange = panel => (event, newExpanded) => {
    setStateAccordion(newExpanded);
  };

  return (
    <div ref={myRef}>
      <Accordion
        style={{ margin: '0px' }}
        expanded={expandedAccordion}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Sample questions to get you started</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SampleQuestions />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const mapState = state => {
  return {
    expandedAccordion: state.chatWithAi.openAccordion,
  };
};

const mapDispatch = {
  getAccordionHeight: accordionHeight,
  setStateAccordion: stateAccordion,
};

export default connect(mapState, mapDispatch)(CustomizedAccordions);
{
  /* <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */
}
