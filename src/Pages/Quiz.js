import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const QuizGame = () => {

    const [quizData, setQuizData] = useState([]);
    const [questNumber, setQuestNumber] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [result, setResult] = useState(null);
    const [disableButton, setDisableButton] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5 * 60);



    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('https://vikrant.westonik.com/quiz.php');
                setQuizData(response.data);

                const initialAnswers = response.data.map(() => null);
                setAnswers(initialAnswers);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
                alert('Failed to fetch quiz data. Please try again later.');
            }
        };

        fetchQuestions();

        // ============================================ //



    }, []);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);


            return () => clearInterval(timer);
        } else {
            setDisableButton(true);
        }
    }, [timeLeft]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };


    const filteredQuestion = useMemo(() => {
        return quizData.length > 0 ? quizData[questNumber] : null;
    }, [quizData, questNumber]);



    const nextQuestion = () => {
        setQuestNumber((prev) => prev + 1);
    };

    const prevQuestion = () => {
        setQuestNumber((prev) => prev - 1);
    };

    const handleAnswerChange = (e) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questNumber] = e.target.value;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        console.log('Submitted Answers:', answers);

        // Check answers and calculate result
        let correctCount = 0;
        answers.forEach((answer, index) => {
            const correctAnswer = quizData[index]?.ans;
            const selectedAnswer = quizData[index]?.[answer];

            if (selectedAnswer === correctAnswer) {
                correctCount++;
            }
        });

        const totalQuestions = quizData.length;
        const score = (correctCount / totalQuestions) * 100;

        setResult({ correctCount, totalQuestions, score });
        setQuizSubmitted(true);
    };

    return (
        <>
            <Header
                profile={false}
                goBackTo={'/quiz-category'}
                title={'Quiz'}
                showSearch={false}
                rightSec={
                    <span
                        className={`border rounded text-white ${quizSubmitted ? 'd-none' : ''}`}
                        style={{
                            width: '60px',
                            height: '40px',
                            display: 'grid',
                            placeItems: 'center',
                            background: '#1DCC70'
                        }}
                    >
                        {formatTime(timeLeft)}
                    </span>
                }
            />

            <div
                style={{
                    width: '100vw',
                    height: 'calc(100vh - 56px)',
                    padding: '0 0 60px 0',
                }}
            >
                {quizData.length > 0 && !quizSubmitted ? (
                    <div className="bg-white py-4 px-3 rounded shadow border w-100 h-100" style={{ position: 'relative' }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="h5 mb-0">Question: {questNumber + 1}</p>
                        </div>

                        {filteredQuestion ? (
                            <>
                                <div className="mb-4">
                                    <p>{filteredQuestion.quest}</p>
                                </div>

                                <div className="d-flex flex-column gap-2 mb-4">
                                    {['opt_a', 'opt_b', 'opt_c', 'opt_d'].map((opt, index) => (
                                        <label
                                            key={index}
                                            className="option-check form-check border pl-4 py-3 rounded shadow-sm"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="Ans"
                                                value={opt}
                                                onChange={handleAnswerChange}
                                                checked={answers[questNumber] === opt}
                                            />
                                            {filteredQuestion[opt]}
                                        </label>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p>No question available</p>
                        )}

                        <div className="d-flex justify-content-between align-items-center px-2" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0' }}>
                            <button
                                onClick={prevQuestion}
                                className="btn btn-outline-danger d-flex align-items-center"
                                style={{ height: '40px' }}
                                disabled={questNumber === 0 || disableButton}
                            >
                                <ion-icon name="arrow-back-outline"></ion-icon>
                                <span className=''>Previous</span>
                            </button>


                            <button
                                className="btn btn-success shadow"
                                style={{ height: '40px' }}
                                data-toggle="modal" data-target="#DialogBasic"
                            >
                                Submit
                            </button>

                            <button
                                onClick={nextQuestion}
                                className="btn btn-outline-success d-flex align-items-center"
                                style={{ height: '40px' }}
                                disabled={questNumber + 1 === quizData.length || disableButton}
                            >
                                <span className=''>Next</span>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </button>

                        </div>
                    </div>
                ) : quizSubmitted ? (
                    <div className="text-center py-5">
                        <h3>Quiz Completed!</h3>
                        <p>
                            You got {result.correctCount} out of {result.totalQuestions} correct answers <br /> (
                            {result.score.toFixed(2)}%).
                        </p>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <div className="spinner-border text-success" role="status"></div>
                    </div>
                )}
            </div>

            {/* Submit Confirmation Toast */}

            <div id="appCapsule" className='m-0 p-0'>

                <div className="modal fade dialogbox" id="DialogBasic" data-backdrop="static" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title d-flex align-items-center">
                                    <span>
                                        Submit Quiz
                                    </span>
                                </h5>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to Submit ?
                            </div>
                            <div className="modal-footer">
                                <div className="btn-inline align-item-center">
                                    <div className="btn btn-text-secondary py-3"
                                        data-dismiss="modal"
                                        style={{ cursor: 'pointer', fontWeight: '500' }}>Cancel</div>
                                    <div className="btn btn-text-primary py-3" data-dismiss="modal" style={{ cursor: 'pointer', fontWeight: '500' }}
                                        onClick={handleSubmit}>OK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizGame;
