import React from 'react';
import FlexContainer from '../components/FlexContainer.jsx';
import { data } from '../data/module-data.js';
import ProfileCard from '../components/ProfileCard.jsx';

function Lab3Page() {
  return (
    <FlexContainer element={ProfileCard} data={data} />
);

}

export default Lab3Page;