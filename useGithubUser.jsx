import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetch = () => {
    if (username) {
      mutate();
    }
  };

  return {
    user: data,
    error,
    loading: !data && !error,
    refetch,
  };
}
