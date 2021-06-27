import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';
import { fontSize } from '../../styleHelpers/FontSizes';
import { imageSize } from '../../styleHelpers/ImageSize';
import ReactPaginate from 'react-paginate';
import { IState } from '../../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPostReducer } from '../../../reducers/postsReducers';

const ResumeYourWorkWrapper = styled.div `

.pagination{
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin:20px;
    font-size:1em;
    color:#0381bd;
    font-weight:bold;
    cursor:pointer;
}
.paginationA{
    margin:10px;
}`; 


const ResumeWorkHeaderContainer = styled.div`
width:100%;
height:3em;
display:flex;
flex-direction:row;
margin-bottom:12px;
`;
const ResumeWorkHeaderDiv1 = styled.div`
width:20%;
display:flex;
flex-direction:row;
justify-content:flex-start;
`;
const HeaderTitle = styled.span`
color: blue;
font-size:${fontSize[18]};
margin-left:15px;
margin-top:15px;
font-weight:bold;
`;
const ResumeWorkHeaderDiv2 = styled.div`
width:80%;
display:flex;
flex-direction:row;
justify-content:flex-end;
margin-top:15px;
`;
const InputDiv = styled.div`
display:flex;
border:1px solid ${Colors.lightgrey};
height:2.5em;
`;
const InputFilter = styled.input`
border:none;
outline-style:none;
`;
const InputImg = styled.img`
width:${imageSize[14]};
height:${imageSize[14]};
background-color:${Colors.white};
margin-top:3px;
`;
const SelectFollowDiv = styled.div`
display:flex;
&:hover {
    border-radius:10px;
    height:3em;
    background-color: #cfffa8;
    color: #626262;
    cursor:pointer;
}
`;
const FollowImg = styled.img`
width:${imageSize[15]};
height:${imageSize[15]};
margin-right:8px;
margin-left:8px;
`;
const FollowSpan = styled.span`
color:${Colors.namesurname};
font-size:${fontSize[14]};
font-weight:bold;
margin-right:9px;
margin-top:10px;
`;
const DropdownArrow = styled.img`
width:8px;
height:8px;
margin-top:12px;
`;
/*--Resume-work--*/
const ResumeWorkMini = styled.h1`
    width: 100%;
    height:10em;
    background-color:white;
    border-radius:6px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    margin-top:20px;
`;
const ResumeWorkTitle = styled.div`
    font-size:20px;
    padding-top:10px;
    padding-left:10px;
    color:rgb(67,85,168);
    font-weight:bold;    
`;
const ResumeWorkText = styled.p`
    font-size:15px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom: 10px;
    text-align:justify;
`;
const ResumeWorkBottom = styled.span`
    font-size:12px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10px;
    padding-right:10px;
    img{
        width:12px;
        height:12px;
        margin-right:3px;
    }
`;






export const ResumeYourWork: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
  
    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    
    const [currentPage, setCurrentPage] = useState<number>(0);
    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }
    
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

const [textInput, setTextInput] = useState("");

    const handleChange = (event: any) => {
        setTextInput(event.target.value);
        filterRows();
    };
    const filterRows = () => {
        let worksFiltered = [...postList];
        if (textInput !== "") {
            const filterString = textInput.toLowerCase();
            worksFiltered = worksFiltered.filter((v) =>
                v.title.toLowerCase().includes(filterString)
            );
        }
        return worksFiltered;
    };
    const filtredRowsList = filterRows();
    
if (usersList?.length > 0) {
    return(
        <ResumeYourWorkWrapper>
            <ResumeWorkHeaderContainer>
                        <ResumeWorkHeaderDiv1>
                            <HeaderTitle>Resume your work</HeaderTitle>
                        </ResumeWorkHeaderDiv1>
                        <ResumeWorkHeaderDiv2>
                            <InputDiv>
                                <InputFilter placeholder="Filter by title..." onChange={handleChange} ></InputFilter>
                                <InputImg src="./media/icons/search.png" alt="input-img"></InputImg>
                            </InputDiv>
                            <SelectFollowDiv>
                                <FollowImg src="./media/icons/followed.png" alt="follow-img"></FollowImg>
                                <FollowSpan>Followed</FollowSpan>
                                <DropdownArrow src="./media/icons/arrow-down.png" alt="arrow-img"></DropdownArrow>
                            </SelectFollowDiv>
                        </ResumeWorkHeaderDiv2>
                    </ResumeWorkHeaderContainer>


                    {filtredRowsList.slice(currentPage, currentPage + 10).map((v) => (
                        <ResumeWorkMini key={v.id}>
                            <ResumeWorkTitle>{v.title}</ResumeWorkTitle>
                            <ResumeWorkText>{v.body}</ResumeWorkText>
                            <ResumeWorkBottom>
                                <img src="../../media/icons/logout.png" alt=""></img>Subsid.corp  <img src="../../media/icons/bell.png" alt=""></img>Supplier contract + Updated 3 Days ago by John Doe
                            </ResumeWorkBottom>
                        </ResumeWorkMini>

                    ))
                    }
                    <ReactPaginate previousLabel={'PREVIOUS'} 
                        nextLabel={'NEXT'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={postList.length}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        pageLinkClassName={'paginationA'}
                        activeClassName={'active'}
                        pageClassName={'page'}
                        previousClassName={'previous'}
                        nextClassName={'next'}/>  
            
            
         </ResumeYourWorkWrapper>
    );
    }
    else {
        return (<ResumeYourWorkWrapper />)
    }
};