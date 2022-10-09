import {H3Title} from '../atom/H3Title';
import '../common/css/CardLayout.css';

export const CardLayout = props =>{
    const {data} = props;
    return(
        <ul className='card__list'>
        {
            data.map(item =>(
                <li className="card" key={item.position}>
                    <a href="#">
                        <div className="card__item">
                            <div className='card__img'><img src={item.picture.img} alt={item.picture.alt} /></div>
                            <section className='card__txtBlock'>
                                <div className='card__title'><H3Title>{item.title}</H3Title></div>
                                {
                                    item.txet.map(text =>(
                                        <p>{text}</p>
                                    ))
                                }
                            </section>
                        </div>
                    </a>
                </li>
            ))
        }
        </ul>
    )
}