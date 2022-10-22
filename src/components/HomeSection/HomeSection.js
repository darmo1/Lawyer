import React from "react";
import HomeAccountFor from "./HomeAccountFor/HomeAccountFor";
import HomeCTA from "./HomeCTA";
import HomeBlogs from "./HomeBlogs";
import HomePeople from "./HomePeople/HomePeople";
import MainLayout from "../../Layout";
import GlobalLayout from "../../Layout/GlobalLayout";

import style from "./HomePeople/style.module.css";

const HomeSection = ({ authorData }) => {
  return (
    <GlobalLayout>
      <section>
      <MainLayout>
        <HomeCTA />
      </MainLayout>
      <div className="bg-wave-pattern bg-cover min-h-[300px] w-full bg-no-repeat rotate-180"></div>
      </section>
      <MainLayout>
        <HomeAccountFor />
        <HomeBlogs />
      </MainLayout>
      <section className={`py-16 ${style["clip-path"]} bg-blue-400`}>
        <MainLayout>
          <HomePeople authorData={authorData} />
        </MainLayout>
      </section>
    </GlobalLayout>
  );
};

export default HomeSection;
