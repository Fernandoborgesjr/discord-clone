import React from "react";
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

// A interrogação na tipagem indica que o item é opcional.

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div className="channelOptions">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;