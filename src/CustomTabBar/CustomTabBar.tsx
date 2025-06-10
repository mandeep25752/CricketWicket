/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const CustomTabBar: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}>
            {typeof label === 'string' ? (
              <Text
                style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}>
                {label}
              </Text>
            ) : (
              label({focused: isFocused, color: 'blue', children: route.name})
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    // backgroundColor: '#fff',
    // elevation: 4,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  tabButtonFocused: {
    backgroundColor: 'blue',
  },
  tabLabel: {
    fontSize: 16,
    color: '#000',
  },
  tabLabelFocused: {
    color: '#fff',
  },
});

export default CustomTabBar;
