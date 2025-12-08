import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  questionText: string;
  options: Option[];
  answer: string;
}

interface Option {
  text: string;
  isCorrect?: boolean;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [newTestTitle, setNewTestTitle] = useState('');
  const [newTestDescription, setNewTestDescription] = useState('');
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({ questionText: '', options: [], answer: '' });
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setSelectedTestId(Number(router.query.id));
      fetchTest(Number(router.query.id));
    }
  }, [router.query.id]);

  const fetchTest = async (id: number) => {
    try {
      const response = await axios.get(`/api/tests/${id}`);
      setTests([response.data]);
    } catch (error) {
      console.error('Failed to fetch test:', error);
    }
  };

  const addNewQuestion = () => {
    if (!currentQuestion.questionText || currentQuestion.options.length < 2) return;
    const updatedQuestions = [...tests[selectedTestId ? selectedTestId : -1].questions, currentQuestion];
    setTests((prevTests) =>
      prevTests.map((test) =>
        test.id === (selectedTestId ?? -1)
          ? { ...test, questions: updatedQuestions }
          : test
      )
    );
    setCurrentQuestion({ questionText: '', options: [], answer: '' });
  };

  const updateCurrentQuestion = (field: keyof Question, value: string | Option[]) => {
    if (Array.isArray(value)) {
      setCurrentQuestion((prev) => ({ ...prev, [field]: value }));
    } else {
      setCurrentQuestion((prev) => ({ ...prev, [field]: value as any }));
    }
  };

  const saveTest = async () => {
    try {
      await axios.post('/api/tests', { title: newTestTitle, description: newTestDescription });
      router.push('/');
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Write Tests</h1>
      {selectedTestId ? (
        <>
          <input
            type="text"
            value={newTestTitle}
            onChange={(e) => setNewTestTitle(e.target.value)}
            placeholder="Enter test title"
            aria-label="test-title-input"
            className="p-2 mb-4 border rounded w-full"
          />
          <textarea
            value={newTestDescription}
            onChange={(e) => setNewTestDescription(e.target.value)}
            placeholder="Enter test description"
            rows={3}
            aria-label="test-description-textarea"
            className="p-2 mb-4 border rounded w-full"
          />
          {tests[selectedTestId ? selectedTestId : -1].questions.map((question, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                value={question.questionText}
                onChange={(e) => updateCurrentQuestion('questionText', e.target.value)}
                placeholder="Enter question text"
                aria-label={`question-text-${index}`}
                className="p-2 mb-1 border rounded w-full"
              />
              <div>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="mb-1">
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) =>
                        updateCurrentQuestion('options', [
                          ...question.options.slice(0, optionIndex),
                          { text: e.target.value },
                          ...question.options.slice(optionIndex + 1)
                        ])
                      }
                      placeholder={`Option ${optionIndex + 1}`}
                      aria-label={`question-option-${index}-${optionIndex}`}
                      className="p-2 border rounded w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={addNewQuestion}
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            aria-label="add-question-button"
          >
            Add Question
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={newTestTitle}
            onChange={(e) => setNewTestTitle(e.target.value)}
            placeholder="Enter test title"
            aria-label="test-title-input"
            className="p-2 mb-4 border rounded w-full"
          />
          <textarea
            value={newTestDescription}
            onChange={(e) => setNewTestDescription(e.target.value)}
            placeholder="Enter test description"
            rows={3}
            aria-label="test-description-textarea"
            className="p-2 mb-4 border rounded w-full"
          />
          <button
            onClick={saveTest}
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            aria-label="save-test-button"
          >
            Save Test
          </button>
        </div>
      )}
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  questionText: string;
  options: Option[];
  answer: string;
}

interface Option {
  text: string;
  isCorrect?: boolean;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [newTestTitle, setNewTestTitle] = useState('');
  const [newTestDescription, setNewTestDescription] = useState('');
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({ questionText: '', options: [], answer: '' });
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setSelectedTestId(Number(router.query.id));
      fetchTest(Number(router.query.id));
    }
  }, [router.query.id]);

  const fetchTest = async (id: number) => {
    try {
      const response = await axios.get(`/api/tests/${id}`);
      setTests([response.data]);
    } catch (error) {
      console.error('Failed to fetch test:', error);
    }
  };

  const addNewQuestion = () => {
    if (!currentQuestion.questionText || currentQuestion.options.length < 2) return;
    const updatedQuestions = [...tests[selectedTestId ? selectedTestId : -1].questions, currentQuestion];
    setTests((prevTests) =>
      prevTests.map((test) =>
        test.id === (selectedTestId ?? -1)
          ? { ...test, questions: updatedQuestions }
          : test
      )
    );
    setCurrentQuestion({ questionText: '', options: [], answer: '' });
  };

  const updateCurrentQuestion = (field: keyof Question, value: string | Option[]) => {
    if (Array.isArray(value)) {
      setCurrentQuestion((prev) => ({ ...prev, [field]: value }));
    } else {
      setCurrentQuestion((prev) => ({ ...prev, [field]: value as any }));
    }
  };

  const saveTest = async () => {
    try {
      await axios.post('/api/tests', { title: newTestTitle, description: newTestDescription });
      router.push('/');
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Write Tests</h1>
      {selectedTestId ? (
        <>
          <input
            type="text"
            value={newTestTitle}
            onChange={(e) => setNewTestTitle(e.target.value)}
            placeholder="Enter test title"
            aria-label="test-title-input"
            className="p-2 mb-4 border rounded w-full"
          />
          <textarea
            value={newTestDescription}
            onChange={(e) => setNewTestDescription(e.target.value)}
            placeholder="Enter test description"
            rows={3}
            aria-label="test-description-textarea"
            className="p-2 mb-4 border rounded w-full"
          />
          {tests[selectedTestId ? selectedTestId : -1].questions.map((question, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                value={question.questionText}
                onChange={(e) => updateCurrentQuestion('questionText', e.target.value)}
                placeholder="Enter question text"
                aria-label={`question-text-${index}`}
                className="p-2 mb-1 border rounded w-full"
              />
              <div>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="mb-1">
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) =>
                        updateCurrentQuestion('options', [
                          ...question.options.slice(0, optionIndex),
                          { text: e.target.value },
                          ...question.options.slice(optionIndex + 1)
                        ])
                      }
                      placeholder={`Option ${optionIndex + 1}`}
                      aria-label={`question-option-${index}-${optionIndex}`}
                      className="p-2 border rounded w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={addNewQuestion}
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            aria-label="add-question-button"
          >
            Add Question
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={newTestTitle}
            onChange={(e) => setNewTestTitle(e.target.value)}
            placeholder="Enter test title"
            aria-label="test-title-input"
            className="p-2 mb-4 border rounded w-full"
          />
          <textarea
            value={newTestDescription}
            onChange={(e) => setNewTestDescription(e.target.value)}
            placeholder="Enter test description"
            rows={3}
            aria-label="test-description-textarea"
            className="p-2 mb-4 border rounded w-full"
          />
          <button
            onClick={saveTest}
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            aria-label="save-test-button"
          >
            Save Test
          </button>
        </div>
      )}
    </div>
  );
};

export default WriteTests;