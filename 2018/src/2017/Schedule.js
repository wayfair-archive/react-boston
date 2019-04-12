import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PageBlock } from './components/Layout';
import { Flex, Box } from 'grid-styled';
import Heading from './components/Heading';

const Time = styled(Box)`
  position: relative;
  font-size: 2em;
  line-height: 1;
  color: ${p => p.theme.color.dark};
  margin-bottom: 0.5em;

  @media (min-width: 40em) {
    padding-top: 24px;
    text-align: right;
    padding-right: 20px;
    padding-bottom: 65px;
    margin-bottom: 0;
    border-right: 1px solid ${p => p.theme.color.light};
  }

  &::after {
    display: block;
    width: 18px;
    height: 18px;
    background: ${p => p.theme.color.white};
    border: 1px solid ${p => p.theme.color.light};
    border-radius: 50%;
    position: absolute;
    left: 100%;
    top: 25px;
    margin-left: -8px;
    @media (min-width: 40em) {
      content: '';
    }
  }
`;

const TalkWrap = styled(Flex)`
  border-bottom: 1px solid #ccc;
  padding: 1em 10px;
  &:nth-of-type(1) {
    ${Time}::before {
      content: '';
      display: block;
      height: 25px;
      width: 2px;
      position: absolute;
      top: 0;
      left: 100%;
      background: #fff;
    }
  }
  &:nth-of-type(even) {
    background: #f2f9fd;
  }
  @media (min-width: 40em) {
    padding: 0;
    border-bottom: 0;
  }
`;

const Hour = styled.span`
  font-size: 2.2rem;
`;

const Details = styled(Box)`
  h2 {
    line-height: 1;
    margin-bottom: 0.25em;
    font-weight: bold;
  }
  @media (min-width: 40em) {
    padding: 20px;
  }
`;

const TalkTitle = styled.h2`
  font-size: 2.6rem;
`;

const Speaker = styled(Box)`
  font-size: 2rem;
`;

const Talk = ({ time, title, speaker }) => (
  <TalkWrap justify="center" flex>
    <Time width={[1, 1 / 3]}>
      <Hour>{time}</Hour>
    </Time>
    <Details width={[1, 2 / 3]}>
      <TalkTitle>{title}</TalkTitle>
      {typeof speaker === 'string' ? <Speaker>{speaker}</Speaker> : null}
      {Array.isArray(speaker) &&
        speaker.map((speaker, i) => (
          <Speaker my={'.15em'} key={i}>
            {speaker}
          </Speaker>
        ))}
    </Details>
  </TalkWrap>
);

const DayHeading = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1em;
`;

const Day = ({ title, talkData }) => (
  <Box mb={40}>
    <DayHeading>{title}</DayHeading>
    {talkData.map(talk => <Talk {...talk} key={talk.time} />)}
  </Box>
);

Day.propTypes = {
  title: PropTypes.string,
  talkData: PropTypes.array
};

const Schedule = ({ talks, id }) => (
  <PageBlock id={id}>
    <Heading title="Schedule" centered />
    <Day title="Day 1: Saturday, September 23" talkData={talks.day1} />
    <Day title="Day 2: Sunday, September 24" talkData={talks.day2} />
  </PageBlock>
);

Schedule.propTypes = {
  talks: PropTypes.object
};

export default Schedule;
