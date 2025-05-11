// components/ui/GradientText.tsx
import { Text } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'

type GradientTextProps = {
  text: string
  className?: string
  colors?: string[]
}

export function GradientText({ text, className = '', colors = ['#ec4899', '#f59e0b'] }: GradientTextProps) {
  return (
    <MaskedView
      style={{ height: 60 }}
      maskElement={
        <Text className={`${className}`}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  )
}
