import "../src/locale/i18n";

import * as React from "react";

import ExperienceSection from "src/section/ExperienceSection";
import IntroSection from "src/section/IntroSection";
import ScrollToTopBtn from "src/component/button/scrollToTopBtn/ScrollToTopBtn";
import { Suspense } from "react";
import TopBar from "../src/topBar/TopBar";
import dynamic from "next/dynamic";

const DynamicLazyProjectSection = dynamic(
  () => import("src/section/ProjectSection"),
  {
    suspense: true,
  }
);
const DynamicLazySkillSection = dynamic(
  () => import("src/section/SkillSection"),
  {
    suspense: true,
  }
);
const DynamicLazyAwardSection = dynamic(
  () => import("src/section/AwardSection"),
  {
    suspense: true,
  }
);
const DynamicLazyCertificateSection = dynamic(
  () => import("src/section/CertificateSection"),
  {
    suspense: true,
  }
);
const DynamicLazyBlogSection = dynamic(
  () => import("src/section/BlogSection"),
  {
    suspense: true,
  }
);
const DynamicLazyContactSection = dynamic(
  () => import("src/section/ContactSection"),
  {
    suspense: true,
  }
);

export default function Index() {
  return (
    <>
      <TopBar />
      <IntroSection />
      <ExperienceSection />
      <Suspense fallback={`loading`}>
        <DynamicLazyProjectSection />
        <DynamicLazySkillSection />
        <DynamicLazyAwardSection />
        <DynamicLazyCertificateSection />
        <DynamicLazyBlogSection />
        <DynamicLazyContactSection />
      </Suspense>
      <ScrollToTopBtn />
    </>
  );
}
