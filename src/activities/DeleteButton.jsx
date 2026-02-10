import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export function DeleteButton({ activityId, syncActivities }) {
  const [error, setError] = useState(null);
  const { token } = useAuth();
  if (!token) return;

  const tryDeleteActivity = async () => {
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
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
