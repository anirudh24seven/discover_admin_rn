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
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://35.154.49.171:4000/api',
  headers: {
    Accept: 'application/json',
  }
})

export default function Profile() {
  const { stringUser } = useLocalSearchParams();
  const [user, setUser] = React.useState<User | null>(() => JSON.parse(stringUser));
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

  const buttonPressed = () => {
    console.log("check-in buttonPressed", user.qr)

    const updatedUser = {
      ...user,
      checked_in: true, 
    }

    setUser(updatedUser)
    
    // api.get(`/check-in/${qr}`)
    //   .then(response => {
    //     console.log("response", response);
    //     const fetchedUser = response.data.user
    //     if (fetchedUser) {
    //       console.log("user: ", fetchedUser)
    //       setUser(fetchedUser)
    //     }
    //   })
    //   .catch(error => {
    //     console.error("error", error);
    //   })
  }

  return (
    (user &&
    <View className='flex-1 justify-center items-center gap-5 px-6 bg-secondary/30'>
      <Card className={`w-full max-w-sm mx-6 rounded-2xl ${user.checked_in === true ? "border-4 border-green-500" : ""}`}>
        <CardHeader className='items-center bg-primary rounded-t-xl'>
          <Text className='text-primary-foreground'>Division</Text>
          <Avatar alt="Avatar" className='w-24 h-24'>
            <AvatarFallback className="bg-secondary">
              <Text className="text-2xl text-2xl font-bold text-secondary-foreground">{user.division}</Text>
            </AvatarFallback>
          </Avatar>
          <View className='p-3' />
          <CardTitle className='text-center text-primary-foreground'>{user.name_to_be_displayed_in_id_card}</CardTitle>
          <Text className='text-xl font-semibold text-center mt-2 text-primary-foreground'>{user.club_name}</Text>
        </CardHeader>
        <CardContent>
          <View className='flex-row justify-around gap-3 mt-4'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Ticket type</Text>
              <Text className='text-xl font-semibold'>{user.ticket_type}</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Payment verified</Text>
              <Text className='text-xl font-semibold'>{user.payment_verified === 'y' ? '✅' : '❌'}</Text>
            </View>
          </View>
        </CardContent>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Checked-in</Text>
              <Text className={`text-xl font-semibold ${user.checked_in ? "text-green-500" : ""}`}>
                {user.checked_in === true ? 'Yes' : 'No'}
              </Text>
            </View>
          </View>
        </CardContent>
        {user.checked_in ? <></> :
          <CardFooter className='flex-col gap-3 pb-4'>
            <View />
            <Button
              variant='outline'
              className='shadow shadow-foreground/5'
              onPress={buttonPressed}
            >
              <Text>Check-in</Text>
            </Button>
          </CardFooter>
        }
      </Card>
    </View>
  )
  );
}
