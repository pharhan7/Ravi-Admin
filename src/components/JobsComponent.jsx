
const JobsComponent = ({ title, jobs, filter = false, onJobClick }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-neutral">{title} ({jobs.length})</h3>

        {filter && (
          <div className="flex gap-2">
            <button className="text-xs px-3 py-1 rounded-full bg-primary text-white">Today</button>
            <button className="text-xs px-3 py-1 rounded-full bg-secondary text-neutral">This Week</button>
            <button className="text-xs px-3 py-1 rounded-full bg-secondary text-neutral">This Month</button>
          </div>
        )}
      </div>

      {/* Job Cards */}
      <div className="space-y-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col gap-1 cursor-pointer hover:shadow transition duration-200"
            onClick={() => onJobClick?.(job)}
          >
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium text-neutral-500">Job Id</div>
              <div className="text-xs text-neutral-400">{job.time}</div>
            </div>

            <div className="text-base font-semibold text-neutral-800">{job.id}</div>

            <button
              className="text-sm text-primary font-medium underline text-left hover:text-blue-600 transition"
              onClick={(e) => {
                e.stopPropagation();
                onJobClick?.(job);
              }}
            >
              {job.task}
            </button>

            {job.technician && (
              <div className="flex items-center mt-2 space-x-2">
                <img
                  src={job.technicianAvatar || `https://i.pravatar.cc/100?u=${job.technician}`}
                  alt="technician"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-xs text-neutral-600 italic">{job.technician}</span>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default JobsComponent;
