import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [newGame, setNewGame] = useState(true);
  const [player1, setPlayer1] = useState(true);
  const [activeSquare1, setActiveSquare1] = useState(true);
  const [activeSquare2, setActiveSquare2] = useState(true);
  const [activeSquare3, setActiveSquare3] = useState(true);
  const [activeSquare4, setActiveSquare4] = useState(true);
  const [activeSquare5, setActiveSquare5] = useState(true);
  const [activeSquare6, setActiveSquare6] = useState(true);
  const [activeSquare7, setActiveSquare7] = useState(true);
  const [activeSquare8, setActiveSquare8] = useState(true);
  const [activeSquare9, setActiveSquare9] = useState(true);
  const [resetActive, setResetActive] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(false);
  const [player2Wins, setPlayer2Wins] = useState(false);
  const [gameTied, setGameTied] = useState(false);
  const [square1Output, setSquare1Output] = useState("");
  const [square2Output, setSquare2Output] = useState("");
  const [square3Output, setSquare3Output] = useState("");
  const [square4Output, setSquare4Output] = useState("");
  const [square5Output, setSquare5Output] = useState("");
  const [square6Output, setSquare6Output] = useState("");
  const [square7Output, setSquare7Output] = useState("");
  const [square8Output, setSquare8Output] = useState("");
  const [square9Output, setSquare9Output] = useState("");

  const gameStart = () => {
    newGame && setNewGame(false);
    !resetActive && setResetActive(true);
  };

  const playSq1 = () => {
    player1 ? setSquare1Output("X") : setSquare1Output("O");
    player1
      ? (document.querySelector("#square1Symbol").innerHTML = "X")
      : (document.querySelector("#square1Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    activeSquare1 && setActiveSquare1(false);
    return;
  };
  const playSq2 = () => {
    player1 ? setSquare2Output("X") : setSquare2Output("O");
    player1
      ? (document.querySelector("#square2Symbol").innerHTML = "X")
      : (document.querySelector("#square2Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    activeSquare2 && setActiveSquare2(false);
  };
  const playSq3 = () => {
    player1
      ? (document.querySelector("#square3Symbol").innerHTML = "X")
      : (document.querySelector("#square3Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare3Output("X") : setSquare3Output("O");
    activeSquare3 && setActiveSquare3(false);
  };
  const playSq4 = () => {
    player1
      ? (document.querySelector("#square4Symbol").innerHTML = "X")
      : (document.querySelector("#square4Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare4Output("X") : setSquare4Output("O");
    activeSquare4 && setActiveSquare4(false);
  };
  const playSq5 = () => {
    player1
      ? (document.querySelector("#square5Symbol").innerHTML = "X")
      : (document.querySelector("#square5Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare5Output("X") : setSquare5Output("O");
    activeSquare5 && setActiveSquare5(false);
  };
  const playSq6 = () => {
    player1
      ? (document.querySelector("#square6Symbol").innerHTML = "X")
      : (document.querySelector("#square6Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare6Output("X") : setSquare6Output("O");
    activeSquare6 && setActiveSquare6(false);
  };
  const playSq7 = () => {
    player1
      ? (document.querySelector("#square7Symbol").innerHTML = "X")
      : (document.querySelector("#square7Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare7Output("X") : setSquare7Output("O");
    activeSquare7 && setActiveSquare7(false);
  };
  const playSq8 = () => {
    player1
      ? (document.querySelector("#square8Symbol").innerHTML = "X")
      : (document.querySelector("#square8Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare8Output("X") : setSquare8Output("O");
    activeSquare8 && setActiveSquare8(false);
  };
  const playSq9 = () => {
    player1
      ? (document.querySelector("#square9Symbol").innerHTML = "X")
      : (document.querySelector("#square9Symbol").innerHTML = "O");
    player1 ? setPlayer1(false) : setPlayer1(true);
    player1 ? setSquare9Output("X") : setSquare9Output("O");
    activeSquare9 && setActiveSquare9(false);
  };

  const click1 = () => {
    gameStart();
    playSq1();
  };
  const click2 = () => {
    gameStart();
    playSq2();
  };
  const click3 = () => {
    gameStart();
    playSq3();
  };
  const click4 = () => {
    gameStart();
    playSq4();
  };
  const click5 = () => {
    gameStart();
    playSq5();
  };
  const click6 = () => {
    gameStart();
    playSq6();
  };
  const click7 = () => {
    gameStart();
    playSq7();
  };
  const click8 = () => {
    gameStart();
    playSq8();
  };
  const click9 = () => {
    gameStart();
    playSq9();
  };

  const resetClick = () => {
    setNewGame(true);
    setPlayer1(true);
    setActiveSquare1(true);
    setActiveSquare2(true);
    setActiveSquare3(true);
    setActiveSquare4(true);
    setActiveSquare5(true);
    setActiveSquare6(true);
    setActiveSquare7(true);
    setActiveSquare8(true);
    setActiveSquare9(true);
    setResetActive(false);
    setPlayer1Wins(false);
    setPlayer2Wins(false);
    setGameTied(false);
    setSquare1Output("");
    document.getElementById("square1Symbol").innerHTML="";
    setSquare2Output("");
    document.getElementById("square2Symbol").innerHTML="";
    setSquare3Output("");
    document.getElementById("square3Symbol").innerHTML="";
    setSquare4Output("");
    document.getElementById("square4Symbol").innerHTML="";
    setSquare5Output("");
    document.getElementById("square5Symbol").innerHTML="";
    setSquare6Output("");
    document.getElementById("square6Symbol").innerHTML="";
    setSquare7Output("");
    document.getElementById("square7Symbol").innerHTML="";
    setSquare8Output("");
    document.getElementById("square8Symbol").innerHTML="";
    setSquare9Output("");
    document.getElementById("square9Symbol").innerHTML="";
  };

  const sq123 = () => {
    let sq1Highlight = document.getElementById("square1");
    sq1Highlight.classList.add("highlight");
    let sq2Highlight = document.getElementById("square2");
    sq2Highlight.classList.add("highlight");
    let sq3Highlight = document.getElementById("square3");
    sq3Highlight.classList.add("highlight");
  }
  const sq147 = () => {
    let sq1Highlight = document.getElementById("square1");
    sq1Highlight.classList.add("highlight");
    let sq4Highlight = document.getElementById("square4");
    sq4Highlight.classList.add("highlight");
    let sq7Highlight = document.getElementById("square7");
    sq7Highlight.classList.add("highlight");
  }
  const sq159 = () => {
    let sq1Highlight = document.getElementById("square1");
    sq1Highlight.classList.add("highlight");
    let sq5Highlight = document.getElementById("square5");
    sq5Highlight.classList.add("highlight");
    let sq9Highlight = document.getElementById("square9");
    sq9Highlight.classList.add("highlight");
  }
  const sq258 = () => {
    let sq2Highlight = document.getElementById("square2");
    sq2Highlight.classList.add("highlight");
    let sq5Highlight = document.getElementById("square5");
    sq5Highlight.classList.add("highlight");
    let sq8Highlight = document.getElementById("square8");
    sq8Highlight.classList.add("highlight");
  }
  const sq357 = () => {
    let sq3Highlight = document.getElementById("square3");
    sq3Highlight.classList.add("highlight");
    let sq5Highlight = document.getElementById("square5");
    sq5Highlight.classList.add("highlight");
    let sq7Highlight = document.getElementById("square7");
    sq7Highlight.classList.add("highlight");
  }
  const sq369 = () => {
    let sq3Highlight = document.getElementById("square3");
    sq3Highlight.classList.add("highlight");
    let sq6Highlight = document.getElementById("square6");
    sq6Highlight.classList.add("highlight");
    let sq9Highlight = document.getElementById("square9");
    sq9Highlight.classList.add("highlight");
  }
  const sq456 = () => {
    let sq4Highlight = document.getElementById("square4");
    sq4Highlight.classList.add("highlight");
    let sq5Highlight = document.getElementById("square5");
    sq5Highlight.classList.add("highlight");
    let sq6Highlight = document.getElementById("square6");
    sq6Highlight.classList.add("highlight");
  }
  const sq789 = () => {
    let sq7Highlight = document.getElementById("square7");
    sq7Highlight.classList.add("highlight");
    let sq8Highlight = document.getElementById("square8");
    sq8Highlight.classList.add("highlight");
    let sq9Highlight = document.getElementById("square9");
    sq9Highlight.classList.add("highlight");
  }

  const gameCheck = () => {
    if (
      square1Output === square2Output &&
      square2Output === square3Output &&
      square3Output === "X"
    ) {
      setPlayer1Wins(true);
      sq123();
    } else if (
      square1Output === square4Output &&
      square4Output === square7Output &&
      square7Output === "X"
    ) {
      setPlayer1Wins(true);
      sq147();
    } else if (
      square1Output === square5Output &&
      square5Output === square9Output &&
      square9Output === "X"
    ) {
      setPlayer1Wins(true);
      sq159();
    } else if (
      square2Output === square5Output &&
      square5Output === square8Output &&
      square8Output === "X"
    ) {
      setPlayer1Wins(true);
      sq258();
    } else if (
      square3Output === square6Output &&
      square6Output === square9Output &&
      square9Output === "X"
    ) {
      setPlayer1Wins(true);
      sq369();
    } else if (
      square7Output === square8Output &&
      square8Output === square9Output &&
      square9Output === "X"
    ) {
      setPlayer1Wins(true);
      sq789();
    } else if (
      square4Output === square5Output &&
      square5Output === square6Output &&
      square6Output === "X"
    ) {
      setPlayer1Wins(true);
      sq456();
    } else if (
      square3Output === square5Output &&
      square5Output === square7Output &&
      square7Output === "X"
    ) {
      setPlayer1Wins(true);
      sq357();
    } else if (
      square1Output === square2Output &&
      square2Output === square3Output &&
      square3Output === "O"
    ) {
      setPlayer2Wins(true);
      sq123();
    } else if (
      square1Output === square4Output &&
      square4Output === square7Output &&
      square7Output === "O"
    ) {
      setPlayer2Wins(true);
      sq147();
    } else if (
      square1Output === square5Output &&
      square5Output === square9Output &&
      square9Output === "O"
    ) {
      setPlayer2Wins(true);
      sq159();
    } else if (
      square2Output === square5Output &&
      square5Output === square8Output &&
      square8Output === "O"
    ) {
      setPlayer2Wins(true);
      sq258();
    } else if (
      square3Output === square6Output &&
      square6Output === square9Output &&
      square9Output === "O"
    ) {
      setPlayer2Wins(true);
      sq369();
    } else if (
      square4Output === square5Output &&
      square5Output === square6Output &&
      square6Output === "O"
    ) {
      setPlayer2Wins(true);
      sq456();
    } else if (
      square3Output === square5Output &&
      square5Output === square7Output &&
      square7Output === "O"
    ) {
      setPlayer2Wins(true);
      sq357();
    } else if (
      square7Output === square8Output &&
      square8Output === square9Output &&
      square9Output === "O"
    ) {
      setPlayer2Wins(true);
      sq789();
    } else if (
      square1Output && square2Output &&
      square3Output && square4Output &&
      square5Output && square6Output &&
      square7Output && square8Output &&
      square9Output 
    ) {
      setGameTied(true);
    }
  };

  useEffect(() => {
    gameCheck();
  });

  return (
    <div className="App">
      <div className="screenLeft">
        <div className="status">
          <p
            className={
              !player1 || player1Wins || player2Wins || gameTied
                ? "hiddenStatus"
                : "shownStatus"
            }
          >
            It is your turn, Player 1. You are X
          </p>
          <p
            className={
              player1 || player1Wins || player2Wins || gameTied
                ? "hiddenStatus"
                : "shownStatus"
            }
          >
            It is your turn, Player 2. You are O
          </p>
          <p className={player1Wins ? "shownStatus" : "hiddenStatus"}>
            Game over. <br/>Player 1, you are the winner
          </p>
          <p className={player2Wins ? "shownStatus" : "hiddenStatus"}>
            Game over. <br/>Player 2, you are the winner
          </p>
          <p className={gameTied ? "shownStatus" : "hiddenStatus"}>
            Game over. <br/>You have tied. Press restart to try again.
          </p>
        </div>
      </div>
      <div className="screenMiddle">
        <div className="gameBoard">
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare1
                ? "square squareDeactive"
                : "square"
            }
            id="square1"
            onClick={() => click1()}
          >
            <p className="squareSymbols" id="square1Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare2
                ? "square squareDeactive"
                : "square"
            }
            id="square2"
            onClick={() => click2()}
          >
            <p className="squareSymbols" id="square2Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare3
                ? "square squareDeactive"
                : "square"
            }
            id="square3"
            onClick={() => click3()}
          >
            <p className="squareSymbols" id="square3Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare4
                ? "square squareDeactive"
                : "square"
            }
            id="square4"
            onClick={() => click4()}
          >
            <p className="squareSymbols" id="square4Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare5
                ? "square squareDeactive"
                : "square"
            }
            id="square5"
            onClick={() => click5()}
          >
            <p className="squareSymbols" id="square5Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare6
                ? "square squareDeactive"
                : "square"
            }
            id="square6"
            onClick={() => click6()}
          >
            <p className="squareSymbols" id="square6Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare7
                ? "square squareDeactive"
                : "square"
            }
            id="square7"
            onClick={() => click7()}
          >
            <p className="squareSymbols" id="square7Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare8
                ? "square squareDeactive"
                : "square"
            }
            id="square8"
            onClick={() => click8()}
          >
            <p className="squareSymbols" id="square8Symbol"></p>
          </div>
          <div
            className={
              player1Wins || player2Wins || gameTied || !activeSquare9
                ? "square squareDeactive"
                : "square"
            }
            id="square9"
            onClick={() => click9()}
          >
            <p className="squareSymbols" id="square9Symbol"></p>
          </div>
        </div>
      </div>
      <div className="screenRight">
        <div
          className={resetActive ? "reset" : "resetDeactive"}
          onClick={() => resetClick()}
        ></div>
        <div className={resetActive ? "shownRestart restartText" : "hiddenRestart"}>
          <p>Restart</p>
        </div>
      </div>
    </div>
  );
}

export default App;
