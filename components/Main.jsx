import { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard } from './GameCard';
import { Screen } from './Screen';

export function Main() {
  const [games, setGames] = useState([]); // 1

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen className="bg-black">
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
