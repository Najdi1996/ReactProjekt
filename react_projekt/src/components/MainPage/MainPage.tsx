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
import  { Test }  from '../TestPage/TestPage';
import { Entities } from '../Entities/Entities';
import { Profile } from '../Profile/Profile';


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
                    <Route path="/Entities">
                            <Entities />
                        </Route>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/Ecosystem">
                            <Test />
                        </Route>
                        <Route path="/Publications">
                            <Test />
                        </Route>
                        <Route path="/Your Network">
                            <Test />
                        </Route>
                        <Route path="/Your Publications">
                            <Test />
                        </Route>
                        <Route path="/People">
                            <Test />
                        </Route>
                        <Route path="/Administration">
                            <Test />
                        </Route>
                        <Route path="/Client contract">
                            <Test />
                        </Route>
                        <Route path="/Supplier contract">
                            <Test />
                        </Route>
                        <Route path="/Corporate">
                            <Test />
                        </Route>
                        <Route path="/Group Norms">
                            <Test />
                        </Route>
                        <Route path="/Real estate contracts">
                            <Test />
                        </Route>
                        <Route path="/Privacy">
                            <Test />
                        </Route>
                        <Route path="/Settings">
                            <Test />
                        </Route>
                        <Route>
                            <MainContent/>
                        </Route>
                    </Switch>
                 </Content>    
            </Wrapper>
        </Router>
    );
};

export default MainPage;