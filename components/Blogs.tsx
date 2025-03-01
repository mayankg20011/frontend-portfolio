"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Card3D";
import Link from "next/link";

const blogItems = [
  {
    heading: "SEO Techniques to Boost Website Ranking",
    description:
      "Understanding SEO and its types. Optimize Website Performance, Speed, Content, Mobile Optimizations, Improve interlinking, Meta Tags.",
    img: "/p2.svg",
    link: "https://medium.com/@mayankiitp/complete-guide-7-best-seo-techniques-to-boost-website-ranking-84fbba7a7929",
  },
  {
    heading: "Testing & Debugging Frontend Applications",
    description:
      "Effective tools and techniques for Unit and Integration Testing, End-to-End Testing, Debugging Techniques, Performance & Security Testing.",
    img: "/p3.svg",
    link: "https://medium.com/@mayankiitp/the-ultimate-guide-to-testing-debugging-frontend-applications-fc570d2e6166",
  },
];
export function Blogs() {
  return (
    <section id="blogs" className="py-20 w-full">
      <h2 className="heading">
        My <span className="text-purple">Blogs</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {blogItems.map((item, i) => (
          <CardContainer className="inter-var" key={i}>
            <CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.heading}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="h-25 lg:h-60 md:h-25 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Read now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={"https://medium.com/@mayankiitp"}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Follow
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
