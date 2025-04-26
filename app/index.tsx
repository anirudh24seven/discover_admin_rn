import * as React from 'react';
import { View } from 'react-native';
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

export default function Screen() {
  const router = useRouter()

  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <View className='p-3' />
          <CardTitle className='pb-2 text-center'>Discover '25 Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <Text className='text-sm text-muted-foreground'>Use this app check-in Discover '25 attendees</Text>
        </CardContent>
        <CardFooter className='flex-col gap-3 pb-0'>
          <Button
            variant='outline'
            className='shadow shadow-foreground/5'
            onPress={() => router.push('/profile')}
          >
            <Text>Scan QR</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
}
