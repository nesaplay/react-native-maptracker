import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = ({}) => {
  return (
    <>
      <Spacer>
        <Input placeholder="Recording #1..." />
      </Spacer>
      <Button title='Start Recording' />
    </>
  );
};

export default TrackForm;
