import React from "react";
import axios from "../axios-activities";

export enum ActivityEnum {
  sleep = "sleep",
  work = "work",
  swim = "swim",
  eat = "eat",
  football = "football",
}

export type Activity = {
  startTime: string;
  endTime: string;
  date: string;
  activity: ActivityEnum;
};

const ActivityContext = React.createContext<Activity[]>([]);
const SetActivityContext = React.createContext<
  React.Dispatch<React.SetStateAction<Activity[]>>
>(() => {});

export const useActivityContext = () => {
  const activities = React.useContext(ActivityContext);
  const setActivities = React.useContext(SetActivityContext);
  if (!activities || !setActivities)
    throw new Error("useActivityContext should be used under ActivityContext");
  return { activities, setActivities };
};

const ActivityProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [activities, setActivities] = React.useState<Activity[]>([]);

  React.useEffect(() => {
    axios
      .get("/activities.json")
      .then((res) => setActivities(Object.values(res.data)))
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <SetActivityContext.Provider value={setActivities}>
      <ActivityContext.Provider value={activities}>
        {children}
      </ActivityContext.Provider>
    </SetActivityContext.Provider>
  );
};

export { ActivityProvider };
