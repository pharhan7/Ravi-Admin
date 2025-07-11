import React from 'react';

const TodayStats = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Today's Stats</h2>

      <div className="mb-4">
          <h3 className="text-sm font-semibold">Money</h3>
        <div className="text-sm">
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="text-gray-600">Money Earned</span>
            <span className="text-gray-900 font-semibold">$120.00</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="text-gray-600">Money Collected</span>
            <span className="text-gray-900 font-semibold">$81.00</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="text-gray-600">Money Refunded</span>
            <span className="text-gray-900 font-semibold">$3.00</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Jobs</h3>
        <div className="text-sm">
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="text-gray-600">Jobs Completed</span>
            <span className="text-gray-900 font-semibold">14</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="text-gray-600">Jobs Assigned</span>
            <span className="text-gray-900 font-semibold">20</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="text-gray-600">Jobs Created</span>
            <span className="text-gray-900 font-semibold">23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayStats;
