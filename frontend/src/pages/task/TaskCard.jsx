import React from "react";
import { ArrowUpRight } from "lucide-react";
const TaskCard = () => {
  return (
    <div className="w-[100%] md:w-[100%] rounded-lg border border-black">
      <div className="p-4">
        <h1 className="inline-flex items-center text-xl font-semibold">
          About Macbook &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-lg text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-[15px] font-semibold text-white">
            #dueDate
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-[15px] font-semibold text-white">
            #PRIORITY
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-[15px] font-semibold text-white">
            #complete5
          </span>
        </div>
        <div className="md:flex gap-10 ">
          <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Edit
          </button>
          <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
