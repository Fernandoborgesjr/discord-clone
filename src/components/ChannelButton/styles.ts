import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }
  > div.channelOptions {
    display: none;
  }
  &:hover,
  &:active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div.channelOptions {
      display: inline;
    }
  }
`;

const IconsConfig = {
  width: 20,
  height: 20,
  color: "symbol",
};
export const HashtagIcon = styled(Hashtag)`
  width: ${IconsConfig.width}px;
  height: ${IconsConfig.height}px;
  color: var(--${IconsConfig.color});
`;

export const InviteIcon = styled(PersonAdd)`
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
  margin-left: 4px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
