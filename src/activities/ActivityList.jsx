import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name + " "}
          <DeleteButton activityId={activity.id} />
        </li>
      ))}
    </ul>
  );
}

function DeleteButton({ activityId }) {
  const { token } = useAuth();
  if (!token) return;
  return (
    <button onClick={() => deleteActivity(token, activityId)}>delete</button>
  );
}
