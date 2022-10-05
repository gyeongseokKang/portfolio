import "../src/locale/i18n";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import ScrollToTopBtn from "src/component/button/scrollToTopBtn/ScrollToTopBtn";
import ExperienceSection from "src/section/ExperienceSection";
import IntroSection from "src/section/IntroSection";
import TopBar from "../src/topBar/TopBar";

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
      <a href="https://www.google.com/intl/ko/chrome/">크롬 브라우저로 이동</a>
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
