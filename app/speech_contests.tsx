import * as React from 'react';
import { Image, View, Pressable, ScrollView } from 'react-native';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { useRouter } from 'expo-router';
import { GradientText } from '~/components/ui/GradientText'

import { Handshake } from '~/lib/icons/Handshake';
import { PartyPopper } from '~/lib/icons/PartyPopper';
import { Theater } from '~/lib/icons/Theater';
import { Trophy } from '~/lib/icons/Trophy';
import { Sparkles } from '~/lib/icons/Sparkles';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

export default function Screen() {
  const router = useRouter()
  const scale = useSharedValue(1)
  const duration = 60
  const scaleTo = 0.96

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className='p-6 mb-8'>
        <Pressable
          onPressIn={() => {
            scale.value = withTiming(scaleTo, { duration })
          }}
          onPressOut={() => {
            scale.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/keynote_speakers')}
        >
          <Animated.View style={animatedStyle}>
            <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
              <CardHeader className='items-center bg-[#ffc20b] rounded-t-xl'>
                <CardTitle className='text-center text-primary-foreground'>
                  Humorous Speech Contest
                </CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
              <CardFooter>
                <Text>
                  Click to view details about the Humorous Speech Contest
                </Text>
              </CardFooter>
            </Card>
          </Animated.View>
        </Pressable>

        <Pressable
          onPressIn={() => {
            scale.value = withTiming(scaleTo, { duration })
          }}
          onPressOut={() => {
            scale.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/keynote_speakers')}
        >
          <Animated.View style={animatedStyle}>
            <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
              <CardHeader className='items-center bg-[#e6275a] rounded-t-xl'>
                <CardTitle className='text-center text-primary-foreground'>
                  Evaluation Contest
                </CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
              <CardFooter>
                <Text>
                  Click to view details about the Evaluation Contest
                </Text>
              </CardFooter>
            </Card>
          </Animated.View>
        </Pressable>

        <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
          <CardHeader className='items-center bg-[#4c35a9] rounded-t-xl'>
            <CardTitle className='text-center text-primary-foreground'>
              International Speech Contest
            </CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
            <Text>
              Click to view details about the International Speech Contest
            </Text>
          </CardFooter>
        </Card>

        <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
          <CardHeader className='items-center bg-[#40cbb4] rounded-t-xl'>
            <CardTitle className='text-center text-primary-foreground'>
              Table Topics Contest
            </CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
            <Text>
              Click to view details about the Table Topics Contest
            </Text>
          </CardFooter>
        </Card>
      </View>
    </ScrollView>
  );
}
