import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content="First message"
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content={
            <>
              <Mention>TheGamer</Mention>, vou iniciar a partida!
            </>
          }
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content="First message"
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content="First message"
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content="First message"
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content={
            <>
              <Mention>TheGamer</Mention>, vou iniciar a partida!
            </>
          }
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content={
            <>
              <Mention>TheGamer</Mention>, vou iniciar a partida!
            </>
          }
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content="First message"
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content={
            <>
              <Mention>TheGamer</Mention>, vou iniciar a partida!
            </>
          }
        />
        <ChannelMessage
          author="Fernando Borges"
          date="07/06/1996"
          content="First message"
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
