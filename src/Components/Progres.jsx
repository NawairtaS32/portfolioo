import React from 'react';

export default function Progress({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="mx-4 lg:mx-20 my-4">
          <p className="text-start my-2">{item.label}</p>
          <div className="w-full bg-gray-200 rounded-full">
            <div
                className={`h-auto rounded-xl lg:rounded-full 
                ${
                    item.value >= 79
                    ? 'bg-green-500'
                    : item.value >= 68
                    ? 'bg-yellow-600'
                    : 'bg-red-500'
                }`}
              style={{ width: `${item.value}%` }}
            >
              <h1 className=" pr-4 text-lg font-bold text-end">{item.value}%</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
