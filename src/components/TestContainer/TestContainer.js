import { TryAgain } from '../TryAgain/TryAgain';
import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'

export const TestContainer = ({
    handleOnType,
    timerStarted,
    timerValue,
    triggerTryAgain,
    selectedParagraph,
    words,
    characters,
    mistakes
}) => {
    // temporary var (Will be replaced while building the app)
    //console.log(timerValue)
    return (
        <div className="test-container">
            {/* Show the try again or start screen */}
            {
                timerValue > 0
                    ? <div className="typing-challenge-cont">
                        <TypingChallengeContainer
                            timerStarted = {timerStarted}
                            timerValue = {timerValue}
                            handleOnType = {handleOnType}
                            selectedParagraph = {selectedParagraph}
                            words = {words}
                            characters = {characters}
                            mistakes = {mistakes}
                            />
                    </div>
                    : <div className="try-again-cont">
                        <TryAgain
                            triggerTryAgain={triggerTryAgain}
                            words={words}
                            characters={characters}
                            mistakes={mistakes}
                        />
                    </div>
            }            
        </div>
    )
}