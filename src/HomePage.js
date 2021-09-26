import './App.css';
import gaLogo from './assets/ga-logo.png';
import headerRight from './assets/header-right.PNG';
import leftPanel from './assets/left-panel.png';
import dateTime from './assets/date-time.png';
import desktopBanner from './assets/desktop-banner.png';
//import horizontalOptions from './assets/horizontal-options.png';
import setailLeague from './assets/setail-league.png';
import gameLogos from './assets/game-logos.png';
import gameSetting from './assets/game-settings.png';
import contactIcons from './assets/contact-icons.png';
import mobileHeader from './assets/mobile-header.png';
import mobileBanner from './assets/mobile-banner.png';
import bottomBar from './assets/bottom-bar.png';
import { styled, alpha } from '@mui/material/styles';
import { InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { connect } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  marginTop: '10px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function HomePage(props) {
  //console.log(props);
  return (
    <div className="col-12 container-parent">
      <div
        className="col-12 row header d-none d-xxl-block d-lg-block d-md-block"
        id="header"
      >
        <div className="col-md-1 header-logo">
          <img src={gaLogo} alt="logo" />
        </div>
        <div className="col-md-3">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className="col-md-5"></div>
        <div className="col-md-3 header-right">
          <Button variant="contained">{props.prize.headerprize}</Button>
          <img src={headerRight} alt="" />
        </div>
      </div>
      <div className="col-12 mobile-header d-md-none d-lg-none d-xxl-none">
        <img src={mobileHeader} alt="" />
      </div>
      <div className="col-12 row body">
        <div className="col-md-1 d-none d-xxl-block d-lg-block d-md-block">
          <img src={leftPanel} alt="" />
        </div>
        <div className="col-sm-12 col-md-11">
          <div className="col-12 row heading-row">
            <div className="left-open col-md-6 d-none d-xxl-block d-lg-block d-md-block">
              <h3>Lol Seasonal Tournament</h3>
              <Button
                variant="contained"
                color="success"
                className="open-button"
              >
                Open
              </Button>
            </div>
            <div className="col-12 col-md-6 right-date">
              <img src={dateTime} alt="" />
              <Button variant="contained">Join</Button>
            </div>
          </div>
          <div className="col-12 banner">
            <img
              src={desktopBanner}
              alt=""
              className="d-none d-xxl-block d-lg-block d-md-block"
            />
            <img
              src={mobileBanner}
              alt=""
              className="d-md-none d-lg-none d-xxl-none mobile-banner"
            />
          </div>
          <h3 className="d-md-none d-lg-none d-xxl-none mobile-banner">
            Lol Seasonal Tournament
          </h3>
          <div className="col-12 horizontal-options d-none d-xxl-block d-lg-block d-md-block">
            {/* <img src={horizontalOptions} alt="" /> */}
            <span className="highlight">Overview</span>
            <span>Participant</span>
            <span>Brackets</span>
            <span>LeaderBoard</span>
          </div>
          <div className="col-12 horizontal-options-mobile d-md-none d-lg-none d-xxl-none">
            <span className="highlight">Overview</span>
            <span>Participant</span>
            <span>Brackets</span>
            <span>LeaderBoard</span>
          </div>
          <div className="col-12 row body-content">
            <div className="col-md-6 left-side">
              <h6 className="hosted-by">Hosted By</h6>
              <div className="setail-league">
                <img src={setailLeague} alt="" />
                <Button variant="outlined" className="follow-button">
                  Follow
                </Button>
              </div>
              <div className="grid-container mobile-grid">
                <div className="p1">Game</div>
                <div className="p2">Format</div>
                <div className="p3">Type</div>
                <div className="p4">
                  <b>League of Legend</b>
                </div>
                <div className="p5">
                  <b>5V5</b>
                </div>
                <div className="p6">
                  <b>Single Elimination</b>
                </div>
              </div>
              <h6 className="hosted-by">Introduction</h6>
              <p>
                Rally the squad and join vs for the MGA Ses5 league Of legends
                showdown on the Rift, with $700 in prizing avaeable for our top
                tine teams. Want to snag some extra prizing? Get involved in the
                MSI Rewards Program.. giving you the oppoeturoty to cash out
                'terns from $50 in value all the way up to a GF6S Thin Laptop.
                learn more on the MGA USA League portal.
              </p>
              <h6 className="hosted-by">Rules</h6>
              <div>
                All players are reconv And tojoin our Discord, as it is the best
                way for you to ensure you have contact with admins when
                required. Format
                <ul>
                  <li>Best Of One (Best Of Three Finals)</li>
                  <li>SvS Tournament Draft Summoners</li>
                  <li>
                    Rd t Ten minutes of pause time (technical issues only)
                  </li>
                  <li>
                    The opponent must be informed of these techrical issues and
                    the reason for the pause.
                  </li>
                  <li>
                    The team in the upper side of the bracket (or left side of
                    the match page) vall play Wye side.
                  </li>
                </ul>
              </div>
              <div className="prize block d-md-none d-lg-none d-xxl-none">
                <h6 className="hosted-by">Prize</h6>
                <div className="col-12 row graph">
                  <div className="col-5 left">
                    <p>Prize Pool</p>
                    <h3>{props.prize.prize} CAD</h3>
                    <p>Cash prizes will be paid in 10 business days</p>
                  </div>
                  <div className="col-7 row right">
                    <div className="bars col-4">
                      <span>{props.prize.second}</span>
                      <span className="bar bar1">2nd</span>
                    </div>
                    <div className="bars col-4">
                      <span>{props.prize.first}</span>
                      <span className="bar bar2">1st</span>
                    </div>
                    <div className="bars col-4">
                      <span>{props.prize.third}</span>
                      <span className="bar bar3">3rd</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-xxl-block d-lg-block d-md-block">
                <h6 className="hosted-by">Sponsor</h6>
                <img src={gameLogos} alt="" className="game-logos" />
              </div>
            </div>
            <div className="col-md-6 right-side">
              <div className="grid-container desktop-grid">
                <div className="p1">Game</div>
                <div className="p2">Format</div>
                <div className="p3">Type</div>
                <div className="p4">
                  <b>League of Legend</b>
                </div>
                <div className="p5">
                  <b>5V5</b>
                </div>
                <div className="p6">
                  <b>Single Elimination</b>
                </div>
              </div>
              <div className="prize block d-none d-xxl-block d-lg-block d-md-block">
                <h6 className="hosted-by">Prize</h6>
                <div className="col-12 row graph">
                  <div className="col-6 left">
                    <p>Prize Pool</p>
                    <h3>$350 CAD</h3>
                    <p>Cash prizes will be paid in 10 business days</p>
                  </div>
                  <div className="col-6 row right">
                    <div className="bars col-4">
                      <span>{props.prize.second}</span>
                      <span className="bar bar1">2nd</span>
                    </div>
                    <div className="bars col-4">
                      <span>{props.prize.first}</span>
                      <span className="bar bar2">1st</span>
                    </div>
                    <div className="bars col-4">
                      <span>{props.prize.third}</span>
                      <span className="bar bar3">3rd</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings">
                <h6 className="hosted-by">Game Settings</h6>
                <img src={gameSetting} alt="" className="game-image" />
                <div className="grid-container">
                  <div className="p1">Map</div>
                  <div className="p2">Game Mode</div>
                  <div className="p3">Pick Mode</div>
                  <div className="p4">
                    <b>Howling Abyss</b>
                  </div>
                  <div className="p5">
                    <b>Destroy Nexus</b>
                  </div>
                  <div className="p6">
                    <b>Blind Pick</b>
                  </div>
                </div>
                <div className="d-md-none d-lg-none d-xxl-none">
                  <h6 className="hosted-by">Sponsor</h6>
                  <img src={gameLogos} alt="" className="game-logos" />
                </div>
                <h6 className="hosted-by">Contact</h6>
                <img src={contactIcons} alt="" className="conatct-image" />
                <p>
                  After joining the Discord server you will see only the
                  ttannouncements channel. You need to click on the League of
                  Legends icon under the region you are playing in. After doing
                  this, you will then see the chat channels for your game.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 bottom-bar d-md-none d-lg-none d-xxl-none">
        <img src={bottomBar} alt="" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { reducer } = state;
  return {
    prize: reducer,
  };
};

export default connect(mapStateToProps, null)(HomePage);
