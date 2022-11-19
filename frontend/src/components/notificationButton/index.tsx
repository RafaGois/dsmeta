import ico from '../../assets/img/notification-iconr.svg';

import './styles.css';

function NotificationButton() {
    return(
        <div className="dsmeta-red-btn">
            <img src={ico} alt="Notificar" />
        </div>
    )
}
  
export default NotificationButton
  