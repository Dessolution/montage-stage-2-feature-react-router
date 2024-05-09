import React from 'react';
import './ProfileSettings.css';
import Notifications from '../../components/Notifications/Notifications';
import ProfileSettingsNav from '../../components/ProfileSettingsNav/ProfileSettingsNav';
import Button from '../../components/Button/Button';

const ProfileSettings: React.FC = () => {
    return (
        <div>
            <div className='ProfileSettings'>
                <h1 className='ProfileSettings_title'>Настройки профиля</h1>
                <div className='ProfileSettings_nav'>
                    <ProfileSettingsNav >Личные данные</ProfileSettingsNav>
                    <ProfileSettingsNav >Настройки</ProfileSettingsNav>
                    <ProfileSettingsNav >Финансы</ProfileSettingsNav>
                    <ProfileSettingsNav >Тарифы</ProfileSettingsNav>
                </div>
                <Notifications/>
                <div className='Confirms'>
                    <Button as="button" type='button'  className='Cancel'> Отменить </Button>
                    <Button as="button" type='button'  className='Confirm'>  Сохранить </Button>
                </div>
            </div>
            

        </div>
    );
};

export default ProfileSettings;
