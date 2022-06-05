import * as React from "react";

import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import SettingIcons from "./component/SettingIcons";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import TopBarMenu from "./component/TopBarMenu";
import TopBarSectionItem from "./component/TopBarSectionItem";
import Typography from "@mui/material/Typography";
import useWindowDimensions from "src/utils/customHook/useWindowDimensions";

export default function TopBar() {
  const { width } = useWindowDimensions();
  const [menuComponent, setMenuComponent] = useState(<HorizontalMenu />);

  useEffect(() => {
    if (width > 900) {
      setMenuComponent(<HorizontalMenu />);
    } else {
      setMenuComponent(<VerticalMenu />);
    }
  }, [width]);

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, bottom: "auto", opacity: "0.8" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            KANG GYEONG SEOK
          </Typography>
          {menuComponent}
          <SettingIcons />
        </Toolbar>
      </AppBar>
    </>
  );
}

const VerticalMenu = () => {
  return (
    <Stack justifyContent={"flex-end"} alignItems={"flex-end"} flex={1}>
      <TopBarMenu>
        <TopBarSectionItem to={"Intro"} top={false} />
        <TopBarSectionItem to={"Experience"} top={false} />
        <TopBarSectionItem to={"Project"} top={false} />
        <TopBarSectionItem to={"Skill"} top={false} />
        <TopBarSectionItem to={"Award"} top={false} />
        <TopBarSectionItem to={"Certificate"} top={false} />
        <TopBarSectionItem to={"Blog"} top={false} />
      </TopBarMenu>
    </Stack>
  );
};

const HorizontalMenu = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      flex={1}
    >
      <div style={{ display: "flex" }}>
        <TopBarSectionItem to={"Intro"} />
        <TopBarSectionItem to={"Experience"} />
        <TopBarSectionItem to={"Project"} />
        <TopBarSectionItem to={"Skill"} />
        <TopBarSectionItem to={"Award"} />
        <TopBarSectionItem to={"Certificate"} />
        <TopBarSectionItem to={"Blog"} />
      </div>
    </Stack>
  );
};
