import { FC, } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';
import { fontSize } from '../../styleHelpers/FontSizes';
import { imageSize } from '../../styleHelpers/ImageSize';
import { IState } from '../../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { ICommentReducer } from '../../../reducers/commentsReducers';
import { IPostReducer } from '../../../reducers/postsReducers';


const PublicationsContent = styled.div `
    display:flex;
    border-radius: 5px;
    box-shadow: 0px 1px 3px ${Colors.grey2};
    margin: 20px 0px;
`;



const ImgText = styled.div `
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: ${Colors.white};
`;

const ImgComment = styled.img ` 
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%; 
`;

const ImgPublications = styled.img `
    display: flex;
    margin: 15px 0px;
    width: 100px;
    height: 100px;
`;

const LastPublications = styled.div ` 
    margin: 15px 0 15px 15px;
    width: 50%;
`;

const LastPublicationsContent = styled.div ` 
    margin: 15px 0px;
display:flex;
margin-left:15px;
flex-direction:column;
`;

const LastPublicationsTitle = styled.p ` 
    color: ${Colors.blue};
    font-size: 20px;
`;

const LastPublicationsComment = styled.div `
    display: flex;
    position: relative;
    padding: 10px;
    width: 100%; 
`;

const PublicationsText = styled.div `
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
`;

const Footer = styled.div ` 
    margin-top: 25px;
`;

const ArticleProfileDiv = styled.div`
display:flex;
flex-direction:row;
`;
const ArticleAuthorDate = styled.p`
color:${Colors.lightgrey};
font-size:${fontSize[14]};
`;
const ArticleAuthorProfileImg = styled.img`
width:${imageSize[12]};
height:${imageSize[12]};
border:2px solid ${Colors.leftmenufontcolor};
border-radius:100%;
margin-left:10px;
`;
const ArticleAuthorName = styled.p`
color:${Colors.leftmenufontcolor};
margin-left:10px;
font-size:${fontSize[14]};
`;

const LastPublicationsBottom = styled.h1 `
    margin-top: 30px;
    font-size: 20px;
    color: ${Colors.blue};
    
`;



export const Publications: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comment
    }));
    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photo
    }));

    const LeftImg = styled.div `
    position: relative;
    background-image: url('${photoList[1]?.url}');
    background-size: auto;
    background-repeat: no-repeat;
    width:45%;
`;

    return(
        <PublicationsContent>
            <LeftImg>
            <ImgText>{commentList[2]?.name}
                
                <p className = "Description">
                    13.05.2021 <ImgComment src={photoList[2]?.url} alt="Profile-img"/>{usersList[2]?.name}
                </p>
                </ImgText>
            </LeftImg>
            <LastPublications>
                <LastPublicationsContent>
                    <LastPublicationsTitle>Latest Publications</LastPublicationsTitle>
                    <LastPublicationsComment>
                        <ImgPublications src={photoList[6]?.url} alt="write-img"/>
                        <PublicationsText>
                        {postList[2]?.body}
                        <ArticleProfileDiv>
                                <ArticleAuthorDate>14.04.2021</ArticleAuthorDate>
                                <ArticleAuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                                <ArticleAuthorName>{usersList[2]?.name}</ArticleAuthorName>
                            </ArticleProfileDiv>
                        </PublicationsText>
                    </LastPublicationsComment>
                    <LastPublicationsComment>
                        <ImgPublications src={photoList[6]?.url} alt="write-img"/>
                        <PublicationsText>{postList[2]?.body}
                        <ArticleProfileDiv>
                                <ArticleAuthorDate>14.04.2021</ArticleAuthorDate>
                                <ArticleAuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                                <ArticleAuthorName>{usersList[2]?.name}</ArticleAuthorName>
                            </ArticleProfileDiv>
                        </PublicationsText>
                    </LastPublicationsComment>
                    <LastPublicationsComment>
                        <ImgPublications src={photoList[6]?.url} alt="write-img"/>
                        <PublicationsText>
                        {postList[2]?.body}
                        <ArticleProfileDiv>
                                <ArticleAuthorDate>14.04.2021</ArticleAuthorDate>
                                <ArticleAuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                                <ArticleAuthorName>{usersList[2]?.name}</ArticleAuthorName>
                            </ArticleProfileDiv>
                        </PublicationsText>
                    </LastPublicationsComment>
                    <LastPublicationsBottom>See more publications</LastPublicationsBottom>
                </LastPublicationsContent>
            </LastPublications>
        </PublicationsContent>
    );
};