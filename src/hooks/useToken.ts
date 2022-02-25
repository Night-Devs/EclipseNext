import axios from "axios";
import useSWR from "swr";

export default function useToken(code: string) {
  const fetcher = (url: string) =>
    axios.post(url, { code }).then((res) => res.data);
  return useSWR("http://localhost:4000/auth/token", {
    fetcher,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnMount: true,
  });
}
