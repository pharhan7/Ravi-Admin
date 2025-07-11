import React from 'react';

const TodayStats = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-neutral mb-4">Today's Stats</h3>
      <div className="space-y-2 text-sm text-neutral">
        <div className="flex justify-between"><span>Money Earned</span><span>$120.00</span></div>
        <div className="flex justify-between"><span>Money Collected</span><span>$81.00</span></div>
        <div className="flex justify-between"><span>Money Refunded</span><span>$3.00</span></div>
        <hr />
        <div className="flex justify-between"><span>Jobs Completed</span><span>14</span></div>
        <div className="flex justify-between"><span>Jobs Assigned</span><span>20</span></div>
        <div className="flex justify-between"><span>Jobs Created</span><span>23</span></div>
      </div>
    </div>
  );
};

export default TodayStats;
