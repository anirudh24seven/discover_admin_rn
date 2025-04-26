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
  const { qr } = useLocalSearchParams();

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

    const users: User[] = [
      {
        first_name: "Anirudh",
        last_name: "Sundararaman",
        name_to_be_displayed_in_id_card: "Anirudh Sundararaman",
        email: "1@gmail.com",
        mobile: "9876543211",
        ticket_type: "Early Bird",
        member_id: "",
        club_name: "Meraki Toastmasters (E5)",
        division: "E",
        food_preference: "Veg",
        vehicle_type: "Others",
        attending_district_conference_for_first_time: "No",
        need_accommodation: "No",
        five_ten_names_group_offer: "",
        payment_type: "I'll pay the full amount: Rs. 4999",
        payment_screenshot: "https://files.elfsightcdn.com/10f57fcd-29bb-4da4-9c09-61ea49a5bf6e/87ddc2f2-3b60-4a95-9b27-ae16a69f0ce1/1000065767.jpg",
        date_of_registration: "2024-12-28 17:35:41",
        amount_paid: "4999",
        payment_verified: "y",
        amount_in_words: "",
        unique_id: "8917a6db-0902-440e-b0ca-38192ba7b3d6",
        barcode: "",
        barcode_drive_link: "https://drive.google.com/file/d/1OyPJb4N4sf1cmZfS1ouhE7gj1J48TzLd/view?usp=drivesdk",
        receipt_no: "2024-2025/2101",
        pdf_receipt: "https://drive.google.com/file/d/1kAu2PhSJ38xUvTtVZGpp96953_TEYKrF/view?usp=drivesdk",
        ack_email_sent: "y",
        checked_in: "",
      },
      {
        first_name: "Bharath",
        last_name: "Raja",
        name_to_be_displayed_in_id_card: "Bharath Raja",
        email: "2@gmail.com",
        mobile: "9876543212",
        ticket_type: "Early Bird",
        member_id: "6636119",
        club_name: "Chennai Speakers Forum (A4)",
        division: "A",
        food_preference: "Veg",
        vehicle_type: "4 Wheeler",
        attending_district_conference_for_first_time: "No",
        need_accommodation: "No",
        five_ten_names_group_offer: "",
        payment_type: "I'll pay the full amount: Rs. 4999",
        payment_screenshot: "https://files.elfsightcdn.com/10f57fcd-29bb-4da4-9c09-61ea49a5bf6e/95da57ef-1531-44e7-9a1a-6e7b981e7734/WhatsApp-Image-2024-12-28-at-23-08-40.jpg",
        date_of_registration: "2024-12-28 17:39:16",
        amount_paid: "4999",
        payment_verified: "y",
        amount_in_words: "",
        unique_id: "5027212f-c129-4863-bf20-36024863c111",
        barcode: "",
        barcode_drive_link: "https://drive.google.com/file/d/1RcFEekO7pOromXeq8IDQYp1LSJO5j7Ww/view?usp=drivesdk",
        receipt_no: "2024-2025/2102",
        pdf_receipt: "https://drive.google.com/file/d/1-MmuLIub8TylF_4ZKZjIv5Qrp0StVxw1/view?usp=drivesdk",
        ack_email_sent: "y",
        checked_in: "",
      },
      {
        first_name: "Abdul",
        last_name: "Hadi",
        name_to_be_displayed_in_id_card: "Abdul Hadi",
        email: "3@gmail.com",
        mobile: "9876543213",
        ticket_type: "Early Bird",
        member_id: "",
        club_name: "Paypal Chennai Toastmasters (B4)",
        division: "B",
        food_preference: "Non-Veg",
        vehicle_type: "4 Wheeler",
        attending_district_conference_for_first_time: "No",
        need_accommodation: "No",
        five_ten_names_group_offer: "",
        payment_type: "I'll pay the full amount: Rs. 4999",
        payment_screenshot: "https://files.elfsightcdn.com/10f57fcd-29bb-4da4-9c09-61ea49a5bf6e/9c182ead-07c0-4243-8a8f-0fd547a7b8f2/IMG_4103F3D69A63-1.jpg",
        date_of_registration: "2024-12-28 17:43:45",
        amount_paid: "4999",
        payment_verified: "y",
        amount_in_words: "",
        unique_id: "8d5f3682-fb3e-4dbf-8563-1df45685665a",
        barcode: "",
        barcode_drive_link: "https://drive.google.com/file/d/1uWRi--uOKKrkYnSlRA9ns3cgITqSbnD9/view?usp=drivesdk",
        receipt_no: "2024-2025/2103",
        pdf_receipt: "https://drive.google.com/file/d/1Leav-zD_Zd25eo2jw99vidDRiIrn6Nl6/view?usp=drivesdk",
        ack_email_sent: "y",
        checked_in: "",
      },
  ]

  let user = users.find((user) => user["unique_id"] === qr)
  if (user) {
    console.log("user: ", user)
  } else {
    console.log("No user")
  }

  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
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
              <Text className='text-xl font-semibold'>{user.checked_in}y</Text>
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
  );
}
