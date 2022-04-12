import { useState } from "react";
import { appContext } from "context";

// prettier-ignore
import { ThemeProvider, theme, Header, Container, icons, about, darthVader, deathStar, Title, authContext,   } from 'common';
// prettier-ignore
import { AboutSection, AboutContent, OathDescription, AboutContentRow, HeroImg, ThemeToggle, AchievementsList, AchievementsSection, Logo, Moto, AboutSocial,  } from 'components';
import { AppStyled } from "./App.styled";

import css from "./App.module.css";
import { chunk } from "tools";
import { Suspense } from "react";

const PlanetsPage = chunk("PlanetsPage");

// prettier-ignore
const { profession,  name, callToAction, positions, moto, noMoral, achievements } = about;
const { dark } = theme.themes;
// prettier-ignore
const { logo, /* moon, sun, close, tieFighter, atAt, deathStarSvg, hand, swords, trooper, */ youtube, twitter, inst } =
  icons;

const rel = "noopener noreferrer nofollow";

const socialIcons = [
  { id: "1", icon: youtube, link: "#", rel },
  { id: "2", icon: twitter, link: "#", rel },
  { id: "3", icon: inst, link: "#", rel },
];

export const App = () => {
  const [page, setPage] = useState("planets");
  const [currentTheme, setCurrentTheme] = useState(dark);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTheme = (e) => {
    const { name } = e.currentTarget;
    if (name === currentTheme) return;

    setCurrentTheme(name);
  };

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen);

  const state = {
    page,
    currentTheme,
    isModalOpen,
  };

  return (
    <authContext.Provider value={state}>
      <ThemeProvider theme={{ ...theme, currentTheme }}>
        <AppStyled className="App">
          <appContext.Provider value={state}>
            <Suspense fallback={<div>Loading...</div>}>
              <AboutSection>
                <img
                  className={css.DeathStarImg}
                  src={deathStar}
                  alt="Death Star under construction"
                />

                <HeroImg
                  src={darthVader}
                  alt="Darth Vader, light saber in left hand, right hand rosed up in front to use Force"
                />

                <Container>
                  <Header>
                    <Logo icon={logo} link="./" title="Home" />

                    <ThemeToggle onToggleTheme={toggleTheme} />
                  </Header>
                  <AboutContent
                    name={name}
                    profession={profession}
                    positions={positions}
                    onToggleModal={toggleModal}
                    callToAction={callToAction}
                  />

                  <AboutContentRow>
                    <OathDescription description={noMoral} />
                    <Moto
                      text={moto.text}
                      passion={moto.passion}
                      passionClass={"Passion"}
                    />
                  </AboutContentRow>

                  <AboutSocial
                    items={socialIcons}
                    hasIcons={{ iconClass: "AboutSocialIcon" }}
                    social
                  />
                </Container>
              </AboutSection>

              <AchievementsSection>
                <Container>
                  <Title
                    className={css.AchievementsHeader}
                    title={achievements.title}
                    h="3"
                  />

                  <AchievementsList
                    items={achievements.items}
                    hasIcons={{ iconClass: "AchievementsIcon" }}
                    titleClass={"AchievementsItemHeader"}
                  />
                </Container>
              </AchievementsSection>

              <PlanetsPage page={page} setPage={setPage} />
            </Suspense>
          </appContext.Provider>
        </AppStyled>
      </ThemeProvider>
    </authContext.Provider>
  );
};
