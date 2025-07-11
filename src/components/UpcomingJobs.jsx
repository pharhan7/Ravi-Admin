import React from 'react';

const jobs = [
  { id: '001 AAA AA01', time: '4:00 PM, 12 May', status: 'Waiting Technician', color: 'bg-orange-400' },
  { id: '007 AAA AA02', time: '4:00 PM, 12 May', status: 'Waiting Technician', color: 'bg-blue-400' },
  { id: '008 AAA AA03', time: '4:00 PM, 12 May', status: 'Waiting Technician', color: 'bg-cyan-400' },
];

const UpcomingJobs = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-neutral mb-4">Upcoming Jobs</h3>
      <div className="space-y-3">
        {jobs.map((job, idx) => (
          <div key={idx} className={`p-3 rounded-lg text-white ${job.color}`}>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold">{job.id}</h4>
                <p className="text-sm">{job.time}</p>
              </div>
              <span className="text-xs italic">{job.status}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-primary text-sm hover:underline">View All</button>
    </div>
  );
};

export default UpcomingJobs;
