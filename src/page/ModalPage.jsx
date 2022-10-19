import {ImgGallery} from '../component/ImgGallery';

export const ModalPage = props =>{
    const ModalImgData = [
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_01s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_01l.jpg`,
            text:'波'
        },
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_02s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_02l.jpg`,
            text:'ダイビング'
        },
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_03s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_03l.jpg`,
            text:'クラゲ'
        },
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_04s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_04l.jpg`,
            text:'クジラの尻尾'
        },
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_05s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_05l.jpg`,
            text:'くらげ'
        },
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_06s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_06l.jpg`,
            text:'砂浜のハート'
        },
        {
            smallImg:`${process.env.PUBLIC_URL}/img/modal_img_07s.jpg`,
            bigImg:`${process.env.PUBLIC_URL}/img/modal_img_07l.jpg`,
            text:'海を眺める'
        }
    ]
    return(
        <section className="section01">
            <div className="section__inr">
                <div>
                    <ImgGallery data={ModalImgData} />
                </div>
            </div>
        </section>
    )
}