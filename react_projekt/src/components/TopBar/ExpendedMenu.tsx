import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';

const Wrapper = styled.div `
    position: absolute;
    top: 46px;
    left: 300px;
    background: white;
    padding: 10px;
    border: 1px solid;
    ul {
        border: 1px solid ${Colors.grey1};
    }
`;
const Wrapper2 = styled.aside ` 
    flex: 2;
    margin-right: -23px;
`;

const Menu = styled.div `
    background: ${Colors.white};
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    border-radius: 4px;
    width: 90%;
    margin-left: 5px;
    margin-top: 5px;
`;

const InputWrapper = styled.div `
    width: 300px;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
`;

const CustomInput = styled.input `
    width: 90%;
    border: 0px;
    text-align: left;
    margin-bottom: 5px;

    &::placeholder{
        color: #e0dcdc;
        font-weight: bold;
    }   
`;

const CustomImg = styled.img ` 
    margin-right: 15px;
        width: 15px;
        height: 15px;
`;

const MenuList = styled.ul ` 
    padding: 16px;
`;

const UserList = styled.ul `
    padding: 16px;
`;

const PlatformItem = styled.li`
    align-items:center;
    margin-bottom: 8px;
    margin-top: 5px;
    cursor: pointer;
`;

const WorkspacesItem = styled.li `
    align-items: center;
    margin-bottom: 8px;
    margin-top: 5px;
    cursor: pointer;
`;

const AccountItem = styled.li ` 
    align-items: center;
    margin-bottom: 8px;
    margin-top: 5px;
    cursor: pointer;
`;

const UserImg = styled.img ` 
`;

const Name = styled.p `
    color: ${Colors.black};
    text-transform: capitalize;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 15px;
`;

const Description = styled.p ` 
    color: ${Colors.blue2};
    font-size: ${fontSize[12]};
    font-weight: 100;
    margin-bottom: 5px;
`;


const LogOutButton = styled.div ` 
    margin-left: 25%;
    font-size: ${fontSize[16]};
    color: ${Colors.grey2};
    cursor: pointer;
    padding: 16px;
`;

const Scroll = styled.div `
    overflow: scroll;
`;





export const ExpandedMenu: FC = () => {
    
    return(
        <Wrapper>
            <Wrapper2>
                <Menu>
                    <InputWrapper>
                        <CustomInput placeholder="Filter...." type="text" />
                    </InputWrapper>
                    <MenuList>
                    <Scroll>
                    <span>Platform</span>
                        <PlatformItem>
                            <li><CustomImg src="./media/icons/house2.png" alt=""></CustomImg>Home</li>
                            <li><CustomImg src="./media/icons/publications.png" alt=""></CustomImg>Publications</li>
                            <li><CustomImg src="./media/icons/people.png" alt=""></CustomImg>People</li>
                            <li><CustomImg src="./media/icons/entities.png" alt=""></CustomImg>Entities</li>
                            <li><CustomImg src="./media/icons/administration.png" alt=""></CustomImg>Administration</li>
                        </PlatformItem>
                        <span>Workspaces</span>
                        <WorkspacesItem>
                            <li><CustomImg src="./media/icons/entities2.png" alt=""></CustomImg>Client contract</li>
                            <li><CustomImg src="./media/icons/cog.png" alt=""></CustomImg>Supplier contract</li>
                            <li><CustomImg src="./media/icons/entities2.png" alt=""></CustomImg>Corporate</li>
                            <li><CustomImg src="./media/icons/network.png" alt=""></CustomImg>Group Norms</li>
                            <li><CustomImg src="./media/icons/publications.png" alt=""></CustomImg>Real estate contracts</li>    
                        </WorkspacesItem>
                        </Scroll>
                    </MenuList>
                    <UserList>
                    <span>Account</span>
                        <AccountItem>
                            <UserImg />
                        <Name>Humberta Swift</Name>
                        <Description>See Profile</Description>
                            <li><CustomImg src="./media/icons/privacy.png" alt=""></CustomImg>Privacy</li>
                            <li><CustomImg src="./media/icons/settings.png" alt=""></CustomImg>Settings</li>
                        </AccountItem>
                    </UserList>
                    <LogOutButton>
                        <CustomImg src="./media/icons/logout.png" alt=""></CustomImg><span>Logout</span>
                    </LogOutButton>
                </Menu>
            </Wrapper2> 
        </Wrapper>
    );
};
