import React, { useState } from 'react';

import './Events.scss';

import ClipboardEvents from './ClipboardEvents';
import CompositionEvents from './CompositionEvents';
import KeyboardEvents from './KeyboardEvents';
import FocusEvents from './FocusEvents';
import FormEvents from './FormEvents';
import GenericEvents from './GenericEvents';
import MouseEvents from './MouseEvents';
import PointerEvents from './PointerEvents';
import SelectionEvents from './SelectionEvents';
import TouchEvents from './TouchEvents';
import UIEvents from './UIEvents';
import WheelEvents from './WheelEvents';
import MediaEvents from './MediaEvents';
import ImageEvents from './ImageEvents';
import AnimationEvents from './AnimationEvents';
import TransitionEvents from './TransitionEvents';
import OtherEvents from './OtherEvents';

const Events = () => {
  return (
    <div>
      <h2>SyntheticEvents</h2>
      <ClipboardEvents />
      <CompositionEvents />
      <KeyboardEvents />
      <FocusEvents />
      <FormEvents />
      <GenericEvents />
      <MouseEvents />
      <PointerEvents />
      <SelectionEvents />
      <TouchEvents />
      <UIEvents />
      <WheelEvents />
      <MediaEvents />
      <ImageEvents />
      <AnimationEvents />
      <TransitionEvents />
      <OtherEvents />
    </div>
  );
};

export default Events;
