import React from "react";
import { Container, User, Role, Avatar } from "./styles";

export interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Fernando Borges" />
      <Role>Offline - 1</Role>
      <UserRow nickname="Fernando Borges Júnior" isBot />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" isBot />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" isBot />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
      <UserRow nickname="Fernando Borges" />
    </Container>
  );
};

export default UserList;
