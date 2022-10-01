import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='pa3 tc'>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle data-toggle='dropdown' tag='span'>
          <img
            src='https://preview.redd.it/lgshxkmdoeez.jpg?auto=webp&s=77c9e6cab8ccb2f12a7032410df001ba688ec3ed'
            className='br-100 h3 w3 dib'
            alt='avatar'
          />
        </DropdownToggle>
        <DropdownMenu
          className='b--transparent shadow-5'
          style={{
            marginTop: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}>
          <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
          <DropdownItem onClick={() => onRouteChange('signout')}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileIcon;
