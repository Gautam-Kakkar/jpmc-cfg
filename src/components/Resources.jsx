    import React from 'react';

    const Resources = () => {
    // For demo, you can fetch query params if needed
    // const params = new URLSearchParams(window.location.search);
    // const child = params.get('child');
    // const goal = params.get('goal');

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-[#ff5f00] mb-4">Next Step Resources</h1>
            <p className="mb-4 text-gray-700">
            Here are some recommended resources and a video to help you guide your child in their next developmental step.
            </p>
            <ul className="mb-6 list-disc pl-6 text-gray-800">
            <li>Read about the importance of the next milestone for your child's age group.</li>
            <li>Follow the step-by-step guide provided below.</li>
            <li>Watch the demonstration video for practical tips.</li>
            <li>Consult with your child's teacher or pediatrician for personalized advice.</li>
            </ul>
            <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Development Video Example</h2>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/2VbP7l1l4zA"
                title="Child Development Activities for Indian Children"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
            <a
            href="/"
            className="inline-block mt-4 px-4 py-2 bg-[#ff5f00] text-white rounded-lg hover:bg-[#e55400] transition-colors"
            >
            Back to Dashboard
            </a>
        </div>
        </div>
    );
    };

    export default Resources;