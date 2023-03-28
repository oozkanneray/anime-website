import { useState } from "react";
import useSWR from "swr"
import TopList from "../TopList";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Top() {

  const [page,setPage] = useState(1);

  let { data, error, isLoading } = useSWR(
    `https://api.jikan.moe/v4/top/anime?page=${page}`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );
  function handleClick() {
    revalidate();
  }

  const pageDown = () => {
    if(page == 1) {
      return null
    }
    else {
      setPage(page - 1)
    }
  }

  const pageUp = () => {
    setPage(page + 1)
  }

  if (error) return "An error has occurred.";
  if (isLoading) return "Wait";
  return (
    <div>
      {data.data.map((item) => (
        <TopList key={item.key} item={item} />
      ))}
      {handleClick}
      <div className="flex flex-row justify-center items-center p-16">
        <button className="m-5 text-4xl font-bold text-cyan-700" onClick={pageDown}> &lt;</button>
        <p className="m-5 text-4xl text-cyan-700" >{page}</p>
        <button className="m-5 text-4xl font-bold text-cyan-700" onClick={pageUp}>&gt;</button>
      </div>
    </div>
  );
}
export default Top;
