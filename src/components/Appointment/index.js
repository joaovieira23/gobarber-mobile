import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = () => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatar/50/avatarprofile.png',
          }}
        />

        <Info>
          <Name>João Victor Vieira de Andrade</Name>
          <Time>em 3 horas</Time>
        </Info>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      </Left>
    </Container>
  );
};

export default Appointment;
