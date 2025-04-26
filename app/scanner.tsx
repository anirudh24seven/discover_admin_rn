import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
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

export default function Scanner() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false)
  const [data, setData] = useState<string | null>(null)

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
        <Card className='w-full max-w-sm p-6 rounded-2xl'>
          <CardHeader className='items-center'>
            <View className='p-3' />
            <CardTitle className='pb-2 text-center'>QR Code scanner</CardTitle>
          </CardHeader>
          <CardContent>
            <Text className='text-sm text-muted-foreground'>We need your permission to show the camera</Text>
          </CardContent>
          <CardFooter className='flex-col gap-3 pb-0'>
            <Button
              variant='outline'
              className='shadow shadow-foreground/5'
              onPress={requestPermission}
            >
              <Text>Grant permission</Text>
            </Button>
          </CardFooter>
        </Card>
      </View>
    );
  }

  const handleBarCodeScanned = (scanningResult) => {
    setScanned(true)
    setData(scanningResult["data"])
    alert(`Scanned ${scanningResult["data"]}`)
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined: handleBarCodeScanned}>
        {scanned ?
          <View className="flex-1 flex-col m-8">
            <Button
              variant='outline'
              className="flex-1 flex-row"
              onPress={() => setScanned(false)}
            >
              <Text>Tap to Scan again</Text>
            </Button>
            <Button
              variant='outline'
              className="flex-1 flex-col px-4"
            >
              <Text>Proceed to fetch details</Text>
              <Text className="text-center">{data}</Text>
            </Button>
          </View>
        :
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Point to QR code</Text>
          </TouchableOpacity>
        </View>
        }
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
  },
});
