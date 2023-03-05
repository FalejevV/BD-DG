import SearchBar from './components/SearchBar/SearchBar';
import { MainView } from './styles/Styled.styled';
import * as ScreenOrientation from 'expo-screen-orientation'
ScreenOrientation.unlockAsync();

export default function App() {
  return (
    <MainView>
      <SearchBar />
    </MainView>
  );
}
