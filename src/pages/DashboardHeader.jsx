import React from 'react';

const DashboardHeader = () => {
  // Format today's date (e.g., Thursday, 11 July)
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });

  return (
    <div className="flex items-center justify-between px-8 pt-6 pb-4">
      {/* Left: Date */}
      <h2 className="text-xl font-semibold text-neutral">{today}</h2>

      {/* Right: Buttons */}
      <div className="flex space-x-4">
        {/* Auto Questionnaire Button */}
        <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
          Auto Questionnaire
        </button>

        {/* Add Job Button */}
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition">
          + Add Job
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
