import { View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { Logo } from '../components/Logo.jsx';
import { CircleInfoIcon } from '../components/Icons.jsx';
import { Link } from 'expo-router';

export default function Layout() {
  return (
    <View className=" flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'yellow',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
/*
import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <View className=" flex-1 bg-black items-center justify-center">
      <Slot />
    </View>
  );
}

*/
