import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #2a9d8f;
`;

const Description = styled.p`
  width: 60%;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
`;

const LandingPage = () => {
  return (
    <Page>
      <Title>PDF Chatbot</Title>
      <Description>
        The PDF Chatbot is an interactive tool designed to help you manage and extract information from PDF documents. 
        Utilizing advanced chatbot technology, users can ask questions or issue commands, and the chatbot will 
        retrieve information, summarize content, or even convert sections into different formats directly from your PDF files.
      </Description>
    </Page>
  );
};

export default LandingPage;