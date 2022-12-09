import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Image,
  Text,
  Spacer,
  Button,
  Center,
  NativeBaseProvider,
  Modal,
  ScrollView,
} from 'native-base';
import { useState } from 'react';

const VideosScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPanta, setShowPanta] = useState(false);
  const [showSuda, setShowSuda] = useState(false);
  const [showChama, setShowChama] = useState(false);
  const [showInfoP, setShowInfoP] = useState(false);
  const [showInfoC, setShowInfoC] = useState(false);
  const [showInfoPa, setShowInfoPa] = useState(false);
  const [showInfoS, setShowInfoS] = useState(false);

  return (
    <ScrollView>
      <Box>
        <Center>
          <Heading fontSize="4xl" p="14" pb="9">
            DISPONIBLES:
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
                        uri: 'https://es.digitaltrends.com/wp-content/uploads/2021/08/14-2020-gmc-sierra-denali-3.jpg?fit=768%2C512&p=1',
                      }}></Avatar>
                    <VStack>
                      <Text
                        fontSize="2xl"
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        Camionetas
                      </Text>
                      <Text
                        fontSize="2xl"
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        Mas Detalles
                      </Text>
                    </VStack>
                    <Spacer />
                  </HStack>
                </Box>
              </Button>
              <Button variant="ghost" onPress={() => setShowSuda(true)}>
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
                        uri: 'https://i.ytimg.com/vi/z4qE8a7AJ-8/hqdefault.jpg',
                      }}></Avatar>
                    <VStack>
                      <Text
                        fontSize="2xl"
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        Limosinas
                      </Text>
                      <Text
                        fontSize="2xl"
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        Mas Detalles
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
                        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-divo-lady-bug-2020-1600-05-1614854784.jpg',
                      }}></Avatar>
                    <VStack>
                      <Text
                        fontSize="2xl"
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        Lujosos.
                      </Text>
                      <Text
                        fontSize="2xl"
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        Mas Detalles
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
                        uri: 'https://camionetascuatroporcuatro.com/wp-content/uploads/2022/08/Honda-CR-V-1024x628.jpg',
                      }}></Avatar>
                    <VStack>
                      <Text
                        fontSize="2xl"
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        Familiares
                      </Text>
                      <Text
                        fontSize="2xl"
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        Mas Detalles
                      </Text>
                    </VStack>
                    <Spacer />
                  </HStack>
                </Box>
              </Button>

              <Modal
                isOpen={showInfoP}
                onClose={() => setShowInfoP(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Mas Detalles</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">TALLA</Text>
                        <Text color="blueGray.400">Mediana</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">COLOR</Text>
                        <Text color="blueGray.400">Negro, Blanco</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">PRECIO</Text>
                        <Text color="green.500">$250</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">STOCK</Text>
                        <Text color="blueGray.400">5</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>

              <Modal
                isOpen={showInfoS}
                onClose={() => setShowInfoS(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Mas Detalles</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">TALLA</Text>
                        <Text color="blueGray.400">Mediana</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">COLOR</Text>
                        <Text color="blueGray.400">Negro, Blanco, Cafe</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">PRECIO</Text>
                        <Text color="green.500">$350</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">STOCK</Text>
                        <Text color="blueGray.400">5</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>

            <Modal
                isOpen={showInfoC}
                onClose={() => setShowInfoC(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Mas Detalles</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">TALLA</Text>
                        <Text color="blueGray.400">M, G</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">COLOR</Text>
                        <Text color="blueGray.400">Negro, Mezclilla</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">PRECIO</Text>
                        <Text color="green.500">$630</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">STOCK</Text>
                        <Text color="blueGray.400">3</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal
                isOpen={showInfoPa}
                onClose={() => setShowInfoPa(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Mas Detalles</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">TALLA</Text>
                        <Text color="blueGray.400">28 - 32</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">COLOR</Text>
                        <Text color="blueGray.400">Negro</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">PRECIO</Text>
                        <Text color="green.500">$380</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">STOCK</Text>
                        <Text color="blueGray.400">5</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>

              <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Center><Modal.Header>Camionetas </Modal.Header>
                  <Text>Excelentes para viajes en la naturaleza</Text></Center>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'data:image/jpeg;base64,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',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoP(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                         
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://motormania.com.mx/wp-content/uploads/2021/11/RT_V_485dc2d6520f4c56b9af247fba637598.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoP(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6fc45439302f445790cc2fd66e5f02b5.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoP(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/03/20220311-10-CAMIONETAS-SUV-MAS-BARATAS-DE-COLOMBIA-EN-2022-01.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoP(true)}>
                          Mas Detalles
                        </Button>

                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal
                isOpen={showSuda}
                onClose={() => setShowSuda(false)}
                size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Center><Modal.Header>Limosinas</Modal.Header>
                  <Text>Son excelentes para XV, eventos importantes</Text></Center>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://limusinasfenix.com/wp-content/uploads/2021/01/gaviota-limusina-blanca-1.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoS(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'http://www.bestbrooklynnylimoservice.com/images/hummer-transformer.png',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoS(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://i.pinimg.com/236x/01/da/bc/01dabc40eb3e220ba8b1e320d607d89c--dodge-challenger-srt-limousine.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoS(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://i.ytimg.com/vi/ZGJWY_hZtRM/maxresdefault.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoS(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal
                isOpen={showChama}
                onClose={() => setShowChama(false)}
                size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Center><Modal.Header>Familiares</Modal.Header></Center>
                  <Center>
                    <Text>
                    Excelente para viajes
                    </Text>
                  </Center>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://s3.amazonaws.com/nexu-ghost-blog/2019/10/camioneta-familiar-7-pasajeros.png',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoC(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://es.digitaltrends.com/wp-content/uploads/2022/08/mejores-vehiculos-familiares.jpg?p=1',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoC(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0471dcb908d24871aeb09df5bd0d9ce5.webp',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoC(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOzyZF3viiNla1olQjgK9SfkYTKqcH6fRZOGvku2TimPytqNADVRs8vNeJcsjE1LwajY&usqp=CAU',

                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoC(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>
              <Modal
                isOpen={showPanta}
                onClose={() => setShowPanta(false)}
                size="xl">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Center><Modal.Header>Deportivos</Modal.Header>
                  <Text>Excelentes para una salida con tu chica

                  </Text>
                  </Center>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://i.pinimg.com/originals/46/96/66/469666d5c06357070139208d90efd769.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoPa(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://cdn2.mediotiempo.com/uploads/media/2020/02/06/fotos-coleccion-autos-lujo-cristiano-9.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoPa(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://cdn-3.expansion.mx/dims4/default/9514d26/2147483647/strip/true/crop/630x500+0+0/resize/1200x952!/format/webp/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fgex.lifeandstyle%2Fuploads%2Fasset%2Fasset_file%2F7612%2FLykan1.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoPa(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
                        </Text>
                      </HStack>
                    </VStack>

                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Image
                          source={{
                            uri: 'https://i.pinimg.com/736x/eb/32/e6/eb32e68869f4b0e0e48ea83fd1fd5b17.jpg',
                          }}
                          alt="Imagen no Disponible"
                          size="xl"
                        />
                        <Button onPress={() => setShowInfoPa(true)}>
                          Mas Detalles
                        </Button>
                        <Text color="black">
                          
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