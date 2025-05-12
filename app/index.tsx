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
  const duration = 60

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ scale: scale1.value }],
  }))

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
  }))

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className='p-6 mb-8'>
        <Image
          source={require('../assets/images/100_years_logo.png')}
          className="w-full max-w-[200px] max-h-[240px] mx-auto"
          style={{ resizeMode: 'contain' }}
        />
        <Text
          className="text-center mt-4 mb-2 font-semibold text-xl"
        >
          May 23, 24, 25 2025
        </Text>
        <GradientText
          colors={['#461066', '#8E0966']}
          text="Annual Conference of District 120"
          className="text-3xl font-bold text-center mx-8"
        />

        <Pressable
          onPressIn={() => {
            scale1.value = withTiming(0.96, { duration })
          }}
          onPressOut={() => {
            scale1.value = withTiming(1, { duration })
          }}
          onPress={() => router.push('/keynote_speakers')}
        >
          <Animated.View style={animatedStyle1}>
            <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
              <CardHeader className='items-center bg-[#40cbb4] rounded-t-xl'>
                <Sparkles className='text-primary-foreground mb-2' size={24} strokeWidth={1.25} />
                <CardTitle className='text-center text-primary-foreground'>
                  Keynote Speakers
                </CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
              <CardFooter>
                <Text>
                  Click to view details about renowned speakers at Discover '25
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
          onPress={() => router.push('/speech_contests')}
        >
          <Animated.View style={animatedStyle2}>
            <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
              <CardHeader className='items-center bg-[#e6275a] rounded-t-xl'>
                <Theater className='text-primary-foreground mb-2' size={24} strokeWidth={1.25} />
                <CardTitle className='text-center text-primary-foreground'>
                  Speech Contests
                </CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
              <CardFooter>
                <Text>
                  Click to know about the thrilling competitions showcasing contestants' eloquence
                </Text>
              </CardFooter>
            </Card>
          </Animated.View>
        </Pressable>

        <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
          <CardHeader className='items-center bg-[#4c35a9] rounded-t-xl'>
            <Trophy className='text-primary-foreground mb-2' size={24} strokeWidth={1.25} />
            <CardTitle className='text-center text-primary-foreground'>
              Awards and Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
            <Text>
              Celebrate exceptional achievements and contributions
            </Text>
          </CardFooter>
        </Card>

        <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
          <CardHeader className='items-center bg-[#40cbb4] rounded-t-xl'>
            <Handshake className='text-primary-foreground mb-2' size={24} strokeWidth={1.25} />
            <CardTitle className='text-center text-primary-foreground'>
              Networking
            </CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
            <Text>
              Connect with professionals and build valuable relationships
            </Text>
          </CardFooter>
        </Card>

        <Card className={`w-full max-w-sm rounded-2xl mt-8 mx-auto`}>
          <CardHeader className='items-center bg-[#e6275a] rounded-t-xl'>
            <PartyPopper className='text-primary-foreground mb-2' size={24} strokeWidth={1.25} />
            <CardTitle className='text-center text-primary-foreground'>
              Fun Night
            </CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
            <Text>
              Enjoy a thrilling experience with camaraderie
            </Text>
          </CardFooter>
        </Card>

      </View>
    </ScrollView>
  );
}
