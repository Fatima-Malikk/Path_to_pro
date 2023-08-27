import React , { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './index.css';
import ProfileLogo from "../../assets/BestPlayer.svg"
import teamlogo from "../../assets/FNATIC.svg";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';


const Profile = () => {
  const [playerName1, setPlayerName1] = useState('');
  const [playerName2, setPlayerName2] = useState('');
  const [customizeTeam, setCustomizeTeam] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [playerInfo, setPlayerInfo] = useState('');
        
        const [isFormOpen, setIsFormOpen] = useState(false);

        const openForm = () => {
          setIsFormOpen(true);
        };
      
        const closeForm = () => {
          setIsFormOpen(false);
        };
        const saveInfo = () => {
          console.log('Player Name 1:', playerName1);
          console.log('Player Name 2:', playerName2);
          console.log('Customize Team:', customizeTeam);
          console.log('YouTube Link:', youtubeLink);
          console.log('Twitter Link:', twitterLink);
          console.log('Player Info:', playerInfo);
      
          closeForm();
        };
        return (
         <>
          <div className="profile-app-container">
          <div className="profile-gradient-container"></div>
        <div className="hexagon">
          <img src={ProfileLogo} alt="image" className="hexagon-img" />
        </div>
        <div className="profile-team">
          <h3 className="profile-card-heading">DEXTER MAFIA <p >Team:<div class="circle-container">
      <img src={teamlogo} alt="Profile" class="circle-image"/>
    </div>    Fnatic</p></h3>
          </div>
        <div className="profile-socials">
        <div className="profile-button">
              <div className='b'>
            <Button type="submit" variant="contained" className='bu'>
              edit cover
            </Button>
          </div>
              <IconButton sx={{ marginRight: 3, color: 'white' }} className="pencil" onClick={openForm}>
            <CreateIcon />
          </IconButton>
          {isFormOpen && (
        <div className="form-popup">
          <div className="form-container"> 
          <button className="btn-close" onClick={closeForm}>
              <CloseIcon />
            </button>
          <div className='heading-popup'>
          <h1 className="ninth-outline-text-profile">EDIT PROFILE</h1>
          <h3 className="ninth-no-outline-text-profile" >EDIT PROFILE</h3>
        </div>
        <div className="form-content">
        <div className="upload-section">
        <div className="hexagon-upload">
          <img src={ProfileLogo} alt="image" className="hexagon-img" />
        </div>
              <button className="upload-button">
                <span className="upload-icon">&#128247;</span> Upload Pic
              </button>
            </div>
            <div className="input-fields">
              <div className="player-name">
                <input type="text" placeholder="Player Name" className='pp' value={playerName1}
    onChange={(e) => setPlayerName1(e.target.value)} />
                <input type="text" placeholder="Player Name" className='pp' value={playerName2}
    onChange={(e) => setPlayerName2(e.target.value)}/>
              </div>
              <input type="text" placeholder="Customize Team" className='cust' value={customizeTeam}
  onChange={(e) => setCustomizeTeam(e.target.value)} />
              <div className="add-link">
                <input type="text" placeholder="Add Link (YouTube)" className='yt'  value={youtubeLink}
    onChange={(e) => setYoutubeLink(e.target.value)}/>
                <input type="text" placeholder="Add Link (Twitter)" className='tw' value={twitterLink}
    onChange={(e) => setTwitterLink(e.target.value)}/>
              </div>
              <textarea placeholder="Player Info"  value={playerInfo}
  onChange={(e) => setPlayerInfo(e.target.value)}></textarea>
              <button type="button" className="btn-save" onClick={saveInfo}>
                Save Info
              </button>
          
            </div>
          </div>
        </div>
        </div>
      )}
            </div>
            <div className="profile-sider">
        <Box sx={{ ml: 4 }} >
          <IconButton sx={{ marginRight: 3, color: 'white'}}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 2, color: 'white' }}>
            < YouTubeIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 3, color: 'white'}}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 2, color: 'white' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 2, color: 'white' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
       </div>
          </div>
          </div>
          
      <main className="profile-main profile-fullBG-container">
        <div className="profile-content">
          <h5 className="head-content">PLAYER INFO</h5>
            <p className="profile-card-text">
              Sed ut perspiciatis omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
        </div>
        </main>
        
    </>
  );
};
export default Profile


