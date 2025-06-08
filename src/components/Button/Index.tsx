import { Children, ReactNode } from "react";
import styled from "styled-components";
import styles from "./Button.module.css";

type BtnProps = {
    isLoading: boolean;
};
const Btn = styled.button <BtnProps>`
    background-color: ${props => props.isLoading ? 'gray': 'red'};
    padding: 0;
`

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick: ()=> void;
}


function Button ({children, isLoading, onClick}: Props) {
    return(
        <Btn onClick={onClick} disabled={isLoading} isLoading = {true} type="button" 
        className={[styles.button, styles.padded].join(' ')}
        //className={`button btn-${isLoading ? 'secondary' : 'primary'}`} 
        >{isLoading ? 'cargando..' : children} 
        </Btn>
    )
}
export default Button;