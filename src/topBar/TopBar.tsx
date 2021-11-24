import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SettingIconDrawer from "./component/SettingIconDrawer";
import TopBarSectionItem from "./component/TopBarSectionItem";
import useWindowDimensions from "src/utils/customHook/useWindowDimensions";
import TopBarMenu from "./component/TopBarMenu";

export default function TopBar() {
  const { width } = useWindowDimensions();

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, bottom: "auto", opacity: "0.8" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            KANG GYEONG SEOK
          </Typography>
          {width < 900 ? (
            <Stack justifyContent={"flex-end"} alignItems={"flex-end"} flex={1}>
              <TopBarMenu>
                <TopBarSectionItem to={"Intro"} top={false} />
                <TopBarSectionItem to={"Project"} top={false} />
                <TopBarSectionItem to={"Skill"} top={false} />
                <TopBarSectionItem to={"Award"} top={false} />
                <TopBarSectionItem to={"Certificate"} top={false} />
                <TopBarSectionItem to={"Blog"} top={false} />
                <TopBarSectionItem to={"Contact"} top={false} />
              </TopBarMenu>
            </Stack>
          ) : (
            <Stack direction={"row"} justifyContent={"flex-start"} flex={1}>
              <div style={{ display: "flex" }}>
                <TopBarSectionItem to={"Intro"} />
                <TopBarSectionItem to={"Project"} />
                <TopBarSectionItem to={"Skill"} />
                <TopBarSectionItem to={"Award"} />
                <TopBarSectionItem to={"Certificate"} />
                <TopBarSectionItem to={"Blog"} />
                <TopBarSectionItem to={"Contact"} />
              </div>
            </Stack>
          )}
          <SettingIconDrawer />
        </Toolbar>
      </AppBar>
    </>
  );
}
