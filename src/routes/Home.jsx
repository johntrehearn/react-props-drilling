import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import { useEffect } from 'react';
import { getDataRedux } from '../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

//const data = await getData(url);


const Home = () => {
  
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.data);
  
  console.log("Data: ", data);

useEffect(() => {
  dispatch(getDataRedux(url))
}, [dispatch])

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={data} />
    </div>
  );
};

export default Home;
