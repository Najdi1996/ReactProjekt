import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';

const ResumeYourWorkWrapper = styled.div ` 
`;

const ResumeYourWorkItems = styled.div `
    display: flex;
`;

const ResumeYourWorkTitle = styled.p `
    color: ${Colors.blue2};
    font-size: 20px;
`;

const ResumeYourWorkTitle2 = styled.p `
    color: ${Colors.blue2};
    font-size: 20px;
    margin-bottom: 10px;
`;

const ResumeYourWorkElements = styled.div ` 
    display: flex;
    margin-left: auto;
`;

const FilterWrapper = styled.div `
    display:flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0dcdc;
    border-radius: 3px;
`;

const CustomInput = styled.input `
    width: 200px;
    padding: 10px;
    border: 0px;
    outline: none;
    margin-right: 10px;
`;

const SelectWrapper = styled.div `
    display: flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;

    select {
        width: 200px;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        color: ${Colors.blue2};
    }
`;

const YourWorkCard = styled.div ` 
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 1px 3px ${Colors.grey2};
    padding: 20px;
    margin: 20px 0px;
`;
const CardDetails = styled.div ` 
    display: table-cell;
    position: relative;
    padding: 10px;
    width: 100%;

    div {
        margin-top: 10px;
        color: ${Colors.grey1};
    }
`;

const CustomImg = styled.img ` 
    margin: 10px;
    text-align: right;
    width: 20px;
    height: 20px; 
`;

const Icon = styled.img `
        margin-right: 5px;
        margin-left: 15px;
        width: 15px;
        height: 15px; 
`;


export const ResumeYourWork: FC = () => {
    return(
        <ResumeYourWorkWrapper>
            <ResumeYourWorkItems>
                <ResumeYourWorkTitle>Resume Your Work</ResumeYourWorkTitle>
                <ResumeYourWorkElements>
                    <FilterWrapper>
                        <CustomInput placeholder="Filter by title..." type ="text"/>
                        <CustomImg src="./media/icons/search.png" alt = "" title = ""/>
                    </FilterWrapper>
                    <SelectWrapper>
                        <CustomImg src="./media/icons/followed.png" alt =""/>
                        <select>
                            <option value="followed">Followed</option>
                        </select>
                    </SelectWrapper>
                </ResumeYourWorkElements>
            </ResumeYourWorkItems>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>World company SAS</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/entities2.png" alt=""/> Corporate
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
            <YourWorkCard>
                <CardDetails>
                    <ResumeYourWorkTitle2>Contract #145</ResumeYourWorkTitle2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendreritmorci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.
                    </p>
                    <div className="BottomDown">
                     <Icon src="./media/icons/administration.png" alt=""/> Subsid corp.
                     <Icon src="./media/icons/kropka.png" alt = ""/>
                     <Icon src="./media/icons/cog.png" alt=""/> Supplier contract
                     <Icon src="./media/icons/kropka.png" alt = ""/> Update 3 days ago by John Doe
                    </div>
                </CardDetails>
            </YourWorkCard>
        </ResumeYourWorkWrapper>
    );
};