import React from 'react';
import './ProfileSettingsNav.css';

interface ProfileSettingsNavProps {
  children: React.ReactNode;
}

const ProfileSettingsNav: React.FC<ProfileSettingsNavProps> = ({ children }) => {
  return (
    <div>
      <div  className="ProfileSettingsNav">{children}</div>
    </div>
  );
};

export default ProfileSettingsNav;