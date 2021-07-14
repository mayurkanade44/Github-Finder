import React from "react";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import { useGithubContext } from "../context/github_context";

const Repo = () => {
  const { repos } = useGithubContext();
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  let {stars, forks} = repos.reduce((total, item)=>{
    const {stargazers_count, name, forks} = item
    total.stars[stargazers_count] = {label: name, value: stargazers_count}
    total.forks[forks] = {label: name.slice(0,12), value: forks}
    return total
  },{
    stars: {},
    forks: {}
  })

  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostStar = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    });


  const chartData = [
    {
      label: "Venezuela",
      value: "290",
    },
    {
      label: "Saudi",
      value: "260",
    },
    {
      label: "Canada",
      value: "180",
    },
    {
      label: "Iran",
      value: "140",
    },
  ];
  return (
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-5">
          <Pie3D data={mostUsed}></Pie3D>
          <p></p>
          <Doughnut2D data={mostStar} />
        </div>
        <div className="col-lg-7">
          <Column3D data={stars} />
          <p></p>
          <Bar3D data={forks} />
        </div>
      </div>
    </div>
  );
};

export default Repo;
