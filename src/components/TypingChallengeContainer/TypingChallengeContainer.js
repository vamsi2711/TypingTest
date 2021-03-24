import './TypingChallengeContainer.css';
import { ChallengeDetailsCard } from '../ChallengeDetailsCard/ChallengeDetailsCard';
import { TypingChallenge } from '../TypingChallenge/TypingChallenge';

export const TypingChallengeContainer = ({ 
    timerStarted, 
    timerValue, 
    handleOnType, 
    selectedParagraph,
    words,
    characters,
    mistakes
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard
                    cardName="words"
                    cardValue={words}
                />
                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard
                    cardName="Mistakes"
                    cardValue={mistakes}
                />
            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
                <TypingChallenge
                    selectedParagraph={selectedParagraph}
                    timerStarted={timerStarted}
                    timerValue={timerValue}
                    handleOnType={handleOnType}
                    
                />

            </div>
        </div>
    )
}
