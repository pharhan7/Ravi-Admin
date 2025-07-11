const ContactForm = ({ job, onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-2xl p-6 z-50 transition-all duration-300 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-neutral">Job Details</h3>
        <button onClick={onClose} className="text-xl text-red-500 font-bold">×</button>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral">Phone Number</label>
            <input type="text" placeholder="9876543210" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral">Job Id</label>
            <input type="text" value={job.id} readOnly className="mt-1 w-full p-2 border border-gray-300 rounded bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral">First Name</label>
            <input type="text" placeholder="John" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral">Last Name</label>
            <input type="text" placeholder="Doe" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-neutral">Street Address</label>
          <input type="text" placeholder="123 Chimney Rock Road" className="mt-1 w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral">Building Number</label>
            <input type="text" placeholder="B-12" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral">Apartment Number</label>
            <input type="text" placeholder="Flat 403" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-neutral">Zip Code</label>
          <input type="text" placeholder="110001" className="mt-1 w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral">Job Type</label>
            <select className="mt-1 w-full p-2 border border-gray-300 rounded">
              <option>Washing Machine Fix</option>
              <option>Refrigerator Repair</option>
              <option>Air Conditioner Service</option>  
              <option>Geyser Installation</option>
              <option>Ceiling Fan Setup</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-neutral">Job Title</label>
            <input type="text" placeholder="Drum Not Spinning" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-neutral">Job Details</label>
          <textarea placeholder="Washing machine makes loud noise while spinning." className="mt-1 w-full p-2 border border-gray-300 rounded" rows={3} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral">Date</label>
            <input type="date" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral">Time</label>
            <input type="time" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded text-neutral">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
