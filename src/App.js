
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <StyledMain>
      <div>
        <p>새로운 페이지로 새단장했어요!</p>
        <a href="https://public-home.vercel.app/">
          <button> 새로운 페이지 바로가기!</button>
        </a>
        
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  text-align:center;
`
export default App;
