import { useState } from 'react';
import {ImgType01} from '../atom/ImgType01';

import '../common/css/imgGallery.css';

export const ImgGallery = props =>{
    const {data} = props;
    const [modalImg, setModalImg] = useState({});
    const onClickModal = (e)=>{
        const target = e.currentTarget;
        const nweObj = {
            img: target.dataset.img,
            alt: target.querySelector('img').getAttribute('alt')
        }
        console.log(nweObj);
        setModalImg(nweObj)
    }
    return(
        <main className="section01">
            <section className="section__inr">
                <ui className="imgList">
                    {
                        data.map((item, i) =>(
                            <li className='imgList__item' key={i}>
                                <button onClick={onClickModal} data-img={item.bigImg}>
                                    <ImgType01 img={item.smallImg} alt={item.text}>{item.text}</ImgType01>
                                </button>
                            </li>
                        ))
                    }
                </ui>
            </section>
            <div className='modal'>
                <ImgType01 img={modalImg.img} alt={modalImg.alt}>{modalImg.alt}</ImgType01>
            </div>
        </main>
    )
}