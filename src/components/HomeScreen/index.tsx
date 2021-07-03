import { Heading } from "../Heading";
import { MenuScreen } from "../MenuScreen";
import thiefGif from '../../images/thief.gif';
import { Image, ImageSizeType } from "../Image";
import { Button } from "../Button";

interface PropsType {
  onStartGameButtonClick: () => void;
}

export const HomeScreen = ({ onStartGameButtonClick }: PropsType) => (
  <MenuScreen>
    <Heading>
      Pixel Thief
    </Heading>
    <Image src={thiefGif} alt="thief" size={ImageSizeType.Large} />
    <Button onClick={onStartGameButtonClick}>Start Game</Button>
  </MenuScreen>
)