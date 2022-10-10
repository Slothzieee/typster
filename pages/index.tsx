import { NextPage } from "next";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import _ from "lodash";

import getRandomWord from "../utils/pages/getRandomWord";

import Page from "../components/Page";
import WordDisplay from "../components/WordDisplay";
import GameHeader from "../components/GameHeader";
import GameReport from "../components/GameReport";
import axios from "axios";

const Home: NextPage = () => {
  const [randomWord, setRandomWord] = useState<string[]>(getRandomWord());
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [time, setTime] = useState<number>(20);
  const [start, setStart] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const { data: session } = useSession();
  const user = session?.user || { name: "Anonymous" };

  const handleInputOnChange = (event: any) => {
    const value = event.target.value;
    const valueToLowerCase = value.toLowerCase();
    const splittedValue = valueToLowerCase.split("");

    setCurrentWord(splittedValue);
    setInputValue(valueToLowerCase);
  };

  const handleInputOnClick = () => {
    setStart(true);
  };
  console.log("tet");

  useEffect(() => {
    if (!gameOver) {
      setPoints(0);
      setRound(0);
      setGuessedWords([]);
      setRandomWord(getRandomWord());
      setInputValue("");
    }
  }, [gameOver]);

  useEffect(() => {
    (async () => {
      if (start && time > 0) {
        setTimeout(() => {
          setTime((prev) => (prev -= 1));
        }, 1000);
      }

      if (time === 0) {
        setStart(false);
        setTime(20);
        setGameOver(true);

        await axios.post("/api/ranking", {
          username: user.name,
          score: points,
        });
      }
    })();
  }, [start, time]);

  useEffect(() => {
    if (_.isEqual(currentWord, randomWord)) {
      setPoints((prev) => (prev += currentWord.length));
      setRound((prev) => (prev += 1));
      setRandomWord(getRandomWord());
      setInputValue("");
      setCurrentWord([]);
      setGuessedWords((prev) => [...prev, randomWord.join("")]);
    }
  }, [currentWord, randomWord]);

  return (
    <Page title='Typster'>
      <div className='homepage'>
        <div className='homepage__main'>
          <h1>TYPSTER</h1>
          {gameOver && (
            <div className='homepage__game-report'>
              <GameReport
                user={user}
                score={points}
                rounds={round}
                guessedWords={guessedWords}
                setGameOver={setGameOver}
              />
            </div>
          )}

          <h3>Instructions:</h3>
          <p>You will receive points equal to the lenght of the word.</p>
          <p>
            By clicking on the text area here below, you will start the timer,
            get ready!
          </p>
        </div>
        <GameHeader round={round} points={points} time={time} />

        <div className='homepage__word-display'>
          {start && (
            <WordDisplay randomWord={randomWord} currentWord={currentWord} />
          )}
        </div>

        <div className='homepage__game-input'>
          <input
            onClick={handleInputOnClick}
            aria-label='Word'
            value={inputValue}
            onChange={handleInputOnChange}
            placeholder='Type here'
          />
        </div>
      </div>
    </Page>
  );
};

export default Home;
