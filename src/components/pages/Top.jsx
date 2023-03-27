import Anime from "../Anime";
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

function Top() {
  let { data, error, isLoading } = useSWR(
    `https://api.jikan.moe/v4/top/anime`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );
  function handleClick() {
    revalidate();
  }
  if (error) return "An error has occurred.";
  if (isLoading) return "Wait";
  return (
    <div>
      {data.data.map((item) => (
        <Anime key={item.key} item={item} />
      ))}
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}

export default Top;
