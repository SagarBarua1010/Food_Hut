import React, { useState } from 'react';
import './Home.css';
import Header from '../../Header/Header';
import ExploreMenu from '../../ExploreMenu/ExploreMenu';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../AppDownload/AppDownload';



const Home = () => {
    const [category,setCategory]=useState("All");
    return (
        <div>
            
            <Header></Header>   
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            
            <FoodDisplay category={category}></FoodDisplay>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;