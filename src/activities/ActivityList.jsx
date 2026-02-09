import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityList({ activities, syncActivities }) {
  const [error, setError] = useState(null);
  return (
    <>
      {error && <p role="alert">{error}</p>}
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name + " "}
            <DeleteButton
              activityId={activity.id}
              syncActivities={syncActivities}
              setError={setError}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function DeleteButton({ activityId, syncActivities, setError }) {
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
