import {H1Title} from '../atom/H1Title';

export const Header = ()=>{
    return(
        <header className="header">
            <div className="header__inr">
                <H1Title addClass="header__tll">サンプル</H1Title>
            </div>
        </header>
    )
}