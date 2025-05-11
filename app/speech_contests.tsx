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
  const scale1 = useSharedValue(1)
  const scale2 = useSharedValue(1)
  const scale3 = useSharedValue(1)
  const scale4 = useSharedValue(1)
  const duration = 60

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ scale: scale1.value }],
  }))

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
  }))

  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [{ scale: scale3.value }],
  }))

  const animatedStyle4 = useAnimatedStyle(() => ({
    transform: [{ scale: scale4.value }],
  }))

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className='p-6 mb-16'>
        <Pressable
          onPressIn={() => {
            scale1.value = withTiming(0.96, { duration })
          }}
          onPressOut={() => {
            scale1.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/humorous_speech_contest')}
        >
          <Animated.View style={animatedStyle1}>
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
            scale2.value = withTiming(0.96, { duration })
          }}
          onPressOut={() => {
            scale2.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/evaluation_speech_contest')}
        >
          <Animated.View style={animatedStyle2}>
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

        <Pressable
          onPressIn={() => {
            scale3.value = withTiming(0.96, { duration })
          }}
          onPressOut={() => {
            scale3.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/international_speech_contest')}
        >
          <Animated.View style={animatedStyle3}>
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
          </Animated.View>
        </Pressable>

        <Pressable
          onPressIn={() => {
            scale4.value = withTiming(0.96, { duration })
          }}
          onPressOut={() => {
            scale4.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/table_topics_contest')}
        >
          <Animated.View style={animatedStyle4}>
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
          </Animated.View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
