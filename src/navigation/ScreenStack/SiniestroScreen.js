import React from 'react';
import { Box, FlatList, Heading, Avatar, HStack, VStack, Image, Text, Spacer, Button, Center, NativeBaseProvider, Modal, ScrollView, } from 'native-base';
import { useState } from 'react';


const VideosScreen = () => {
    const [showModal, setShowModal] = useState(false);
  const [showPanta, setShowPanta] = useState(false);
  const [showSuda, setShowSuda] = useState(false);
  const [showChama, setShowChama] = useState(false);

    return (
        <ScrollView>
        <Box>
            <Center>
                <Heading fontSize="4xl" p="14" pb="9">
                    Playeras
                    {'\n'}
                </Heading>
                <Box>
                    <Center>
                        <Button variant="ghost" onPress={() => setShowModal(true)}>
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
                                            uri: 'https://media.gotrendier.mx/media/products/3/4/1/8/5/9/7/n_795814320210311140349_0.jpg',
                                        }}></Avatar>
                                    <VStack>
                                        <Text
                                            fontSize="2xl"
                                            _dark={{
                                                color: 'warmGray.50',
                                            }}
                                            color="coolGray.800"
                                            bold>
                                            Playeras
                                        </Text>
                                        <Text
                                            fontSize="2xl"
                                            color="coolGray.600"
                                            _dark={{
                                                color: 'warmGray.200',
                                            }}>
                                            Unisex
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                </HStack>
                            </Box>
                        </Button>
                        <Button  variant="ghost" onPress={() => setShowSuda(true)}>
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
                                            uri: 'https://http2.mlstatic.com/D_NQ_NP_674117-MLM40946047057_022020-O.jpg',
                                        }}></Avatar>
                                    <VStack>
                                        <Text
                                            fontSize="2xl"
                                            _dark={{
                                                color: 'warmGray.50',
                                            }}
                                            color="coolGray.800"
                                            bold>
                                            Sudaderas
                                        </Text>
                                        <Text
                                            fontSize="2xl"
                                            color="coolGray.600"
                                            _dark={{
                                                color: 'warmGray.200',
                                            }}>
                                            Unisex
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                </HStack>
                            </Box>
                        </Button>
                        <Button variant="unstyled" onPress={() => setShowPanta(true)}>
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
                                            uri: 'https://gothaesthetics.com/wp-content/uploads/2021/07/SMILES-PRINT-LOOSE-BLACK-AESTHETIC-JEANS-667x667.jpg',
                                        }}></Avatar>
                                    <VStack>
                                        <Text
                                            fontSize="2xl"
                                            _dark={{
                                                color: 'warmGray.50',
                                            }}
                                            color="coolGray.800"
                                            bold>
                                            Pantalones
                                        </Text>
                                        <Text
                                            fontSize="2xl"
                                            color="coolGray.600"
                                            _dark={{
                                                color: 'warmGray.200',
                                            }}>
                                            Unisex
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                </HStack>
                            </Box>
                        </Button>
                        <Button variant="unstyled" onPress={() => setShowChama(true)}>
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
                                            uri: 'https://i.pinimg.com/736x/1a/67/e0/1a67e046aa486f663d8b7ff2c6417244.jpg',
                                        }}></Avatar>
                                    <VStack>
                                        <Text
                                            fontSize="2xl"
                                            _dark={{
                                                color: 'warmGray.50',
                                            }}
                                            color="coolGray.800"
                                            bold>
                                            Chamarras
                                        </Text>
                                        <Text
                                            fontSize="2xl"
                                            color="coolGray.600"
                                            _dark={{
                                                color: 'warmGray.200',
                                            }}>
                                            Unisex
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                </HStack>
                            </Box>
                        </Button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>PLAYERAS</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://http2.mlstatic.com/D_NQ_NP_923268-MLM41011330253_032020-O.jpg"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: M {'\n'} COLOR: NEGRO                   {'\n'} PRECIO: $250
                        </Text>

                      </HStack>

                    </VStack>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://http2.mlstatic.com/D_NQ_NP_884028-MLM51123574408_082022-O.webp"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: M {'\n'} COLOR: BLANCO                {'\n'} PRECIO: $250
                        </Text>

                      </HStack>

                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://http2.mlstatic.com/D_NQ_NP_627899-CBT48438137955_122021-W.jpg"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: M {'\n'} COLOR: NEGRO                  {'\n'} PRECIO: $250
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://images-na.ssl-images-amazon.com/images/I/718ye85-fpL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: M {'\n'} COLOR: NEGRO                {'\n'} PRECIO: $250
                        </Text>

                      </HStack>

                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal isOpen={showSuda} onClose={() => setShowSuda(false)} size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>SUDADERAS</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://http2.mlstatic.com/D_NQ_NP_899108-CBT51089341452_082022-O.jpg',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M - G {'\n'} COLOR: NEGRO              {'\n'} PRECIO: $400
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://img.ltwebstatic.com/images3_pi/2021/05/27/162207983600c640548e75390cb03ed5f8e53470af_thumbnail_220x293.webp',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M - G {'\n'} COLOR: CAFE                 {'\n'} PRECIO: $530
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://img.ltwebstatic.com/images3_pi/2021/09/21/1632208643a54c37ed83d56edcc6bb1a0c3e401dd8_thumbnail_600x.webp',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M - G {'\n'} COLOR: CAFE                 {'\n'} PRECIO: $410
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://http2.mlstatic.com/D_NQ_NP_862261-MLM32013662897_082019-O.jpg',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M - G  {'\n'} COLOR: BLANCO            {'\n'} PRECIO: $390
                        </Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal isOpen={showChama} onClose={() => setShowChama(false)} size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>CHAMARRAS</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://i.pinimg.com/736x/1a/67/e0/1a67e046aa486f663d8b7ff2c6417244.jpg',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M {'\n'} COLOR: MEZCLILLA            {'\n'} PRECIO: $799
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://cf.shopee.com.mx/file/4e9ea461332857e62ff043736fff8aa3',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M    {'\n'} COLOR: NEGRO                   {'\n'} PRECIO: $645
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'http://cdn.shopify.com/s/files/1/0251/7706/3523/products/Chamarra-Zels-Naranja-Tazia-1.jpg?v=1667857869',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M - G{'\n'}COLOR: NARANJA              {'\n'} PRECIO: $799
                        </Text>

                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://cf.shopee.com.mx/file/bd75ceabc15cc9ce135d854332a6439b',
                          }}
                          alt="Alternate Text"
                          size="xl"
                        />
                        <Text color="black">
                          TALLA: M - G {'\n'} COLOR: MEZCLILLA           {'\n'} PRECIO: $699
                        </Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal isOpen={showPanta} onClose={() => setShowPanta(false)} size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>PANTALONES</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://gothaesthetics.com/wp-content/uploads/2021/07/SMILES-PRINT-LOOSE-BLACK-AESTHETIC-JEANS-667x667.jpg"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: 30 - 32 {'\n'} COLOR: NEGRO               {'\n'} PRECIO: $400
                        </Text>

                      </HStack>

                    </VStack>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://i.etsystatic.com/36669430/r/il/63db02/4278946145/il_fullxfull.4278946145_mfg2.jpg"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: 25 - 32 {'\n'} COLOR: NEGRO               {'\n'} PRECIO: $350
                        </Text>

                      </HStack>

                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://cdn.shopify.com/s/files/1/2698/4646/products/product-image-801171667_grande_waifu2x_photo_noise3_scale_tta_1_2400x.png?v=1623960561"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: 28 - 32 {'\n'} COLOR: NEGRO               {'\n'} PRECIO: $350
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Image source={{
                          uri: "https://cdn.shopify.com/s/files/1/2698/4646/products/EFUNGAL-Harem-Joggers-Man-Tie-Dyeing-Patchwork-Full-Length-Baggy-Style-Harajuku-Streetwear-Hip-Hop-Cargo.jpg?v=1623958256"
                        }} alt="Alternate Text" size="xl" />
                        <Text color="black">
                          TALLA: 29 - 30 {'\n'} COLOR: NEGRO               {'\n'} PRECIO: $380
                        </Text>

                      </HStack>

                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
                    </Center>
                </Box>
            </Center>
        </Box>
        </ScrollView>
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
