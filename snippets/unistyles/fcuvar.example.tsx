import React, { type ReactNode } from 'react';
import { View, type ViewProps } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';

interface Props extends ViewProps, UnistylesVariants<typeof styles> {
  children?: ReactNode
}

export const FcuvarExample = ({ children, style, ...rest }: Props) => {
  styles.useVariants({})

  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create((_theme, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    variants: {}
  },
}));