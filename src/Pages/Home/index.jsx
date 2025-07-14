import { LinkIcon, RobotIcon, TrophyIcon } from "@phosphor-icons/react";
import Header from "../../components/Header";
import {
  HomeContainer,
  Title,
  Layout,
  Content,
  MainContent,
  MenuItem,
} from "./styles";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";
// Dummy props para SidebarFilters e Header na Home
const status = "connected";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header status={status} page="Dev Club Support CRM" />
      <Content>
        <MainContent>
          <HomeContainer>
            <Title>Bem-vindo ao Dev Club CRM</Title>
            <div>
              <MenuItem>
                <button className="button_slide slide_diagonal" onClick={() => navigate("/painel")}>
                  <TrophyIcon size={60} color={theme.colors.text} />
                  <p>Troféus Admin</p>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="button_slide slide_diagonal">
                  <RobotIcon size={60} color={theme.colors.text} />
                  <p>FAQ Suporte</p>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="button_slide slide_diagonal"  >
                  <RobotIcon size={60} color={theme.colors.text} />
                  <p>FAQ Suporte</p>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="button_slide slide_diagonal">
                  <RobotIcon size={60} color={theme.colors.text} />
                  <p>FAQ Suporte</p>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="button_slide slide_diagonal">
                <LinkIcon size={60} color={theme.colors.text} />
                  <p>Links Úteis</p>
                </button>
              </MenuItem>
            </div>
          </HomeContainer>
        </MainContent>
      </Content>
    </Layout>
  );
};

export default Home;
