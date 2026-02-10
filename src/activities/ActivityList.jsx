import { DeleteButton } from "./DeleteButton";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name + " "}
            <DeleteButton
              activityId={activity.id}
              syncActivities={syncActivities}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
