import * as React from "react";
import dynamic from "next/dynamic";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import ExperienceSection from "src/section/ExperienceSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";
import { Suspense } from "react";

const DynamicLazyProjectSection = dynamic(() => import("src/section/ProjectSection"), {
  suspense: true,
});
const DynamicLazySkillSection = dynamic(() => import("src/section/SkillSection"), {
  suspense: true,
});
const DynamicLazyAwardSection = dynamic(() => import("src/section/AwardSection"), {
  suspense: true,
});
const DynamicLazyCertificateSection = dynamic(() => import("src/section/CertificateSection"), {
  suspense: true,
});
const DynamicLazyBlogSection = dynamic(() => import("src/section/BlogSection"), {
  suspense: true,
});
const DynamicLazyContactSection = dynamic(() => import("src/section/ContactSection"), {
  suspense: true,
});

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
