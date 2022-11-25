import React from 'react';
import {Box,FlatList,Heading, Avatar, HStack, VStack, Text, Spacer, Button, Center, NativeBaseProvider, Modal,} from 'native-base';
import { useState } from 'react';


const VideosScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  return (
    <Box>
      <Center>
        <Heading fontSize="4xl" p="14" pb="9">
          Inbox
          {'\n'}
        </Heading>
            <Box>
              <Center>
                <Button variant="unstyled" onPress={() => setShowModal(true)}>
                  <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="28">
                        {' '}
                        <HStack space={[5, 13]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/291027033_434910671975688_3331237724701759705_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNoHFL0tw3Fp9782SIKSj4DYA-S6fL-_sNgD5Lp8v7-yfMytHEaAiGLBHLoD4nuhM24eFkqq6ebWntsBybkHIb&_nc_ohc=ExEmsEVvam0AX85DL-t&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfBX2DlTKx3-O9UJbhixeB6Q_vn9otQFvMjGiYRIUZGSzw&oe=637B426B',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              BeatBox
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              Serenidad y Paciencia
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box></Button>
                      <Button variant="unstyled" onPress={() => setShowModals(true)}>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="28">
                        {' '}
                        <HStack space={[3, 12]} justifyContent="space-between">
                          <Avatar
                           size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/241644433_222376839775928_5435099866028226639_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9NzXB1yMHTbn5M2YfvNnkFq5gzycRFWsWrmDPJxEVa6MbeYTGFXguB2Zah9cQznz-YKudajg6u7UfdAhkrT_O&_nc_ohc=l5XfsDm5w1IAX9EoazK&_nc_oc=AQl2Ps4E0Hxt7lU7CxYxAR6AR6QFQW6yJ2xaKRWjeacbcxJvSm4CB6bRNTNSSEqBmKV0xrXOivyLmZPKYS2UvlW1&tn=99EcOG3zIOE4hUvt&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfBRn_JBvtMD3FOhQZOSJStlXE_B4IcMue-6XKuYjcTdRg&oe=6379F0DE',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                             Flamin
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                            La flama que mas brilla
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                </Button>
                <Modal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  _backdrop={{
                    _dark: {
                      bg: 'coolGray.800',
                    },
                    bg: 'warmGray.50',
                  }}>
                  <Modal.Content maxWidth="720" maxH="1080">
                    <Modal.CloseButton />
                    <Modal.Header>LISTA</Modal.Header>
                    <Modal.Body>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="2">
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/gEf7en6lyXeUFtqNY59jW29GZPqdmUF_wHzBjizuChOMe-U2ifpvTSez4ihFMsTDcs4n0h_3vNSKIrBNjTf1hYfdO7otZUn5pDg3r16qq2oW4LvIQOHhiEnxXIFODoqW-7NFDI0PxpV6S9MV49xHbLlTVT4swUTMyfE2fnO5eRCh-W9k-CqyhY722tr-avZKByhbSNS66BMjZUJOgTVa485J6X2qFizm4JWSUCIxi2_2vXutqer1Ig62k9CXWaL_mbd0RQIcGxIMfXtAGk6Xx2rWzO5ekL6h0ebGGi9aL3wpyUyKjNP-OjKWoK209jmavaPYz_Y-ti9FQ15E5LtxG5OVdjePEZ4lLxyAYt8vYukIKMf-IusyMLZ5Zg4lFhPyTjMq_1BT0V0WVzNDjNU0iGAQsj4RQGYlMrvH5OLsS6dbazVCSANJTM-L9WljGuzkjiaNcP6i1IsRZZF5mVb92Xo4waUfy5XQiKvTvfg7ORwjsrEWXboF-aDgfddWUFO5GODNaMTguxH01mX5b_6xUB05QU7Hm9GTx1UhmqDXyZ3N0IzEElF4Nxm2rMQozSewvhqPoriZ4vBnA0qrr5L-9fth8v93RMi-3G1QwsvBSIN-QzPz6tkGadC3MlMJHDPFEdpwCW2Pi5Y7ZEwZoZ5SiIHV_6fcUhttpl92QPIth4WMiXic5HFIWYf5MVydxDKn8cfYoWKINAXwYrq2EhkwLD7xOV--hrm94R17OlS63Khyi7jOLA0eX6g4Kb90PHTLbgFkhcH8L0T_QJsHdlTWDhdeGny1INiwnClaE9CbA854LGZ8ZovOfs9qUkjRHq0eJTDpnpObURiDDT8qRJ2egzqltAaeFzDWOkcQ2gPkzxCH5Ag0btoSXWSS1CBkYaTQ1ctC3v7IxhJT7PVLMRaQoLKtMKsbHJjq76zoI49mncM-5UHR-bzvjYHo0eqp9hnTiNGA9ju5hU9DZ4TDNfYupB7wOEc0OKt75GhO2L8zbFBCAYoHzeX5n1R-pifsKYhDMtKH67ePdn-c95YFNnH3pBsGvbDZTkwT2RhsOMGvWnl-yTdwCMJt8Ov7OQrXh95oFzSAZc-23zBHTjqrRk0uFjptefFI6A9ZAkpCtvT1exO6wBjyz5IHuAoL_qN2ZZf6jg5jwrWaIAQkHcf2U8VymApRDLw_ujCA2rtx=w639-h635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              Hasta las Nubes
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              2:30 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="2">
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/8MkkL4vhxfVSPZmCu6yzV0nC6eUEensgzC7npz_RG_WwfBENBZVoCsNp7ocoQAiK8tRQKfBFcQVYYC2PchZxn1EKOuUnvvrggXXVlQSeU4X5t1pVnv4noKnD5y-c7hNcapFLIggcLfL_InEU34tcZNXOQtUpMnYH24rSQkvgcyYFMOu48ImBRcKlNstBq6cp7YFFfbA3mtxYTjdK-gpwKfCkhTzhTWu54BwM10Oy51oTeNOoJo4_ZJkX7zHh0FIUZ6oPVuE7KVirI3aDFLIjKucrbcHg2Z-zIAZBxbnL90Hxkdm-q9Rpq29OYsJii4he_KLxZwNLo3uekkIJSA1FdVq6L46tlS7WV6SdUiDuNkhO43riTnWSleSSsIAC8c3OWKUZR4DgVzQvPEhg2IzTkHnVrUSP2nJOdHRgTnRxy10x_cByqZJeK2wHQWb6Kr702-v8u4mM8-6p8c6VuwEiGlCsr1clMo8QJva8TZkl6WJQc7Cqk59bU7HIq3er105epASAUx8vfEyGrpJSZyotTsri3ef7mEg9JnkgF-j1CJHUaotOkcipZ8uMKLcu5iP0m9FTjxNfE8DnMRDCUcCeS1Mprky-qdTtfuaXmwXE8ea_AOXJCkuuQrqjxs30FAyhmQ8VLMwd2NWJGF61HVUamSJ9INc16R0bHoxCN4Ga-tlzivqG5wGM3iGLSer6ECHb6YNkt5o5Yv8i96jgvaynkis4HAxxMM1Y89TGtquWPwCGDjzq5l9bA6XdKsnFPaCSu0u0qeQW0H2zFriTqWEYgWkL8uoc6hNn2xDcTauA_y-WnHSrZpQlROr0lqa5E6XuTbQ2fs7k8B6SdjVd3lpQbuApaOQljqkCdtC-fyhRNFI4DyKcgyJM-S9nBra16X4Xkgcrfl83s5F-1ywlHyECZSLP3i4NAaur5h2_ES1NmHG6WmAJvKprtqswrrA5rwbsmxLsLyxs3bF--9cF6vwIi7sBjKrDtmri4hkJrlTcCt54O0N9pFne4sRPJbhzPxcXT-HkAFPty4-0O5kiTaXFmdt-mfflwcI39q4FdmliWGHNxPwOL6Mc6dH3nyhCLHftDqZVpJ6V4mpmkvxbki78kDZmpladmAeHTPXKsMMl9TwGXC2vXIgaBr_QflHWfRuovKhP4zRttzZ-UZ1_0oklmYo8k1_NTtV70yXR=s220-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              YNTQ
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              3:39 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="2">
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/56HPkdqMSw2SNg8VEeCfxpiWdFjQb89u-eD0_1c-rW94fS1XhGySIrTlWIMjlg-5ptyEs1kXF3PIw0L9T3SG5TQvlWVjXoB557EVW0U_oCK4kYHipoGpyciAjS9Zod1srkovxMuyQhjhltfLN38vK9NRH6XsUZnZVASPQhqmtKvgesfQ834IX40VT1N-A-egAEsZmq0ICJ8n6z6UWlQvD6nNFfzNZlIAJy6DMraNHw1cxAr2szUsXm14aaiMKnmmHlp5ocfIYfPut1UKtsutC_54iv-Bl7vGuJsX25pd5ni6MNmmrEi0IlAFQPDFCIemYxch1NCmT0xcaFyITuCdEJwJUSw_Eq6tZDIxIfXNPSA1F-msRd109CloDVUOCrLqlI6f-UMpylnMx8o4qdJbF8xNiGZYzbAYbQO9y145Dz9cdUF7P5Ip40BevZJ2WurB2MeJvhASY5pK_GHerxA6zYgVe3it-IWfjCJe9Mj26g3XrNx-qfGm-jCCrlA9SKTqc_4UsizDy5qoV86dKQb5qQ-VfmXfzRi7s6gZul0zvkIliKngaLEe-ruC3SV3JOvbR1CI6a5iYd2oeA5CiqC28rzS4Zl4Jhu11OUEhtSG0hLP06fLFBJ7h9EU9hmsU7c1lWnfOtZwYuFKQUSJ_ws0Vu8WHsaz9lLPAosqZkGZ6BbVq5KEeIye8MqjDwkatnEixOcouLT9T5mRFNW5St8huMfcLKBbz0HS6zk1du12pGU6ft1ZMfm_3cu1DAptFc9ZYLTQtW0LXkppiKOy3R7u7NUDfD0-Sjk4nps4GzOqUobrSMC84A6SxoWjHdh_ZiU_El5BlnpbpjsvvQr1m1M8Q-3bukGpGjQj0qfQnpjLamu5h7DMxNlOpCkGhuRkSIXwQf5N6HpqYPNR7vrByrwYDHN7SDyX_8nTZPhE-B-sWWljJdFBH_jVZhg02Nk7yX6pIhnmm3PVvn0WyF3Ue9N4n5pIIgE_JRh_nUuHllfnss6oECMYBPHkYCrqOD-YvCr3RpKVm1CM8lZXwzaOvYsvOIa1cn2ZcuA9WDhlpOmuJ2GKdOP74nuno_hLM-tGJlniBtxcb6iy8xzW1MCO_eiUDNsIIK4wXmEFMmYsl6uU6ddwkKwN1lemWVN6wepJL5BCrFy7LWyAclLkf5pNCDYqkC5ytCKK03xjwjEZ=w1130-h635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              44
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              3:01 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                      <Box>
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/XTExb-Um10sxP1VXa_GFonJLOT07x-BHpp2jPmhZ5yIixbnWI_F0YWkau1W_yEvNEUeAYrR-huteJLuiLJ5GnYrmTsR6W80COkaxcRVBH5j5j-FpRMgOt5ehT0696VrR3u-ieCc67-xzdhDxdzJZxAFO-J6ty-h96F64eu7QiiAoLl5VwlyFHAYoymTuglgwpB7GwnKx5ZrU0Fu1Z--LG3z-akc5YZXJoCU2KMNkieAdLZvBgEkRsSdl-9j1_-LwYNNWGJJyV6WrtF6znuhW8gu3DV4kX2dtp6iuSAILQafjgLYIiLfxR8SND_zu_khOGnuvPWa8-DrK4OAmqUgBx9elv9wO1gVnT43mZwEi-HIl-PFrvxHGGDJcJCLSWK3cQxfk_9Q1YT8mqk2FRgMMH1Iaua4NsT1LjCIay8ZSRb3KUI20fW68OtBjj5bRgkgioM7vqdlGh_VjlUuRxzEgj0M1IPZWm05-9SQNx59_plPq3Kn17kZi2qu66ocrPZaZ_yzWbUxpgFN8OY_trL0-k48I3XC2csuadmDF5bmqmnUz66kD-EbVxfh-QBmehTsp3i1ubcljR5o9Mu61vzPXQXUdjhVphfVkPzGlxbUmQfGUu0BjPpm0Y5tI5n59P87EYEiazCBchZYlcOvLZCRnViDJb06gigrkD3CN3HyAx8bIilYqmJ-_uGdcluqzO3VnZVCAnTMiQLa69W65QoN2Nf_TNUYqmNQPD11tVF94w6n-QkqERvK7Nunwm9lJrpaxtGsztHEUdAkrmr7tqm8DOewRPLGL9reHqzDPvfkYgOH819wzbsXeJiHOGqEq_gifS2Aw4mfwPg3cKbZaq4cEvedwjgsOAIsSFSTgmGDkb-4HrSFjI2thYdl3V9GWNf4UnnIl7p9LAQ0nrp0PU2gA8oBpRoon9sE8B_JX65r827_Cl3abxfCPsNnIxRwcDSO5pF-KdQkw1d1GtZ20ZoC28q7GiSxC0nCsPy0WPTpRDt0PjDSvTu3Fz0bFdpB6CbOVMjYU-kj770FVYEET84dz4U6S34SiBEUJYyRrI3YvxOP9eIRvWCea5oiomg_EdY851MZ5HTQWi8XRWRMRwBb48pK0EvtKIqqH6fdbofDhkJymPeKRqxXyESFWyin7muDilqLUYWCmKw42XQ1Ujx0GmPQDyyzwamBG2TxM=s635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              BALAS
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              3:43 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                    </Modal.Body>
                  </Modal.Content>
                </Modal>
                <Modal
                  isOpen={showModals}
                  onClose={() => setShowModals(false)}
                  _backdrop={{
                    _dark: {
                      bg: 'coolGray.800',
                    },
                    bg: 'warmGray.50',
                  }}>
                  <Modal.Content maxWidth="720" maxH="1080">
                    <Modal.CloseButton />
                    <Modal.Header>LISTA</Modal.Header>
                    <Modal.Body>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="2">
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/kyWt2uT7HPkhA_5I7YK2FuF0PGMvwkN0isr6cWwzzCz4djL2cAVRmjOaFq72VRgJZtkQFTglLegEs70mhHG_U5rOJ97oxx52SVDy5W57rtEtkNvvlPRJfbOHPn3ECwSjYWviLWc7X9wl_VBzMJHR9-1ZPid1URa82dS9f4YD-STTjo6kr7OKdBq2RcDwPsP7JO3fNMdsfLOjlBLMT4u1tI67keFW67Sdwv5EybFlSmufSZjZeoUjE7ME6BhtmPbJcu-ywP3fj4RDM3II7t79a-hFeJT42qc4bGwAyI_V9kEeFuIRCKPEqeDVuM1P1wIHeyDrF00iPue3306JpcAMgirutgG93Se3dzASq3i7zMi6Axg4L8GLMzIy-sPeCAsd080AtKmZDevYp46lYilmtdAY9hWgF9ewMYNzV_n02z0PPq4bSFameD-OMn-RltE5rNLUT2fyL8p0SLICXfxE8MFMj5SKnJgS_uwULNQEQ2MbgKTwQ6tCHfHY6MLd6n2jvQT7S8j34w8ZA3fcs3nXsuWQWPDMvPvJoSvv1PDVCibUEpMo1kezT-jBxOOF6qjxeG9IMp7R9L4vn0yHwTaXXTyVAOtfwVQYhQjdijv8u8LT4LhVlp0qiX8p6fAWi-xdkNFwPiJ8g0t6QqdgmuGQwI19e5OmpwJmLQuLfL5rbHT_B3sFOy1NfVhjJIeM2fsqdVW0WT_zjx6UV492OtgejBs0MSo4qHe0vPSvMz-scyEpg96oPXQ2nzzCtnKvG7mG8fVZ1ui5O7oULbpgWbFgnAYkwrSsk640e0rT2AigNNN8UouNdnflB6nbQxrNaeBo-FCx4Qn0Ddxvb9zSFYM_Ka7G6ZWUl-nODmJ0K1xegZPrKFLyi2skpUjz0dXNSJHpLZcgslRIx6QF7xI-nChZ8LskIE1xmmmQFQfeIQ3XepjN7DxnA0aBxrgaLY78_UnhBsPMDVXAw2qBYOfeoEEnmkNk2ZN5LjnN0xSfaIWHdPRzvyC-OXkqX2gwwBja5VzF5zAXedYcfieIN4ym3TcL3Wr1Z2de63iRLQKVuCbBSaQpO476xZ7pv6HCOiuCpAvgVvfpCwWW72-7k32fUD0rJ6igyF9dxtpbC8xqfoRU25hWOWa4kacLh06UcNg1qBQ2DJQaqNtmsQsYV2Dac4EQnT31DqYnA4tP_X_z=w1130-h635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              MY DAMA
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              3:24 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="2">
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/mrqmH9TMR5RYh8vC_53aRC1iGTPveRj8YPrE78ojOuriKT6urJHDxJfV5lYP1qZDpooads2bgBMdy1jG_0xkR-FfC5C6nq6rwTtY6rJDOxoKKVhuDKkfMWscR8RVDYlyPTQh9e4IwqcdmaqTiHH-fKHgccTEW1R8N5cZ0FpfdgFr4p9phST_ujajC7fJPVfSizHF62_5wyEK_Ci8HQ0tgdnXAL_qJ9B-4vmqmxoWBEKBcjQvjpgTmOhbowUzwqsFKP5ZyqbygclVNE377uijA5J66V0Q4ZEFrqp7y63p2RFjQkIMiCXPJKVKfMzK8a8nD_UO2anmGGC5lSrtFzokymqz1S73mVzWPZ-3PXw15itdDPnWCYpPVIuRWy5EzdAHjxCJ1DISPJ0IYkSmsguH6TJ_gZnILOV4EmLITRujzo1enO_pAFePuXjkKV-6c4X-FKhlpezwwMbJ7WdmWSqT41Av0n5BDq8vmcT7Vf2Rut2WKVdlCAZeMRk3k865QuQLZL5cM3Sa86pxWx_5Mq3h2PYNzDdna0jVMjlMS98fjognJF0YxdqcJK3HJkjdF0PPVd-5cgvrcrRAT7PZa2OCUgvy_upOqAZxWiIhFl1sZu1Ko_ThqKOXbrkizNiFvu2gti268HEkK_kKs9m3KbeK4gYlCy7j4ZtB0OQfEPAm0DHAuCkYI0tvv6RplX7GW_K9iL1UlBvzyfeQ6eS2NgXRE6hKn-taHs5GeRowmtSVGy8zFGmr-DCCEzfYlKNWc9EdO2cdUatrByVPO1_efRyILon6hBfcypMCEj_E6bnuGGljqBaXR5NKxNblsrTIjO4puoWe39w3kib-pOVyUPYAXIAugJ9o03IipNVNxACE2T9uqbUaAEedFonttnO9_QIw_QyuHawhiM2Dwx-emdwI7VF_RMml81V_YYjzLWNXguQ2aKzwQ4hOARkpeakAcSZCTHHkPwPnnyDb67-bMsG27W5fnwds4uSQMKbcXWGTkfFBPdQ-Toyx2Nci3WP0mkcY9CbyvxuZdnFN8UtVILlTpTbRCquMQJJ3vmzQbGgLMLpwesr2Z_djsBw4YIKHPnHzsoCq9_tAjmDwSvydISgZqGvvzdu9hCR7d-9rk52ZdMCknbYmD8J2Nyn4FPLOt2pKcQFvlklmXFIjdUF4NwMa-40fDZN34JRYZAC5=s635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              So My Girl
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              3:05 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: 'muted.50',
                        }}
                        borderColor="muted.800"
                        pl={['0', '4']}
                        pr={['0', '5']}
                        py="2">
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/r4IZFU6o1WInVspevxHOar90puWK8kb2_kEmIRbnq44p3Y_GgJktW3lKfqa-03Ptm6dPd3WMxkHAo9ZM2wqtHg-QrKPDDEya6llOO6tCOG9tJca1bcou7eKO9aWmWZZF8YmpFhd3bz5xLPM_DjUAnfThlPd7mE9NszW4TL2axq-S7CV0AAuPEJqGZROMXSc4OxWsdvKbyjMM1hedOLxrcFo9EIhOR31bkAkAhxLm1BVDDi2opV354IGkWCDPOpCsuq62lr1wO0XyHcGTcgxCEL8FqErtqUrcg9YDg7caJzeFubpu4Ll-2r1lVPRZtojSahwuNsfroi0OzZGqTOSYBSZ05t8TBHjHJJntzLCXDaA3MaS3Jlt4Idv1YBaUk557d9f0AddzzgN5dCjIuYJispjE4pFLOyShd9DVFRTATyWJqDSqOg3ZpPrMw2JAVSj8-x052YX1CToo_QoHA9vOGsX6m_50LRg9u8KsxgnOTnXfuFOhnqVdgNOsylheK2ZGVbuzuSJt13uavfO3vUP0PZczXGAN0PVOMWu_0k-LG8ddUxj5ML-PAOFoBeoCi8zJ2kzIhbpbHbk7XXzRy2Rx8sWtMRwrU1vevPMtgyw31-eHcoHwm3fZQgHIv6eqT9o0wEnUlFTsVU6l0OXlyVJaFb_vFBoEgyaYhd0TKbOQcMGfb6D6aCuYcdckWS_c573O2tMGHgHxwN03KXtqBllNTyuUbzsB0RTKYLuDYzjP9r30nJZZyZXgRo-Q-O6DfmlH_T6Zw_3IXinLss2zSwFTEp8YXPBNAbVQh6TgNXAOVD1D2e1L7EngK4O9cQ6YjTHh2xjxxPH7RjrG4Bk13HuiSkP8B40ZChhk9WbQPczRh7Mx2V1XNryzx7S8vGryVRBAz23tBD6uOwKkKQRvV-PZhksaq38XwnLpa8fwCHZJwk-nCxDwRUgS0SJKUkA6Bk1xc5qGKTdbSAO9XHFUOIZnTLJOcein3QAXUYvo-9mYC7t2J4zJYHgx8_n2_WVhn9TxzGlCIWNhKfH0xp9iBDQ2UOglTgg5MoZqzC9CgmF07uYlKVUa8rHsfutPTD3LcZq4HFaqzEGfs4GzEhNeOjgeow21R8-FcExq7n347OtvM3Ellg1VxFThUaiLmTeGYY9JBItVheO_yF1-vBRfmcKWrVpBMUjwUzaMB0Q-=w1130-h635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              La 9 ft BeatBox
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              3:48 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                      <Box>
                        {' '}
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar
                          size="100px"
                            bg="green.500"
                            source={{
                              uri: 'https://lh3.googleusercontent.com/FcCGLh-Y83orqJpS1nNBTqTRekv2Hiz1b1tWBxOyayFoBCZnBcsP6W9v4pNvs9LomYuWs4zw1LOglJu3ZdzQT4Utfnw4FCqqQDifrWOC7YE65IovxOoR54IP1CXJKuB49vGhhIsjv8Cc6ntCPMlkkrmoob8g84US2C57RE4otLcvPpnA8UNn3T27x99ZrPEM3Fm6nqddZHpXIm3OCPcLjTAZXiOpb3GSUP5-R5jwsiGBGkF9Qk4Ma1_YptHCxsIHTXw-sUPxuHO-V1Mq4nekC7upXtqblC1A1C_YtYQs4O5Ncbsac9FFSblvC-o5J0NDXXrZM7kNrvHXnQzohnjmraliRWEDrZV8-MP19mvoqDyrgLvmJOBWnGePowHFYs4ob6gvFPRsmBBvG2F5dbsWqIVi8JshTTf32psuCTCw-_Xi-_V6fN-9ggc9EQ2hTddXFKfaf0hdu3b29YLOJiVkNTpeXZyjPUtw4X7Cp_evjwLFdxU7AjDWXxOBYwEE_gKxtgmciOjPv3yj8-gC-X1BQBTsoKgB9w-x8s06J2PByX6dPm65xCaBl2K1CS_-UddH7dYCLcXeamYaZwVSsYyDnYoOLEnLcfMSQKC3c3klsTMvG-uonHFQPwc5HOu3cUlykANh_1-dVZ6qSs2afskqes294MAfTFZN1DGEaOZSq-X5tSsqCCwT0pMRYv3SWCco0l-UgypKWW3XgFJI2G-rIS3V38LUyqg_0F1Zrit7ZL3nws6tuTEzaeMqngl03v6yrVGkRie3UvkSWGQtyXt-M0snxZwGc7jH_u2vcxSk38x_499bDJ82WHWlxxSaJRMcl2nDu8xgOzEdqkYmbuarKMkkW6S4ZEuwVUU-bVlhfJKJ1wk37IS4j0fUKJzdw_2USUNk_x_LS441A8XxXzQBD2JsTFPgIAIY0w1g-6OWdm_6CY88hPdzMoc3kFzUWLgKIFQBEZNvJzo4l9hI_D7dADzbNhb7w3nz_FpXMTMJ8W_31wP-Iru-jU3nvaUqyb21jgDPjMk2tHnuHoGfv1YKAVvreGlQ-RYjEJesp8zh4Ctvlx7u-KhWm-h3L30LWSzy0sl_OFodBQBuj57ywUH1VWLXI9CQR6R1F6bKZ6K5UPtoUn-2RbHiek35lakpsbcQYkhvMyo24NqFFk-alzwbi1yZkT643swjirhO=w1130-h635-no?authuser=1',
                            }}></Avatar>
                          <VStack>
                            <Text
                            fontSize="2xl"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                              color="coolGray.800"
                              bold>
                              La Pende
                            </Text>
                            <Text
                            fontSize="2xl"
                              color="coolGray.600"
                              _dark={{
                                color: 'warmGray.200',
                              }}>
                              2:58 min
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Box>
                    </Modal.Body>
                  </Modal.Content>
                </Modal>
              </Center>
            </Box>
      </Center>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VideosScreen />
      </Center>
    </NativeBaseProvider>
  );
};
