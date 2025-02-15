import { useState, useEffect } from "react";

const TypeWrite = ({ sentences }) => {
  const [displayedSentences, setDisplayedSentences] = useState([]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    if (sentenceIndex < sentences.length) {
      if (index < sentences[sentenceIndex].length) {
        setTimeout(() => {
          const newText = sentences[sentenceIndex].slice(0, index + 1);
          setText(newText);
          setIndex(index + 1);
        }, 50);
      } else {
        setTimeout(() => {
          setDisplayedSentences((prev) => [...prev, text]); // Store completed sentence
          setText(""); // Reset for next sentence
          setIndex(0);
          setSentenceIndex(sentenceIndex + 1);
        }, 800);
      }
    }
  }, [index, sentenceIndex, sentences, text]);

  return (
    <div className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
      {displayedSentences.map((sentence, i) => (
        <p key={i} className="mb-2">{sentence}</p>
      ))}
      <p>{text}</p>
    </div>
  );
};

export default TypeWrite;