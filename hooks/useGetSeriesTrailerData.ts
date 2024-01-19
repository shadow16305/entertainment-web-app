import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const useGetSeriesTrailerData = () => {
  const [trailer, setTrailer] = useState<TrailerProps[]>([]);
  const id = useParams();

  useEffect(() => {
    const fetchTrailerData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id.seriesId}/videos?language=en-US`, options);
        const data = await response.json();
        setTrailer(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrailerData();
  }, [id.seriesId]);

  return trailer;
};

export default useGetSeriesTrailerData;
