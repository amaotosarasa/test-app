import {CardLayout} from '../component/CardLayout';

export const TopPage = ()=>{
    const cardDataAry = [
        {
            position: 1,
            picture:{
                img:`${process.env.PUBLIC_URL}/img/img_001.jpg`,
                alt:'',
            },
            title: 'Title',
            txet:[
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugiat assumenda maiores.',
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugiat assumenda maiores.'
            ]
        },
        {
            position: 2,
            picture:{
                img:`${process.env.PUBLIC_URL}/img/img_002.jpg`,
                alt:'',
            },
            title: 'Title02',
            txet:[
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugiat assumenda maiores.',
            ]
        },
        {
            position: 3,
            picture:{
                img:`${process.env.PUBLIC_URL}/img/img_003.jpg`,
                alt:'',
            },
            title: 'Title03',
            txet:[
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugiat assumenda maiores.',
            ]
        },
    ];

    return(
        <main className="section01">
            <div className="section__inr">
                <CardLayout data={cardDataAry} />
            </div>
        </main>
    )
}