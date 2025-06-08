    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    export default function Milestone() {
    const [milestoneData, setMilestoneData] = useState([]);
    const [activeLevel, setActiveLevel] = useState(1);

    // Questions for each level 
    const questions = {
        1: [
        "Did you attend all scheduled sessions this week?",
        "Did you complete all assigned tasks?",
        "Are you satisfied with your progress this week?",
        "Did you encounter any blockers or challenges?",
        "Do you need additional support for next week?"
        ],
        2: [
        "Have you implemented all required features?",
        "Did you document your code properly?",
        "Have you tested your implementation thoroughly?",
        "Did you refactor your code for better readability?",
        "Did you follow the project's coding standards?"
        ],
        3: [
        "Did you collaborate with team members effectively?",
        "Have you completed the code review process?",
        "Did you fix all reported bugs and issues?",
        "Have you improved the application's performance?",
        "Did you meet all acceptance criteria?"
        ],
        4: [
        "Did you deploy the application successfully?",
        "Have you created comprehensive documentation?",
        "Did you conduct a final security check?",
        "Have you created a user guide or tutorial?",
        "Did you gather and implement user feedback?"
        ]
    };

    useEffect(() => {
        const currentMonth = new Date().getMonth();
        const storageKey = `surveyResponses_${activeLevel}_${currentMonth}`;
        const responses = JSON.parse(localStorage.getItem(storageKey) || '[]');
        const submissionCounts = JSON.parse(localStorage.getItem('surveySubmissions') || '{"1":0,"2":0,"3":0,"4":0}');
        const completedCount = submissionCounts[activeLevel] || 0;

        if (responses.length === 0 || completedCount === 0) {
        generateDummyData(Math.min(completedCount || 5, 5));
        } else {
        const data = questions[activeLevel].map((question, index) => {
            const yesCount = responses.reduce((count, response) =>
            count + (response[index] ? 1 : 0), 0);
            const percentage = Math.round((yesCount / 5) * 100);
            return {
            id: `level${activeLevel}-q${index + 1}`,
            question,
            yesCount,
            percentage,
            achieved: yesCount >= 3,
            totalResponses: responses.length,
            maxResponses: 5
            };
        });
        setMilestoneData(data);
        }
    }, [activeLevel]);

    const generateDummyData = (completedCount = 5) => {
        const dummyData = questions[activeLevel].map((question, index) => {
        const probabilityFactor = 0.8 - (index * 0.1);
        let yesCount = 0;
        for (let i = 0; i < completedCount; i++) {
            if (Math.random() < probabilityFactor) {
            yesCount++;
            }
        }
        const percentage = Math.round((yesCount / 5) * 100);
        return {
            id: `level${activeLevel}-q${index + 1}`,
            question,
            yesCount,
            percentage,
            achieved: yesCount >= 3,
            totalResponses: completedCount,
            maxResponses: 5
        };
        });
        setMilestoneData(dummyData);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold mb-4 text-center text-[#ff5f00]">Milestone Status</h1>
            <p className="text-center text-gray-600 mb-6">
            Track your progress towards achieving milestones for each level.
            </p>

            {/* Level Selection */}
            <div className="flex justify-center space-x-4 mb-6">
            {[1, 2, 3, 4].map((level) => (
                <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                    activeLevel === level
                    ? 'bg-[#ff5f00] text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                >
                Level {level}
                </button>
            ))}
            </div>

            <div className="bg-blue-50 rounded-md p-4 mb-6">
            <h3 className="text-md font-medium mb-2">Survey Submission Status:</h3>
            <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-5 mr-2">
                <div
                    className="h-5 rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${(milestoneData[0]?.totalResponses || 0) * 20}%` }}
                ></div>
                </div>
                <span className="text-sm font-medium">
                {milestoneData[0]?.totalResponses || 0}/5 Surveys Submitted
                </span>
            </div>
            {milestoneData[0]?.totalResponses < 5 && (
                <div className="mt-2">
                <Link to="/forms" className="text-sm text-blue-600 hover:underline">
                    Submit more surveys to improve your milestone progress →
                </Link>
                </div>
            )}
            </div>

            <h2 className="text-xl font-semibold mb-4">Level {activeLevel} Milestones</h2>
            <p className="mb-4 text-sm text-gray-600">
            A milestone is achieved when a question receives at least 3 "Yes" answers in the current month.
            </p>

            <table className="min-w-full mb-6">
            <thead>
                <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Question</th>
                <th className="py-2 px-4 text-center">Progress</th>
                <th className="py-2 px-4 text-center">Status</th>
                </tr>
            </thead>
            <tbody>
                {milestoneData.map((item) => (
                <tr key={item.id} className="border-b">
                    <td className="py-3 px-4">{item.question}</td>
                    <td className="py-3 px-4">
                    <div className="flex justify-center items-center">
                        <div className="w-full bg-gray-200 rounded-full h-4 max-w-[200px]">
                        <div
                            className={`h-4 rounded-full transition-all duration-500 ${
                            item.achieved ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${item.percentage}%` }}
                        ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">{item.yesCount}/{item.maxResponses}</span>
                    </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                    {(() => {
                        let statusClass = '';
                        let statusText = '';
                        if (item.achieved) {
                        statusClass = 'bg-green-100 text-green-800';
                        statusText = 'Achieved';
                        } else if (item.yesCount >= 2) {
                        statusClass = 'bg-yellow-100 text-yellow-800';
                        statusText = 'Almost There';
                        } else {
                        statusClass = 'bg-gray-100 text-gray-800';
                        statusText = 'In Progress';
                        }
                        return (
                        <span className={`px-2 py-1 rounded text-sm font-medium ${statusClass}`}>
                            {statusText}
                        </span>
                        );
                    })()}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="bg-white p-3 rounded-lg border border-gray-200 md:flex-1 text-center">
                <div className="text-3xl font-bold text-green-600">
                {milestoneData.filter(item => item.achieved).length}
                </div>
                <div className="text-sm text-gray-600">Milestones Achieved</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 md:flex-1 text-center">
                <div className="text-3xl font-bold text-yellow-600">
                {milestoneData.filter(item => !item.achieved && item.yesCount >= 2).length}
                </div>
                <div className="text-sm text-gray-600">Almost There</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 md:flex-1 text-center">
                <div className="text-3xl font-bold text-gray-600">
                {milestoneData.filter(item => !item.achieved && item.yesCount < 2).length}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
            </div>
            </div>

            <div className="mt-4 p-3 rounded bg-gray-50 border border-gray-200">
            <h4 className="font-medium text-sm mb-2">Milestone Criteria:</h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Each question requires at least 3 "Yes" answers to achieve milestone status</li>
                <li>Maximum of 5 survey submissions per month</li>
                <li>Milestones reset at the beginning of each month</li>
            </ul>
            </div>

            {/* Monthly Progress Tracking */}
            <div className="mt-4">
            <h4 className="font-medium text-sm mb-2">Current Month Progress:</h4>
            <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                className="h-4 rounded-full bg-green-500 transition-all duration-500"
                style={{
                    width: `${
                    milestoneData.length
                        ? (milestoneData.filter(item => item.achieved).length / milestoneData.length) * 100
                        : 0
                    }%`
                }}
                ></div>
            </div>
            <div className="mt-2 text-sm text-gray-600 text-right">
                {milestoneData.length
                ? Math.round((milestoneData.filter(item => item.achieved).length / milestoneData.length) * 100)
                : 0}% Complete
            </div>
            </div>

            <div className="mt-8 text-center">
            <Link to="/dashboard" className="text-[#ff5f00] hover:underline font-semibold">
                ← Back to Dashboard
            </Link>
            </div>
        </div>
        </div>
    );
    }