import React from 'react';
import Button from './components/Button';
import { Container, SectionTitle, SectionWrap } from './components/Layout';
import styled from 'styled-components';
import { schedule } from './api/schedule';
import FilledHeart from 'react-icons/lib/fa/heart';
import EmptyHeart from 'react-icons/lib/fa/heart-o';

const day1 = schedule.filter(talk => talk.day === 1);
const day2 = schedule.filter(talk => talk.day === 2);

const ScheduleContext = React.createContext({ favorites: [], save: null });
class LocalSync extends React.Component {
  getInitialFavorites = () => {
    if (localStorage.getItem('reactBoston')) {
      return localStorage.getItem('reactBoston').split(',');
    } else {
      return [];
    }
  };

  state = {
    favorites: this.getInitialFavorites(),
    save: item =>
      this.setState(prevState => {
        const arr = [...prevState.favorites, ...item];
        localStorage.setItem('reactBoston', arr);
        return {
          favorites: [...new Set(arr)]
        };
      }),
    remove: item =>
      this.setState(prevState => {
        const newArr = prevState.favorites.filter(i => i !== String(item));
        localStorage.setItem('reactBoston', newArr);
        return {
          favorites: [...new Set(newArr)]
        };
      })
  };

  render() {
    return (
      <ScheduleContext.Provider value={this.state}>
        {this.props.children}
      </ScheduleContext.Provider>
    );
  }
}

const StyledSaveButton = styled.button`
  position: absolute;
  top: 1em;
  right: 10px;
  color: ${({ isSaved, theme }) =>
    isSaved ? theme.color.primary : theme.color.dark};
  background: none;
  border-radius: 0;
  border: 0;
  padding: 0;
  font-size: 2rem;
  transition: 0.2s ease-out;
  &:hover,
  &:focus {
    outline: 0;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  }
  &:active {
    transform: scale(1.5) translateY(-2px);
  }
`;

const SaveButton = ({ name }) => {
  return (
    <ScheduleContext.Consumer>
      {({ favorites, save, remove }) => {
        const isSaved = favorites.includes(name);
        return isSaved ? (
          <StyledSaveButton onClick={() => remove([name])} isSaved>
            <FilledHeart />
          </StyledSaveButton>
        ) : (
          <StyledSaveButton onClick={() => save([name])}>
            <EmptyHeart />
          </StyledSaveButton>
        );
      }}
    </ScheduleContext.Consumer>
  );
};

const StyledTalk = styled.li`
  position: relative;
  transition: 0.2s ease-out;
  list-style: none;
  padding: 16px 0;
  ${({ theme }) =>
    theme.media.sm`
      display: grid;
      grid-template-columns: 100px 1fr;
      grid-gap: 20px;
    `};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(0.95);
    background-color: transparent;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0);
    transition: 0.2s ease-out;
    z-index: -1;
  }
  &:focus,
  &:hover {
    &::before {
      background-color: white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  padding-right: 1.5em;
  display: flex;
  align-items: center;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.dark};
  margin-bottom: 0.5em;
`;

const Time = styled.p`
  font-style: italic;
`;

const CurrentDay = styled.div`
  margin-bottom: 1em;
`;

const Switch = styled.button`
  appearance: none;
  line-height: 1;
  cursor: pointer;
  border-radius: 0;
  background: none;
  border: 0;
  font-size: 0.5em;
  color: ${({ theme }) => theme.color.light};
  text-decoration: underline;
  transition: 0.2s ease-out;
  outline: 0;
  margin-left: 20px;
  background: ${({ theme }) => theme.color.white};
  padding: 4px 5px;
  text-decoration: none;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.light};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const Talk = ({ time, title, speaker, description, isSavable = true }) => (
  <StyledTalk>
    <Time>{time}</Time>
    <div>
      <Title>{title}</Title>
      {speaker && <SubTitle>{speaker}</SubTitle>}
      {description && <p>{description}</p>}
      {false && isSavable && <SaveButton name={title} />}
    </div>
  </StyledTalk>
);

class Schedule extends React.Component {
  state = {
    day: 1
  };

  switchDay = () => {
    this.setState(prevState => ({
      day: prevState.day === 1 ? 2 : 1
    }));
  };

  getSchedule = day => (day === 1 ? day1 : day2);

  render() {
    return (
      <LocalSync>
        <SectionWrap id={this.props.id}>
          <Container>
            <SectionTitle>Schedule</SectionTitle>
          </Container>
          <Container>
            <CurrentDay>
              <Title>Day 1</Title>
              <p>Saturday (9.29.18)</p>
            </CurrentDay>
            <ul>
              {this.getSchedule(1).map((item, i) => <Talk key={i} {...item} />)}
            </ul>
          </Container>
          <Container>
            <CurrentDay>
              <Title>Day 2</Title>
              <p>Sunday (9.30.18)</p>
            </CurrentDay>
            <ul>
              {this.getSchedule(2).map((item, i) => <Talk key={i} {...item} />)}
            </ul>
          </Container>
        </SectionWrap>
      </LocalSync>
    );
  }
}

export default Schedule;
