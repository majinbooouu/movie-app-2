import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetials] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    console.log(json.data.movie);
    setLoading(false);
    setDetials(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading Detail....</h1>
      ) : (
        <div>
          <h1>{details.title_long}</h1>
          <h5>평점: {details.rating}</h5>
          <img alt={details.title} src={details.large_cover_image} />
          <h3>장르</h3>
          <ul>
            {details.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
