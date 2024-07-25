import { ScrollView, Text } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { HomeIcon } from '../../components/Icons';
import { Screen } from '../../components/Screen';

import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-80`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </ScrollView>
    </Screen>
  );
}
// Compare this snippet from app/index.js:
