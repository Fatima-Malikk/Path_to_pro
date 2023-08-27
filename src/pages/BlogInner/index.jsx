import React, { useEffect } from "react";
import Buttons from "../../components/button";
import ResponsiveAppBar from "../../components/header";
import InnerBlogTopImg from '../../assets/InnerBlog-TopImage.webp'
import InnerBlogFirstImg from '../../assets/InnerBlog-FirstImg.webp'
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/ArrowIcon.webp";
import "./blogInnerStyle.css";
import TextFieldComponent from "../../components/Text Field/TextFieldComponent";
import './InnerBlogStyles.css';
import LatestUpdatesContainer from "../../components/LatestUpdatesContainer/LatestUpdatesContainer";

const BlogInner = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[])
  return (
    <div className="blog-app-container">
      <div className="upper-container">
        <ResponsiveAppBar />
        <div className="heading-container">
          <img className="blog-topHeadingImage" src={InnerBlogTopImg} alt="" />
          <h1 className="no-outline-text-blogs"><span style={{ width: '75%' }}>Legit is Getting Worse Day by Day</span></h1>
        </div>
      </div>
      <div className="innerblog-imagecontainer">
        <img className="innerblog-innerImage" src={InnerBlogFirstImg} alt="" />
      </div>
      <div className="innerblog-contentContainer">
        <h1 className="innerblog-contentHeading">Lorem Ipsum DOlor Set Emit</h1>
        <p className="innerblog-contentParagraph">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur<br /><br />

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur<br /><br />

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est. <br /> <br />

          Qi dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
        </p>
        <button className="add-comment-button-container">ADD COMMENTS</button>
        <div className="add-comment-container">
          <div className="input-container">
            <input type="text" placeholder="Write something here" />
          </div>
          <p
            className="blogInner-button"
            // onClick={onClickHandle}
            style={{ bottom: "10px", marginLeft: "330px" }}
          >
            <Buttons text="SUBMIT" iconUrl={ArrowIcon} alt="Icon" />
          </p>
        </div>
      </div>
      <LatestUpdatesContainer bg={false} op={false} Heading={'Similar Blogs'} ShowButton={false} />
      <br /><br />
    </div>
  );
};

export default BlogInner