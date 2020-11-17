import React,{ useState ,useEffect}  from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.css';

const Rank = ({movie,session_id}) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [rank, setRank] = useState("0");

    useEffect(() => {
      let data = new FormData();
      data.append("value",rank*2);
      // POST request using fetch inside useEffect React hook
      const requestRank = {
          method: 'POST',
          body: data
      };
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${session_id}`, requestRank)
      .then(async response => {
          const data = await response.json();
          // check for error response
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          window.alert(JSON.stringify(data.status_message))
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
  }, [rank]);

      const handleChange = (value) => {
        setRank( value );
      };

return( 
    <span>
    <Rate allowClear={true} tooltips={desc} onChange={handleChange} value={rank} />
    {rank ? <span className="ant-rate-text">{desc[rank - 1]}</span> : ''}
  </span>
);

}
export default Rank;