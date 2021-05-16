import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';

const WorkSpaceContent = styled.div `
    display: block;
`;

const WorkSpaceTitle = styled.p `
    color: ${Colors.blue2};
`;

const WorkSpaceWrapper = styled.div `
    display: flex;
    padding: 20px 0px;
`;

const WorkSpaceCard = styled.div `
    margin-right: 20px;
    border-radius: 5px;
    display: flex;
    width: 100%;
    box-shadow: 0px 1px 3px ${Colors.grey2};
    padding: 20px;

    div {
        display: flex;
        border: 2px solid red;
        box-sizing:border-box;
    }
`;

const ImgWorkSpace = styled.img `
    background-size: cover;
    width: 100px;
    height: 100px;
`;

const Card = styled.div `
    display: table-cell;
    position: relative;
    padding: 10px;
    width: 100%;
`;

const CardTitle = styled.p `
    color: ${Colors.black};
    font-size: 20px;
`;

const CardBottom = styled.div `
    position: absolute;
    bottom: 10px;
    width: 100%;
`;

const CardIcon = styled.img `
    width: 15px;
    vertical-align: middle;
    margin: 0px 5px;
`;

const CardIcon2 = styled.img ` 
    width: 30px;
    height: 30px;
    margin: 0px 5px;
    
`;

const Cardfooter = styled.h1 ` 
    margin-top: 5px;  
`;

export const WorkSpace: FC = () => {
    return(
        <WorkSpaceContent>
            <WorkSpaceTitle>Workspaces</WorkSpaceTitle>
            <WorkSpaceWrapper>
                <WorkSpaceCard>
                    <ImgWorkSpace src = "./media/WorkSpaces.jpg" alt = ""/>
                    <Card>
                        <CardTitle>Client contact</CardTitle>
                        <CardBottom>
                            <p>
                            <CardIcon src="./media/icons/entities2.svg" alt=""/> Contact
                            <CardIcon src="./media/icons/user-plus.svg" alt = ""/> 150 user
                            </p>
                            
                              <Cardfooter>Last update 2 days ago</Cardfooter>  
                            
                        </CardBottom>
                    </Card>
                </WorkSpaceCard>
                <WorkSpaceCard>
                    <div className="WorkspacesBox">
                        <div className="Up"><ImgWorkSpace src = "./media/WorkSpaces.jpg" alt = ""/></div>
                        <div className="Center">
                            <div className="CenterLeft">
                                <CardIcon2 src="./media/icons/cog.png" alt =""/>
                            </div>
                            <div className="CenterRight">
                            <CardTitle>Client contact</CardTitle>
                            </div>
                        </div>
                        <div className="Bottom">
                            <div className="BottomUp">
                                <p>
                                <CardIcon src="./media/icons/entities2.svg" alt=""/> Contact
                                <CardIcon src="./media/icons/kropka.png" alt = ""/>
                                <CardIcon src="./media/icons/user-plus.svg" alt = ""/> 150 user  
                                </p>
                            </div>
                            <div className="BottomDown">
                                <Cardfooter>Last update 2 days ago</Cardfooter> 
                            </div>
                        </div>
                    </div>
                </WorkSpaceCard>
            </WorkSpaceWrapper>
        </WorkSpaceContent>
    );
};