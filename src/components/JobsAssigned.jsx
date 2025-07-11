import React from 'react';

const JobsAssigned = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-neutral mb-4">Jobs Assigned</h3>
      <div className="flex items-center justify-center h-32">
        <div className="relative w-24 h-24">
          <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
            <path
              className="text-primary"
              strokeDasharray="100, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="flex items-center justify-center h-full text-lg font-bold text-primary">58%</div>
        </div>
      </div>
      <div className="text-sm text-center text-neutral mt-2">
        Total Assigned vs Total Incoming Jobs
      </div>
    </div>
  );
};

export default JobsAssigned;
