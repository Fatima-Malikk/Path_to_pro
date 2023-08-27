import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogTopImg from '../../assets/Blog-TopImage.webp'
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';
import MiniCard from '../../components/miniCard/miniCard';
import ResponsiveAppBar from '../../components/header';
import Pagination from '../../components/Pagination/pagination';
import SmallCircle from '../../components/SmallCircle/smallCircle';
import './index.css';
import EachLatestCard from '../../components/LatestUpdatesContainer/EachLatestCard';
import { LatestUpdatesData } from './data';

const RowContainer = () => {
  const styles = {
    rowContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
    },
    smallCircleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },
    iconsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
    },
    icon: {
      color: '#3583FE',
      marginRight: '5px',
      width: '24px',
      height: '24px'
    },
  };

  return (
    <div style={styles.rowContainer}>
      <div style={styles.smallCircleContainer}>
        <SmallCircle icon="material-symbols:person" color="white" background="#3583fe" />
        <Typography>John Doe</Typography>
      </div>
      <div style={styles.iconsContainer}>
        <Icon icon="ph:heart" style={styles.icon}>
          <Typography variant="body2" color={'white'}>2</Typography>
        </Icon>
        <Icon icon="iconamoon:comment" style={styles.icon}>
          <Typography variant="body2" color={'white'}>3</Typography>
        </Icon>
      </div>
    </div>
  );
};


const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

  // const miniCards = Array.from({ length: 12 }, (_, index) => (
  //   <div className="card-wrapper" key={index}>
  //     <MiniCard className="mini-card blue-card" width={321} height={221} backgroundColor={'#3583FE'}>
  //       <h2 className="mini-card-text">Legit is Getting Worse Day by Day</h2>
  //     </MiniCard>
  //     <RowContainer />
  //   </div>
  // ));

  return (
    <div className="blog-app-container">
      <div className="upper-container">
        <ResponsiveAppBar />
        <div className="heading-container">
          <img className="blog-topHeadingImage" src={BlogTopImg} alt="" />
          <h1 className="no-outline-text-blogs">Blogs</h1>
        </div>
      </div>
      <div className='blog-allBlogsContainer'>
      {LatestUpdatesData.map((element, index)=> {
            return <div className='blog-eachInnerBlog'><EachLatestCard name={element.name} likes={element.likes} comments={element.comments} text={element.text} cardImg = {element.cardImg} /></div>
          })}

      </div>
      {/* <div className="body-container">
        <div className="mini-card-container">{miniCards}</div>
      </div> */}
      <div className="pagination-container">
        <Pagination />
      </div>
      {/* <div className="footer-container">
        <Footer/>
      </div> */}
    </div>

  );
};

export default Blog;
