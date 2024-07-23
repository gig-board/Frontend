import React from 'react';
import { ReactComponent as DrumIcon } from '../assets/drum.svg';
import { ReactComponent as VocalIcon } from '../assets/vocal.svg';
import { ReactComponent as KeyboardIcon } from '../assets/Keyboard.svg';
import { ReactComponent as AcousticIcon } from '../assets/acoustic.svg';
import { ReactComponent as BassIcon } from '../assets/BASS.svg';
import { ReactComponent as ElectricIcon } from '../assets/electric.svg';
import styled from 'styled-components';

const CheckBoxWrapper16 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

const CheckBoxIcon = styled.span`
  transition: 0.375s ease;
  color: #494949;
`;

const CheckBoxLabel = styled.span`
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
`;

const CheckBoxInput = styled.input`
  width: 1px;
  height: 1px;
  white-space: nowrap;
  &:checked + span {
    border-color: #ff7417;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #ff7417;

    &:before {
      transform: scale(1);
      opacity: 1;
      background-color: #ff7417;
      border-color: #ff7417;
    }
    ${CheckBoxLabel} {
      color: #ff7417;
    }
    ${CheckBoxIcon} {
      color: #ff7417;
    }
  }

  &:focus + span {
    border-color: #ff7417;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #ffc7a2;

    &:before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CheckBoxTile = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6rem;
  min-height: 6rem;
  border-radius: 0.5rem;
  border: 2px solid #e0e0e0;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #ffc7a2;
    background-color: #fff;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
  }

  &:hover {
    border-color: #ff7417;

    &:before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Session = [
  { text: 'DRUM', icon: DrumIcon },
  { text: 'VOCAL', icon: VocalIcon },
  { text: 'KEYBOARD', icon: KeyboardIcon },
  { text: 'ACOUSTIC', icon: AcousticIcon },
  { text: 'BASS', icon: BassIcon },
  { text: 'ELECTRIC', icon: ElectricIcon },
];

const SessionIcon = () => {
  return (
    <CheckBoxWrapper16>
      {Session.map(item => (
        <CheckBoxWrapper key={item.text}>
          <CheckBoxInput type="checkbox" />
          <CheckBoxTile>
            <CheckBoxIcon as={item.icon} />
            <CheckBoxLabel>{item.text}</CheckBoxLabel>
          </CheckBoxTile>
        </CheckBoxWrapper>
      ))}
    </CheckBoxWrapper16>
  );
};

export default SessionIcon;
