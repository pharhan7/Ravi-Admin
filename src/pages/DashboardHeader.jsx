import React from 'react';

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });

  return (
    <div className="flex items-center justify-between px-8">
      <h2 className="text-xl font-semibold text-neutral">{today}</h2>

      <div className="flex space-x-4">
        <button className="border border-primary text-primary px-6 py-1 rounded-lg hover:bg-primary hover:text-white transition">
          Auto Questionnaire
        </button>

        <button className="bg-primary text-white px-6 py-1 rounded-lg hover:bg-accent transition">
          + Add Job
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
