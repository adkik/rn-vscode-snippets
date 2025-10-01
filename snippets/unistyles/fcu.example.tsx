import React, { type ReactNode } from 'react';
import { View, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface Props extends ViewProps {
  children?: ReactNode
}

export const FcuExample = ({ children, style, ...rest }: Props) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create((_theme, rt) => ({
  container: {
    paddingTop: rt.insets.top
  },
}));