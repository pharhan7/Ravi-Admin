import React from 'react';

const Invoice = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <h3 className="font-semibold text-neutral mb-4">Invoicing</h3>
      <div className="flex justify-around mb-4">
        <div className="text-danger font-semibold">$176,772 <p className="text-sm text-neutral font-normal">Due</p></div>
        <div className="text-success font-semibold">$122,644 <p className="text-sm text-neutral font-normal">Paid</p></div>
      </div>
      <div className="flex justify-around text-sm text-neutral">
        <p>49 Currently Due</p>
        <p>543 Total Paid</p>
      </div>
    </div>
  );
};

export default Invoice;
