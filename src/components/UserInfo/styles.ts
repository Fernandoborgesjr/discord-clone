import styled from "styled-components";
import { Mic, Headset, Settings } from "styled-icons/material";
export const Container = styled.div`
  grid-area: UI;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--grey);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 40%;
    height: 40%;
    top: 60%;
    left: 60%;
    border-radius: 50%;
    background-color: red;
    border: 2px solid var(--quaternary);
  }
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    font-size: 13px;
    color: var(--grey);
    display: block;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

const IconsConfig = {
  width: 20,
  height: 20,
  color: "symbol",
};

export const MicIcon = styled(Mic)`
  width: ${IconsConfig.width * (80 / 100)}px;
  height: ${IconsConfig.height * (80 / 100)}px;
  color: var(--${IconsConfig.color});
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: ${IconsConfig.width * (80 / 100)}px;
  height: ${IconsConfig.height * (80 / 100)}px;
  color: var(--${IconsConfig.color});
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: ${IconsConfig.width * (80 / 100)}px;
  height: ${IconsConfig.height * (80 / 100)}px;
  color: var(--${IconsConfig.color});
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
