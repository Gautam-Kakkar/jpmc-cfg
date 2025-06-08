    import React from 'react';
    import { Link } from 'react-router-dom';

    function Forms() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2 text-center text-[#ff5f00]">Weekly Survey Form</h1>
            <p className="text-center text-gray-600 mb-6">Please complete this form 5 times per week</p>
            <form className="space-y-6">
            {/* Question 1 */}
            <div>
                <label className="block mb-2 font-medium text-gray-700">
                1. Did you attend all scheduled sessions this week?
                </label>
                <div className="flex gap-6">
                <label className="inline-flex items-center">
                    <input type="radio" name="question1" className="mr-2 accent-[#ff5f00]" />
                    Yes
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="question1" className="mr-2 accent-[#ff5f00]" />
                    No
                </label>
                </div>
            </div>
            {/* Question 2 */}
            <div>
                <label className="block mb-2 font-medium text-gray-700">
                2. Did you complete all assigned tasks?
                </label>
                <div className="flex gap-6">
                <label className="inline-flex items-center">
                    <input type="radio" name="question2" className="mr-2 accent-[#ff5f00]" />
                    Yes
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="question2" className="mr-2 accent-[#ff5f00]" />
                    No
                </label>
                </div>
            </div>
            {/* Question 3 */}
            <div>
                <label className="block mb-2 font-medium text-gray-700">
                3. Are you satisfied with your progress this week?
                </label>
                <div className="flex gap-6">
                <label className="inline-flex items-center">
                    <input type="radio" name="question3" className="mr-2 accent-[#ff5f00]" />
                    Yes
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="question3" className="mr-2 accent-[#ff5f00]" />
                    No
                </label>
                </div>
            </div>
            {/* Question 4 */}
            <div>
                <label className="block mb-2 font-medium text-gray-700">
                4. Did you encounter any blockers or challenges?
                </label>
                <div className="flex gap-6">
                <label className="inline-flex items-center">
                    <input type="radio" name="question4" className="mr-2 accent-[#ff5f00]" />
                    Yes
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="question4" className="mr-2 accent-[#ff5f00]" />
                    No
                </label>
                </div>
            </div>
            {/* Question 5 */}
            <div>
                <label className="block mb-2 font-medium text-gray-700">
                5. Do you need additional support for next week?
                </label>
                <div className="flex gap-6">
                <label className="inline-flex items-center">
                    <input type="radio" name="question5" className="mr-2 accent-[#ff5f00]" />
                    Yes
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="question5" className="mr-2 accent-[#ff5f00]" />
                    No
                </label>
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-[#ff5f00] text-white px-4 py-2 rounded-lg hover:bg-[#e55400] transition-colors font-semibold"
            >
                Submit
            </button>
            </form>
            <div className="mt-6 text-center">
            <Link to="/dashboard" className="text-[#ff5f00] hover:underline">
                Back to Dashboard
            </Link>
            </div>
        </div>
        </div>
    );
    }

    export default Forms;