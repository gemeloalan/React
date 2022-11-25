import React from "react";
import { Text, VStack, Center, NativeBaseProvider, View, Image, Button,  ImageBackground } from "native-base";
import { ScreenStack } from "react-native-screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';


export const HomeScreen = ({}) => {
  const navigation = useNavigation();
  return <VStack space={3} alignItems="center">
      <Text fontSize="5xl">
        B&B RECORDS
      </Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button size="sm" variant="subtle" onPress={() => navigation.navigate('GALERIA')}>
              <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/FPMtVpRUtKTwLLvHXpc5EE-UOERC6oGTOtBckMxHHUWvunorvvxiNNjnaBXsbiLaQEwYHCphYPqZjL50RZtEl1oossc9Aj__02XlFu9C5rhixI83eLyth9QrZWKLnW3ZU2389iZ7nLloB2SBd39XlbcMmZQStaAfhQ8Ik__KpIC7JlL6Wx8oS1gTiCFHGmPVv75S_oktI4N_VcpUDOd0UbRDIfsgvxEK0OoN541C2g4W6_Y1tXmWDjdXfdgLjDSH3ebq3NH29PaxFLMivyxyr_-GacgWnhujIjZ3XL03zuOrXjNkcZDGEqpeXgZtgBuGrW3BYy4vRLN9fGdTfbk7ktqpNMkP3y-0Q5dSP6djkKuW25hqrig5pPIe_H7fUCY3phXWy2qAOXOJYfTaPvAyv70PkVfvhLnm4df0wMIVW5jIywg69S6UE1MSMnSW93oxSQwXXrj-PHLHeMyMxumaMBUuzMqS17xB0puEbR6-YRcNJgGDrQytZrcPIxFNMA0uklBecwheKkaJQERcBwM66h89qlOjw2hS3FWMTN-w-2RXIVnVryLhh8cYiq9eGjOxXRrGcRBhfTI_cmm2-gKXy-EMNAYiyfvOxLiePA0g31ioou-byApueq3l1ga3__nwq-d8_Xt4rUjh-SU9e_4WcQgB6NkzcjJOT7UBtLt0sOSGLMPcqe5WCn3mnzn8gaQHi4gJLDYMwk9k9xeANByQTsXtaFVVV1p-9dBwf_ksC0BT5A2sEwxv4rXBi5SjCUIVQ3vITVbFrZKTBwmkHkmVf7cN7gnAAckDJSLUpAGwIfJPFbDF5FIhOadoqRcvuBEH4Vhn69g0wH-RFORORhJfXwNXMGV-l0Zbx0qfbRARAfxPhAObRH0wbQfCrGE5QGT9KYThn0-jX81S1pgeKAQw8RTiFisM2cq_YjOh8mF0xGrBJ-jr-Xvq-bhZuuSPz_tqR5aw3tOUp9hzVC0k58wZPYbMyLH7N7ETgCJhRBvTV1-AuGTKLEmYaKRMuDeyxmKlRbXdPCgclBOJk1orlg3t6QrJCYhY4Jd7s6KDst-K85qrO3E82OiRjMBHT2W4YEPKAjIWSKQN2mhgoedovTPqXQCAwRNYWDsprOdnUtgRXNLWswvCf976IlRSzR98ZBwDay7liEsQYr-Y5H1NOBWpeq3j-VG9y5KY9WUE=s372-no?authuser=1',
          }}
          alt="Alternate Text" size="xl"/>
              <Text fontSize="4xl">
                            VIDEOS
              </Text> </Button>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button size="sm" variant="subtle" onPress={() => navigation.navigate('SINIESTRO')}>
              <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/dXJrrmkvGGZvp91Oj2O_MRibWFHj97vANulVrfLb6mDGlgTY7t0jlhI0pkaMw9qUpyXcN7gG_Un21iS7iR-Im3ql0UxWJUVF64YOt1uS4rREUjEmx1r1611wMFbVOYdUJF8ghLRv6kZPUPf0kSOeZnRo5sCMqlAwkgBSCCkfqQTZvFvKdc--pYvXOoAYcSu6PpFv5bm-8sroj5PTdrRjyZ75IKJL957UlwPpFZRP5hxUGW2nJlXJFSenini22BHJQ1UT6FTIy4bShaaq7pUNqoY6Kn7eVcRpvBZ8iL4VPm1gFj0KAlPCtyLExKz6D-bKM_NY-Z7joudGLhj6Y-Xrxihe8PRB9Cg4h_GsL2E_-0aj1uH61HVocS3zNF45LdKkrXLky87FPSUSYCe5P5KLmYqmyGOPpWAkcKX0fGneBj2fmwtxkq8Y6kGvjU1KUoy2kP_fm2LFYl-ePPfydR28O0g8YlFbBSJp3M6YmiK6vBzIos4p-ruXpJMFSsaCKGUae7d5JycltzxLcpRX8M3m5HLZbxzAGHJkj3Udkpa-QBBIvPBDDC_VmdvusHM2cx1k5b4wminrw-SgiNRHaEvKy7Vk6GwDtHtN15RB-DM8P0rr7jTiYNaVW1doZb2fPHLWYKwYHVt4GHNxpQd6I9oX16iB1M4LpfBi3TrmFW-slMN2hazmLmJOgyAQvfssWUIdas-uE-Vm457au6jibPKq3k_9bBGHhauzVHK52mRvFuiarjfn19O2flo-Xu3hJncc5RZo-k9RpW7xFSr-tQiYbMpD86CX_mdq7FDNpbgrGPWaiW2tlD319iSFt1dPLRHW_kJrVbwhGkIhKmzDsX9LPEErXS6lHG6zI78jQtBXG5vYdEBKs0RDnSM3lhB4gFzMEhB68NrJcuAtx9JPJfjIjf8xLKAqZcNhCNpI8UrOOOT4RHZV9ZPwVU0SoTGs3hw_TRCRKHkhLL9Xw399g2k2t2DKrdw1cqry03T-tx0jhbEhP3tmWYahAA2KchuZmYFx_JaFrRZExdV_YF1k2ozBMc44xzmaNPexZXlxV4QO8ud0PU1o1QNeppeEEVMJ6ABkvWZxezp5ZCGkc9FEbu5t4xCIXAI-mxGpdeF-MBFx5MkLBO46MEA2-2OUPSgqbrw5MoVer2-9FmlzQduUFO78Tfp8jBXQn13Gvkvy=w464-h500-no?authuser=1',
          }}
          alt="Alternate Text" size="xl"/>
              <Text fontSize="4xl" >
              SINIESTRO
              </Text> </Button>
              
            </View>
    </VStack>;
};



    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={2} px="2">
                <HomeScreen />
            </Center>
          </NativeBaseProvider>
        );
    };