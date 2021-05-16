import { FC } from 'react';
import styled from 'styled-components';

import { Publications } from './WorkSpace/Publications';
import { WorkSpace } from './WorkSpace/WorkSpace';
import { ResumeYourWork } from './WorkSpace/ResumeYourWork';

const Wrapper = styled.div `
    width: 100%;
    margin-left: 50px;
    margin-right: 100px;
    display:inline-block;
`;

const Footer = styled.div `
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: rgb(116,183,218);

    span {
        color: black;
    }
`;

export const MainContent: FC = () => {
        return (
            <Wrapper>
               <Publications/>
               <WorkSpace></WorkSpace>
               <ResumeYourWork/>
               <Footer>PREVIOUS 01 ... 09 <span>10</span> 11 ... 18   NEXT</Footer>  
            </Wrapper>
    );
};