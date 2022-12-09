import React from 'react';
import {Box,FlatList,Heading, Avatar, HStack, VStack, Text, Spacer, Button, Center, NativeBaseProvider, Modal,} from 'native-base';
import { useState } from 'react';


const VideosScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  return (
    <Box>
        <Heading fontSize="4xl" p="14" pb="9">
          GALERIA
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
                              uri: 'https://scontent.fpbc1-2.fna.fbcdn.net/v/t39.30808-6/291027033_434910671975688_3331237724701759705_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1uZ67doGEA4AX8LlVk1&_nc_ht=scontent.fpbc1-2.fna&oh=00_AfCKqhuHjIZCiaZO6xKT33shK_PzaoeZUgAEpE6yrstVxA&oe=638D0EAB',
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
                              uri: 'https://scontent.fpbc1-2.fna.fbcdn.net/v/t39.30808-6/241644433_222376839775928_5435099866028226639_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bqHcCvExsA8AX_4P_O4&_nc_ht=scontent.fpbc1-2.fna&oh=00_AfCYK4RbD3o-FGI5mFQGkV5LCKZgW_dBwYkJiTHvJzuocA&oe=638BBD1E',
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
                            source={require('../nubes.jpg')}
                            ></Avatar>
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
                            source={require('../YNTQ.jpg')}></Avatar>
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
                            source={require('../44.jpg')}></Avatar>
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
                            source={require('../balas.jpg')}></Avatar>
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
                            source={require('../dama.jpg')}></Avatar>
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
                            source={require('../girl.jpg')}></Avatar>
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
                            source={require('../9.jpg')}></Avatar>
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
                            source={require('../pende.jpg')}></Avatar>
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
