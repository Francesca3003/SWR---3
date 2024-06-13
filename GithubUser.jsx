import React from "react";
import { useGithubUser } from "../hooks/useGithubUser";

export function GithubUser({ username }) {
  const { user, error, loading, refetch } = useGithubUser(username);

  return (
    <div>
      <button onClick={refetch}>Refresh User Data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Si è verificato un errore. Riprovare</h1>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login} avatar`} />
          <div>{user.login}</div>
          <div>{user.name}</div>
        </div>
      )}
    </div>
  );
}
