import React, { useState } from "react";

const NatiqPage = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  // Handel Input Value & Applay Arabic Validation
  const handleInputChange = (e) => {
    const arabicRegex = /[\u0600-\u06FF\s]/;
    const text = e.target.value;
    if (text === "" || arabicRegex.test(text)) {
      setInputText(text);
      setError(null);
    } else {
      setError("Please enter Arabic text only.");
    }
  };
  // Hnadel Button Clicked
  const handleEchoClick = () => {
    // Check if Input is empty or not
    if (inputText === "") {
      setError("Please enter some text.");
      return;
    }
    setLoading(true);

    const formdata = { text: inputText };
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: "follow",
    };

    fetch("https://echo-6sdzv54itq-uc.a.run.app/natiq", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.wave) {
          setOutput(data.wave);
          setError(null);
        } else {
          setOutput(null);
          setError("Error occurred while processing the request.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("Error occurred while processing the request.");
      });
  };

  const convertToRegularBase64 = (urlsafe_b64) => {
    // The  convertToRegularBase64  function is used to convert the urlsafe_b64 audio data to regular base64 format
    const padding = "=".repeat((4 - (urlsafe_b64.length % 4)) % 4);
    const base64 = urlsafe_b64.replace(/-/g, "+").replace(/_/g, "/") + padding;
    return base64;
  };

  return (
    <div className="container-lg pt-4">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-indicator">Loading...</div>
        </div>
      )}
      <div className={loading ? "dimmed" : ""}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button className="global--btn" onClick={handleEchoClick}>
          Echo
        </button>
        {output && (
          <div>
            <p>Output: {inputText}</p>
            <audio
              src={`data:audio/wav;base64,${convertToRegularBase64(output)}`}
              autoPlay
            />
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default NatiqPage;
