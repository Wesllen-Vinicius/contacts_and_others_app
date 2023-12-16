import { Button } from "./style/Button";
import iconLinkedIn from "./assets/icons/linkedin.svg";
import iconGithub from "./assets/icons/github.svg";
import iconCv from "./assets/icons/read-cv.svg";
import iconTelegram from "./assets/icons/telegram.svg";
import imgCenter from "./assets/hacker.png";
import iconLattes from "./assets/lattes-new.svg";
import { Container } from "./style/Div";
import { Img } from "./style/Img";
import { ImgCenter } from "./style/ImgCenter";

function App() {
  return (
    <>
      <Container>
        <ImgCenter src={imgCenter} alt="LinkedIn" />
      </Container>
      <Container>
        <a
          href="https://www.linkedin.com/in/wesllen-vin%C3%ADcius-dos-santos-lima/"
          target="_blank"
          rel="noopener"
          role="button"
        >
          <Button $linked>
            <Img src={iconLinkedIn} alt="LinkedIn" />
            LinkedIn
          </Button>
        </a>
      </Container>
      <Container>
        <a
          href="https://github.com/Wesllen-Vinicius"
          target="_blank"
          rel="noopener"
          role="button"
        >
          <Button $github>
            <Img src={iconGithub} alt="Github" />
            Github
          </Button>
        </a>
      </Container>
      <Container>
        <a
          href="https://t.me/Wesllen_Vinicius"
          target="_blank"
          rel="noopener"
          role="button"
        >
          <Button $telegram>
            <Img src={iconTelegram} alt="Telegram" />
            Telegram
          </Button>
        </a>
      </Container>
      <Container>
        <a
          href="https://read.cv/wesllen"
          target="_blank"
          rel="noopener"
          role="button"
        >
          <Button $readcv>
            <Img src={iconCv} alt="Cv" />
            CV
          </Button>
        </a>
      </Container>
      <Container>
        <a
          href="https://lattes.cnpq.br/3916508939299678"
          target="_blank"
          rel="noopener"
          role="button"
        >
          <Button $lattes>
            <Img src={iconLattes} alt="Lattes" />
            Lattes
          </Button>
        </a>
      </Container>
    </>
  );
}

export default App;
