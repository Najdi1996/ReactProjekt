import { FC } from 'react';
import styled, { css } from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../styleHelpers/Components';
import { Colors } from '../styleHelpers/Colors';
import { ExpandedMenu } from './ExpendedMenu';


const Wrapper2 = styled(Wrapper)`
    padding: 4px;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`;

const InnerWrapper = styled.div `
    width: 100%;
    padding: 5px 20px;
    background: ${Colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 35px;
`;

const ImgBackground = styled.div<{showBg: boolean}>`
    ${props => props.showBg && css`
    background: ${Colors.grey1};
    border-radius: 50%;
    margin-left: 5px;
    `};
`;

const InputWrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #e0dcdc;
    border-radius: 3px;
`;
const CustomImg = styled.img`
    margin: 10px;
    text-align: right;
`;

const CustomInput = styled.input`
    width: 95%;
    border: 0px;
    text-align: center;

    &::placeholder {
        color: #e0dcdc;
        font-weight: bold;
    }
`;

const RightIcons = styled.div `
    display: inline-flexbox;
    justify-content: center;
    align-items: center;
`;

const LeftSide = styled.div `
    align-items:center;
    display: inline-flexbox;
    justify-content: center;
    margin: 10px;
    padding: 4px;
`;
const MenuWrapper = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;


export const TopBar: FC = () => {
    
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }
    return(
        <Wrapper2>
            <InnerWrapper>
            <LogoImg src= "./media/logo.png" />
                   <MenuWrapper ref={wrapperRef}>
                        <LeftSide onClick={menuHandler}>
                           <img src="./media/icons/house2.png" alt="" />
                           <span> Home </span>
                       <img src="./media/icons/arrow-down.png" alt="" />
                       </LeftSide>
                       {dropdownOpen &&
                            <ExpandedMenu />
                       }
                   </MenuWrapper>
                <InputWrapper>
                    <CustomInput placeholder="Search Legalcluster" type = "text" />
                    <CustomImg src="./media/icons/search.png" alt="" title="" />
                </InputWrapper>
                <RightIcons>
                    <CustomImg src="./media/icons/house.png" />
                    <ImgBackground showBg>
                        <CustomImg src="./media/icons/comments.png" />
                    </ImgBackground>
                    <ImgBackground showBg>
                        <CustomImg src="./media/icons/bell.png" />
                    </ImgBackground>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    
    );
};

