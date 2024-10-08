import styled from 'styled-components';

export const CreateContainer = styled.div`
  width: 100%;
  height: max-content;
  border: 1px solid #ff7417;
  border-radius: 8px;
  padding: 2rem 2rem;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  --primary-color: #ff7417;
  --secondary-color: #fff;
  --primary-hover-color: #4096ff;
  --checkbox-diameter: 20px;
  --checkbox-border-radius: 5px;
  --checkbox-border-color: #d9d9d9;
  --checkbox-border-width: 1px;
  --checkbox-border-style: solid;
  --checkmark-size: 1.2;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
    box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
    border-radius: inherit;
    opacity: 0;
    -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  }

  &::before {
    top: 40%;
    left: 50%;
    content: '';
    position: absolute;
    width: 4px;
    height: 7px;
    border-right: 2px solid var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
    -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
    -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
    opacity: 0;
    -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  }

  &:hover {
    border-color: var(--primary-color);
  }

  &:checked {
    background: var(--primary-color);
    border-color: transparent;
  }

  &:checked::before {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
    -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
    transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
    -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }

  &:active:not(:checked)::after {
    -webkit-transition: none;
    -o-transition: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    transition: none;
    opacity: 1;
  }
`;

export const ClubWrapper = styled.div`
  margin: 2rem;
  display: flex;
`;
export const AddMemberContainer = styled.div`
  width: 25%;
  background-color: #ff9045;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 8px;
  height: 82vh;
`;
export const MemberContainer = styled.div`
  margin-left: 1em;
  width: 68%;
  height: 35vh;
  border: 1px solid #ff7417;
  border-radius: 8px;
  padding: 1em;
`;

export const AddButton = styled.div`
  width: max-content;
  border: none;
  border-radius: 6px;
  background-color: black;
  color: #ff9045;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    color: #ff7417;
  }
`;
