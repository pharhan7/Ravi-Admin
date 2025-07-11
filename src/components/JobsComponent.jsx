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
        {jobs.map((job, id) => (
          <div
            key={id}
            className={`p-4 rounded-lg shadow-sm ${job.color || 'bg-secondary'} flex flex-col cursor-pointer hover:shadow-md transition`}
            onClick={() => onJobClick?.(job)}
          >
            <span className="text-sm font-semibold text-primary">Job Id</span>
            <span className="text-md font-bold text-neutral">{job.id}</span>
            <span className="text-xs text-neutral">Job Scheduled</span>
            <span className="text-sm text-neutral">{job.time}</span>

            <button
              className="mt-2 text-sm text-accent underline text-left hover:text-primary transition"
              onClick={(e) => {
                e.stopPropagation(); 
                onJobClick?.(job);
              }}
            >
              {job.task}
            </button>

            {job.technician && (
              <span className="text-xs italic text-neutral mt-1">
                Technician: {job.technician}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsComponent;
