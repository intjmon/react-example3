import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert("HHH");
  };

  return (
    <>
      {console.log("TEST1")}
      <h1 style={{ color: "red" }}>안녕하세요1!</h1>
      <ColoredMessage color="red"> 헬로?? </ColoredMessage>
      <ColoredMessage color="pink"> 안녕하세요3</ColoredMessage>
      <p>잘 지내시죠?</p>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
