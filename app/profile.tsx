import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
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
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const { stringUser } = useLocalSearchParams();
  const user = JSON.parse(stringUser);
  console.log("Profile user", user)

  type User = {
      first_name: string
      last_name: string
      name_to_be_displayed_in_id_card: string
      email: string
      mobile: string
      ticket_type: string
      member_id: string
      club_name: string
      division: string
      food_preference: string
      vehicle_type: string
      attending_district_conference_for_first_time: string
      need_accommodation: string
      five_ten_names_group_offer: string
      payment_type: string
      payment_screenshot: string
      date_of_registration: string
      amount_paid: string
      payment_verified: string
      amount_in_words: string
      unique_id: string
      barcode: string
      barcode_drive_link: string
      receipt_no: string
      pdf_receipt: string
      ack_email_sent: string
      checked_in: string
    }

  return (
    (user &&
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className={`w-full max-w-sm p-6 rounded-2xl ${user.checked_in === "y" ? "border-4 border-green-500" : ""}`}>
        <CardHeader className='items-center'>
          <Avatar alt="Rick Sanchez's Avatar" className='w-24 h-24'>
            <AvatarFallback>
              <Text className="text-2xl">{user.division}</Text>
            </AvatarFallback>
          </Avatar>
          <View className='p-3' />
          <CardTitle className='text-center'>{user.name_to_be_displayed_in_id_card}</CardTitle>
        </CardHeader>
        <CardContent>
          <View className='flex-row justify-around gap-3 mb-4'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Club</Text>
              <Text className='text-xl font-semibold text-center'>{user.club_name}</Text>
            </View>
          </View>
        </CardContent>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Mobile</Text>
              <Text className='text-xl font-semibold'>{user.mobile}</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Email</Text>
              <Text className='text-xl font-semibold'>{user.email}</Text>
            </View>
          </View>
        </CardContent>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Member ID</Text>
              <Text className='text-xl font-semibold'>{user.member_id}</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Division</Text>
              <Text className='text-xl font-semibold'>{user.division}</Text>
            </View>
          </View>
        </CardContent>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Ticket type</Text>
              <Text className='text-xl font-semibold'>{user.ticket_type}</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Food preference</Text>
              <Text className='text-xl font-semibold'>{user.food_preference}</Text>
            </View>
          </View>
        </CardContent>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Amount paid</Text>
              <Text className='text-xl font-semibold'>{user.amount_paid}</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Payment verified</Text>
              <Text className='text-xl font-semibold'>{user.payment_verified}</Text>
            </View>
          </View>
        </CardContent>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Checked-in</Text>
              <Text className='text-xl font-semibold'>{user.checked_in}</Text>
            </View>
          </View>
        </CardContent>
        <CardFooter className='flex-col gap-3 pb-0'>
          <View />
          <Button
            variant='outline'
            className='shadow shadow-foreground/5'
            // onPress={updateProgressValue}
          >
            <Text>Check-in</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  )
  );
}
