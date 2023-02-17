import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { TService } from "../types";

export const CollapsibleService = ({ title, subtitle, imageUrl, level }: TService) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <TouchableOpacity onPress={toggleCollapse}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        {!isCollapsed && <Text style={styles.description}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
};

