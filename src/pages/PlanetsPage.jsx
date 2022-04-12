import { Navbar, People, Planets } from "components";
import {
  PlanetsContainer,
  PlanetsSection,
  StarWarsInfoTitle,
} from "components/pages/PlanetsPage";

const PlanetsPage = ({ page, setPage }) => {
  return (
    <PlanetsSection className="react-query-tut-content">
      <PlanetsContainer>
        <StarWarsInfoTitle>Star Wars Info</StarWarsInfoTitle>
        <Navbar setPage={setPage} />

        {page === "planets" && <Planets />}
        {page === "people" && <People />}
      </PlanetsContainer>
    </PlanetsSection>
  );
};

export default PlanetsPage;
