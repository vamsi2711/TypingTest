import './TypingChallenge.css';

export const TypingChallenge = ({
    timerStarted,
    handleOnType,
    timerValue,
    selectedParagraph
    }) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timerValue<10 ? ('0'+timerValue): timerValue}</p>
                <p className="timer-info" >{!timerStarted &&"Start typing to start the test..."}</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <textarea
                        className="textarea"
                        disabled={true}
                        value={selectedParagraph}
                    />
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e)=>handleOnType(e.target.value)}
                        className="textarea"
                        placeholder="Start typing to start the test"
                    />
                </div>
            </div>
        </div>
    )
}