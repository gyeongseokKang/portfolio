import { Accordion, AccordionItem } from "@nextui-org/react";

import Image from "next/image";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { getExperiencedYearFrom } from "src/utils/getExperiencedYear";
import { CustomSection } from "../component/CustomSection";

const SkillSection = () => {
  return (
    <CustomSection id={"Skill"}>
      <CustomSectionTitle
        title={"Stack"}
        subTitle={
          "T자형 스킬셋을 추가합니다. 현재는 깊게 하는것보다 넓게 하는게 더 재밌어요."
        }
      />
      <Accordion variant="splitted" isCompact>
        <AccordionItem
          key="1"
          aria-label="TS, JS"
          startContent={
            <div className="flex gap-2">
              <Image
                src={`/icons/${"Javascript".toLowerCase()}.svg`}
                height={35}
                width={35}
              />
              <Image
                src={`/icons/${"Typescript".toLowerCase()}.svg`}
                height={35}
                width={35}
              />
            </div>
          }
          subtitle={`${getExperiencedYearFrom("2018/12/01").N년차}`}
          title="Javascript, Typescript"
        >
          <div>
            JS, TS의 트렌드를 따라가며 프론트엔드 개발자의 기본기라 생각하고
            끊임없이 공부하고 있습니다.
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="TS, JS"
          startContent={
            <div className="flex gap-2">
              <Image
                src={`/icons/${"next-js".toLowerCase()}.svg`}
                height={35}
                width={35}
              />
              <Image
                src={`/icons/${"React".toLowerCase()}.svg`}
                height={35}
                width={35}
              />
            </div>
          }
          subtitle={`${getExperiencedYearFrom("2020/02/01").N년차}`}
          title="Next, React"
        >
          <div>
            한동안 프론트엔드는 Next,React의 독주 자체로 생각하고 열심히
            따라가고 적용하고 있습니다. React가 주는 선언형 UI의 매력과 Next가
            주는 마법같은 매력에 빠져있습니다.
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="TS, JS"
          startContent={
            <div className="flex gap-2">
              <Image
                src={`/icons/${"flutter".toLowerCase()}.svg`}
                height={35}
                width={35}
              />
              <Image
                src={`/icons/${"dart".toLowerCase()}.svg`}
                height={35}
                width={35}
              />
            </div>
          }
          subtitle={`${getExperiencedYearFrom("2021/02/01").N년차}`}
          title="Flutter,Dart"
        >
          <div>
            One Code, Multi Platform, 이것만큼 강력한 매력이 어디있을까요? 앱을
            만들고 싶을때 주로 사용하나, 요샌 웹쪽도 한번 만들어볼까 싶네요
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="TS, JS"
          startContent={
            <div className="flex gap-2">
              <Image src={`/icons/graphql.svg`} height={35} width={35} />
              <Image src={`/icons/prisma.svg`} height={35} width={35} />
              <Image src={`/icons/postgresql.svg`} height={35} width={35} />
              <Image src={`/icons/webassembly.svg`} height={35} width={35} />
              <Image src={`/icons/aws.svg`} height={35} width={35} />
            </div>
          }
          subtitle={`- years`}
          title="Current Learning Stack"
        >
          <div>
            상기한 기술들은 프론트엔드 업무를 하면서 계속 경험해보고 있는
            기술들입니다. 언젠가 이것도 전문가의 영역으로 들어가길 바랍니다.
          </div>
        </AccordionItem>
      </Accordion>
    </CustomSection>
  );
};

export default SkillSection;
