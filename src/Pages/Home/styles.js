import styled from "styled-components";
import theme from "../../styles/theme";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 230px);
  color: #fff;
  background-color: ${theme.colors.purple};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 2rem 1rem;
  margin: 2rem auto;
  max-width: 600px;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.accent};
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 1px 0px 5px rgba(0, 0, 0, 0.7);
`;
export const MenuItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;
padding: 1rem;

background-color: ${theme.colors.primaryDark};
border-radius: ${theme.borderRadius};
box-shadow: ${theme.boxShadow};
transition: var(--transition);
cursor: pointer;

button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  
}

p {
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.colors.text};
}
&:hover {
  background-color: ${theme.colors.primary};
  
}
`



export const Layout = styled.div`
  background: linear-gradient(135deg, #000c24 0%, #3e5c9e 100%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;
export const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
`;
