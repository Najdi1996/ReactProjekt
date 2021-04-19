import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../styleHelpers/Colors';

const Wrapper = styled.div `
    position: absolute;
    top: 24px;
    left: 0;
    background: white;
    padding: 10px;
    border: 1px solid;
    ul {
        border: 1px solid red;
    }
`;
const Wrapper2 = styled.aside ` 
    flex: 3;
    margin-right: 10px;
`;

const Menu = styled.div ` 
`;

const InputWrapper = styled.div ` 
`;

const CustomInput = styled.div ` 
`;

const MenuList = styled.ul ` 
`;

const UserList = styled.ul ` 
`;

const PlatformItem = styled.li`
    align-items:center;
    margin-bottom: 8px;
`;

const WorkspacesItem = styled.li `
    align-items: center;
    margin-bottom: 8px;
`;

const Link = styled.a `
    margin: 10px;
    color: ${Colors.black};
    text-decoration: none;
`;

const HomeIcon = styled.i ` 
    margin-right: 15px;
    width: 8px;
    height: 8px;
    background-image: url('./media/icons/house2.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const PublicationsIcon = styled(HomeIcon) `
    background-image: url('./media/icons/publications.svg');
`;

const PeopleIcon = styled(HomeIcon) ` 
    background-image: url('./media/icons/people.svg');
`;

const EntitiesIcon = styled(HomeIcon) `
    background-image: url('./media/icons/entities.svg');
`;

const AdministrationIcon = styled(HomeIcon) `
    background-image: url('./media/icons/administration.svg');
`;

const ClientContractIcon = styled.i `
    margin-right: 15px;
    width: 8px;
    height: 8px;
    background-image: url('.media/icons/publications.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const SupplierContractIcon = styled(ClientContractIcon) ` 
`;

const CorporateIcon = styled(ClientContractIcon) ` 
    background-image: url('.media/icons/entities.svg');
`;

const GroupNormsIcon = styled(ClientContractIcon) ` 
`;

const RealEstateContractsIcon = styled(ClientContractIcon) ` 
`;

const UserImg = styled.img ` 
`;

const Name = styled.div ` 
`;

const Description = styled.div ` 
`;

const PrivacyIcon = styled.i ` 
`;

const SettingsIcon = styled.i ` 
`;



export const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <Wrapper2>
                <Menu>
                    <InputWrapper>
                        <CustomInput />
                    </InputWrapper>
                    <span>Platform</span>
                    <MenuList>
                        <PlatformItem>
                            <li>
                                <HomeIcon />
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <PublicationsIcon />
                                <Link href="#">Publications</Link>
                            </li>
                            <li>
                                <PeopleIcon />
                                <Link href="#">People</Link>
                            </li>
                            <li>
                                <EntitiesIcon />
                                <Link href="#">Entities</Link>
                            </li>
                            <li>
                                <AdministrationIcon />
                                <Link href="#">Administration</Link>
                            </li>
                        </PlatformItem>
                    </MenuList>
                    <span>Workspaces</span>
                    <MenuList>
                        <WorkspacesItem>
                           <li>
                                <ClientContractIcon />
                                <Link>Client contract</Link>
                            </li>
                            <li>
                                <SupplierContractIcon />
                                <Link>Supplier contract</Link>
                            </li>
                            <li>
                                <CorporateIcon />
                                <Link>Corporate</Link>
                            </li>
                            <li>
                                <GroupNormsIcon />
                                <Link>Group Norms</Link>
                            </li>
                            <li>
                                <RealEstateContractsIcon />
                                <Link>Real estate contracts</Link>    
                            </li>     
                        </WorkspacesItem>
                    </MenuList>
                    <UserList>
                        <span>Account</span>
                        <UserImg />
                        <Name>Humberta Swift</Name>
                        <Description>See Profile</Description>
                        <li>
                            <PrivacyIcon />
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <SettingsIcon />
                            <Link>Settings</Link>
                        </li>
                    </UserList>
                </Menu>
            </Wrapper2> 
        </Wrapper>
    );
};
<ul>
                <li>1</li>
            </ul>