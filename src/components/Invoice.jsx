import React from 'react';

const Invoice = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <h3 className="font-semibold text-neutral mb-4">Invoicing</h3>
      <div className="flex justify-around mb-4">
        <div className="text-danger font-semibold">$176,772 <p className="text-sm text-neutral font-normal">Due</p></div>
        <div className="text-success font-semibold">$122,644 <p className="text-sm text-neutral font-normal">Paid</p></div>
      </div>
      <hr/>
       <div className="flex justify-between px-6 text-sm text-gray-500 mt-4">
        <div className="flex flex-col items-center">
          <span className="text-black text-lg font-semibold">49</span>
          <span>Currently Due</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-black text-lg font-semibold">543</span>
          <span>All Time Paid</span>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
