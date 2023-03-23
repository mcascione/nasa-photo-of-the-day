import React from 'react';
import styled from "styled-components";

const NasaPhotoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Explanation = styled.p`
    max-width: 60%;
    text-align: justify;
`;

const NasaImage = styled.img`
    max-width: 80%;
    border-radius: 5%;
`;

const PhotoButton = styled.button`
   margin: 6px;
   padding: 10px 40px;
   border-radius: 20px;
   color: midnightblue;
   font-weight: bold;
`;

const PhotoButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
const Caption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    font-size: .7rem;
    margin: 10px 0 0 0;
`;
const NasaPhoto = (props) => {
    return (
        <NasaPhotoWrapper className='nasa-photo-wrapper'>
           <div>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
           </div>
            <NasaImage src={props.photo.hdurl} alt="NASA_photo"></NasaImage>
            <Caption>
                <p>Copyright: {props.photo.copyright}</p>
                <PhotoButtonWrapper className='PhotoButtonWrapper'>
                    <PhotoButton> Like </PhotoButton>
                    <PhotoButton> Share </PhotoButton>
                </PhotoButtonWrapper>
            </Caption>
            <Explanation className='explanation'>{props.photo.explanation}</Explanation>
        </NasaPhotoWrapper>
    );
} 

export default NasaPhoto;