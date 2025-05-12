import * as React from 'react';
import { Image, View, ScrollView } from 'react-native';
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

export default function Screen() {
  const router = useRouter()

  return (
    <ScrollView className="flex-1 pb-8">
      <View className='p-6 mb-20'>
        <Card className={`w-full rounded-2xl mt-8 mx-auto overflow-hidden`}>
          <View className="aspect-square overflow-hidden">
            <Image 
              source={require('../assets/images/luisa_montalvo.jpeg')}
              className="w-full h-full"
              style={{ resizeMode: 'cover' }}
            />
          </View>
        </Card>

        <Card className={`w-full rounded-2xl mt-8 mx-auto overflow-hidden`}>
          <View className="aspect-square overflow-hidden">
            <Image 
              source={require('../assets/images/ptr.jpeg')}
              className="w-full h-full"
              style={{ resizeMode: 'cover' }}
            />
          </View>
        </Card>

        <Card className={`w-full rounded-2xl mt-8 mx-auto overflow-hidden`}>
          <View className="aspect-square overflow-hidden">
            <Image 
              source={require('../assets/images/fursey_gotuaco.jpeg')}
              className="w-full h-full"
              style={{ resizeMode: 'cover' }}
            />
          </View>
        </Card>

        <Card className={`w-full rounded-2xl mt-8 mx-auto overflow-hidden`}>
          <View className="aspect-square overflow-hidden">
            <Image 
              source={require('../assets/images/deepa_venkat.jpeg')}
              className="w-full h-full"
              style={{ resizeMode: 'cover' }}
            />
          </View>
        </Card>

      </View>
    </ScrollView>
  );
}
