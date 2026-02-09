import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityList({ activities, syncActivities }) {
  return (
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
  );
}

function DeleteButton({ activityId, syncActivities }) {
  const { token } = useAuth();
  if (!token) return;

  const tryDeleteActivity = async (formData) => {
    setError(null);

    try {
      await deleteActivity(token, activityId);
      syncActivities();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form action={tryDeleteActivity}>
      <button>delete</button>
    </form>
  );
}
