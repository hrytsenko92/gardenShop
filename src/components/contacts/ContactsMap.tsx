import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const StyledMapContainer = styled(MapContainer)`
  @import '~leaflet/dist/leaflet.css';
  @import '~react-leaflet-markercluster/dist/styles.min.css';
  height: 100%;
  /* box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.28); */
`;
// 48,4129710, 27,1358890
const ContactsMap: React.FC = () => {
  return (
    <StyledMapContainer center={[48.412971, 27.135889]} zoom={6.5} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[48.412971, 27.135889]}>
        <Popup>Знайти нас можна ось тут</Popup>
      </Marker>
    </StyledMapContainer>
  );
};
export default ContactsMap;
