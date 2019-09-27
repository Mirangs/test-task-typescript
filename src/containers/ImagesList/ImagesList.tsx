import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../../store/actions/';

import ImagesListItem from '../../components/ImagesListItem/ImagesListItem';
import Spinner from '../../components/Spinner/Spinner';

import { IImagesStore } from '../../types/store';

import './ImagesList.css';

interface IImagesListProps {
  images: object[],
  onImagesInit(): void,
  columns: number,
  loading: boolean,
  error: string | null
}

const ImagesList: React.FC<IImagesListProps> = ({
  images,
  onImagesInit,
  columns,
  loading,
  error
}) => {
  useEffect(() => {
    onImagesInit();
  }, []);

  let content = <Spinner />;

  if (!loading) {
    content = (
      <ul className="ImagesList" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
        {
          images.map((image:any) => (
            <ImagesListItem 
              key={image.id}
              imageUrl={image.webformatURL}
              likes={image.likes}
              comments={image.comments}
              tags={image.tags}
            />
          ))
      }
      </ul>
    );
  }

  if (error) {
    content = <p style={{color: 'red'}}>{error}</p>
  }

  return content;
};

const mapStateToProps = (
  { 
    images 
  }: 
  { 
    images:IImagesStore 
  }) => ({
  images: images.images,
  loading: images.loading,
  error: images.error,
});

const mapDispatchToProps = (dispatch:ThunkDispatch<IImagesStore, any, any>) => ({
  onImagesInit: () => dispatch(actions.initImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);