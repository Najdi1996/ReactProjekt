import React, { FC } from 'react';
import styled from 'styled-components';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { MainContent } from '../MainContent/MainContent';

const Wrapper = styled.section`
`;


const Content = styled.div`
    max-width: 1800px;
    display: flex;
`;

const MainPage: FC = () => {
    return(
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftMenu />
                    <Switch>
                        <Route path="/" exact>
                            <MainContent/>
                        </Route>
                    </Switch>
                 </Content>    
            </Wrapper>
        </Router>
    );
};

export default MainPage;