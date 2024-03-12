import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../Redux/task/action";
const Task = () => {
  const dispatch = useDispatch();

  const { isLoading, taskArray } = useSelector((store) => {
    return store.taskReducer;
  });

  useEffect(() => {
    dispatch(getTasks);
  }, []);

//   console.log(taskArray);

  return (
    <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16 ">
      <TaskCard />
    </div>
  );
};

export default Task;
