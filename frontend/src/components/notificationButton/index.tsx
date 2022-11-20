import ico from '../../assets/img/notification-iconr.svg';
import axios from 'axios';

import './styles.css';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number;
    
}

function handleClick (id : Number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO!");
        
    })
}

function NotificationButton({saleId} : Props) {

    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={ico} alt="Notificar" />
        </div>
    )
}
  
export default NotificationButton
  