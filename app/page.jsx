"use client"
import { useEffect, useState } from "react";
import "./style.scss"
import Menu from "@/components/Menu/page";

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setData(json);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <main>

      <div className="image-container">
        
      </div>
      <div className="background">
      <Menu
        data={data}/>
      </div>
    </main>
  );
}
