import * as React from 'react';
import { Image, View, Pressable, ScrollView } from 'react-native';
import { Text } from '~/components/ui/text';
import { useRouter } from 'expo-router';
import { GradientText } from '~/components/ui/GradientText'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

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

  const avatars = Array.from({ length: 9 }, (_, i) => `S${i + 1}`)

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className='p-6 mb-16'>
        <Text
          className="text-2xl font-semi-bold mb-8"
        >
          Evaluation Speech Contestants
        </Text>
        <View className="flex-row flex-wrap">
          {avatars.map((label, index) => (
            <View key={index} className="w-1/3 items-center justify-center p-4">
              <Avatar alt={`Avatar ${label}`} className="w-24 h-24">
                <AvatarFallback className="bg-[#e6275a] items-center justify-center">
                  <Text className="text-2xl font-bold text-secondary-foreground">
                    {label}
                  </Text>
                </AvatarFallback>
              </Avatar>
              <Text className="text-center">First Name Last Name</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
