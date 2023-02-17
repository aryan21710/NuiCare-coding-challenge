import React, { useCallback, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  RefreshControl
} from "react-native";
import { initializeApp } from "firebase/app";
import { Service } from "./src/components/Service";
import { Header } from "./src/components/Header";
import { Filter } from "./src/components/Filter";
import { useFetchData } from "./src/hooks/useFetchData";
import { firebaseConfig } from "./firebaseConfig";
import { TData, TItem } from "./src/types";

initializeApp(firebaseConfig);

export default function App() {
  const [data, setData] = useState<TData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const onQuery = (newQuery: string) => setQuery(newQuery);
  useFetchData(data, setData, setLoading, setError);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    setData([]);
    setIsRefreshing(false);
  }, [data,isRefreshing]);

  const flatListData: TData[] = useMemo(() => {
    return data.filter(
      (item) =>
        (item.title?.toLowerCase() ?? "").includes(
          query.trim().toLowerCase()
        ) ||
        (item.subtitle?.toLowerCase() ?? "").includes(
          query.trim().toLowerCase()
        ) ||
        (item.level?.toLowerCase() ?? "").includes(query.trim().toLowerCase())
    );
  }, [data, query]);

  const renderItem = useCallback(({ item }: TItem) => {
    return (
      <Service
        level={item.level}
        imageUrl={item.imageUrl}
        title={item.title}
        subtitle={item.subtitle}
      />
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerAndFilter}>
        <Header />
        <Filter query={query} onQuery={onQuery} />
      </View>
      <View style={styles.flatlist}>
        {!loading && !error && data.length > 0 ? (
          <FlatList
            data={flatListData}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 10 }}
            keyExtractor={(item) => item["id"]}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
          />
        ) : (
          <ActivityIndicator size='large' color='#82b74b' />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3e4444",
    height: "100%"
  },
  headerAndFilter: {
    height: 120
  },
  flatlist: {
    margin: 0,
    paddingHorizontal: 10,
    flex: 1
  }
});
