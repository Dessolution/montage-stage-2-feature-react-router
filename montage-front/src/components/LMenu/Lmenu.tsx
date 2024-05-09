
import Feature from '../../assets/images/Feature'
import Button from '../Button/Button'
import './Lmenu.css'


const Lmenu = () => {
  return (
    <div className="Lmenu">
      <div className='Main_buttons'>
        <Button as="button" type='button' disabled className='My_orders'>  Мои заказы </Button>
        <Button as="button" className='My_projects'> Мои проекты </Button>
        <Button as="button" className='Profile_settings'> Настройки профиля </Button>
      </div>
          <Feature />
          <div className='Feature'>
        <p>Ежемесячная покупка скидки 20% на все виды работ</p>
        <Button as="button" className='change_tariff'> Сменить тариф</Button>
      </div>
      
        <Button as="button" className='Exit_btn'>Выйти из аккаунта</Button>
      
        
      
      


    </div>
  )
}

export default Lmenu
