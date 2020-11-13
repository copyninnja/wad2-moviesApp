import React,{ useState }  from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.css';

const Rank = () => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [rank, setRank] = useState("0");


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