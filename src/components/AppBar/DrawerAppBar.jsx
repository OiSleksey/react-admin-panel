import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './DrawerAppBar.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import { getActivePanel } from '../../store/selectors/getTokenLocalStorage.selector';
import { activePanel } from '../../store/actions/ui.actions';

const drawerWidth = '4rem';
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { activePanel, setActivePanel, window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleClick = event => {
    const target = event.target;
    const activeParent = target.closest('.sidebar-icons');
    const dataset = activeParent.dataset.value;
    console.log(setActivePanel);
    setActivePanel(dataset);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Box
        className="sidebar-icons"
        data-value="users"
        onClick={handleClick}
        sx={{
          width: { sm: '100%' },
          background: activePanel === 'users' ? 'grey' : 'transparent',
        }}
      >
        <PeopleAltIcon
          sx={{
            fontSize: '50px',
            // display: { sm: 'none' },
            display: { sm: 'none', xs: 'block' },
            margin: '10px auto',
          }}
        />
      </Box>
      <Box>
        <Box
          className="sidebar-icons"
          data-value="avatar"
          onClick={handleClick}
          sx={{
            background: activePanel === 'avatar' ? 'grey' : 'transparent',
            width: { xs: '100%' },
            marginBottom: { xs: '20px ' },
            padding: { xs: '7px 0' },
          }}
        >
          <HdrAutoIcon
            sx={{
              fontSize: '50px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: { xs: '0 auto ' },
            }}
          />
        </Box>
        <Box
          className="sidebar-icons"
          data-value="setting"
          onClick={handleClick}
          sx={{
            background: activePanel === 'setting' ? 'grey' : 'transparent',
            width: { xs: '100%' },
            padding: { xs: '10px 0' },
          }}
        >
          <SettingsIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: '0 auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: { sm: '100%' },
          width: { sm: '4rem' },
          left: { sm: '0' },
        }}
      >
        <Toolbar
          sx={{
            padding: { sm: '10px 0' },
            flexDirection: { sm: 'column' },
            alignItems: { sm: 'center' },
            justifyContent: { sm: 'space-between' },
            minHeight: { sm: '100vh' },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <EmojiObjectsIcon
            fontSize="large"
            sx={{
              position: 'absolute',
              right: '10px',
              display: { sm: 'none' },
            }}
          />
          <Box>
            <EmojiObjectsIcon
              sx={{
                fontSize: '60px',
                // display: { sm: 'none' },
                display: { xs: 'none', sm: 'block' },
              }}
            />
          </Box>

          <Box
            className="sidebar-icons"
            data-value="users"
            onClick={handleClick}
            sx={{
              width: { sm: '100%' },
              background: activePanel === 'users' ? 'grey' : 'transparent',
            }}
          >
            <PeopleAltIcon
              sx={{
                fontSize: '50px',
                // display: { sm: 'none' },
                display: { xs: 'none', sm: 'block' },
                margin: '10px auto',
              }}
            />
          </Box>
          <Box
            sx={{
              width: { sm: '100%' },
            }}
          >
            <Box
              className="sidebar-icons"
              data-value="avatar"
              onClick={handleClick}
              sx={{
                background: activePanel === 'avatar' ? 'grey' : 'transparent',
                width: { sm: '100%' },
                marginBottom: { sm: '20px ' },
                padding: { sm: '7px 0' },
              }}
            >
              <HdrAutoIcon
                sx={{
                  fontSize: '50px',
                  // display: { sm: 'none' },
                  display: { xs: 'none', sm: 'block' },
                  margin: { sm: '0 auto ' },
                }}
              />
            </Box>

            <Box
              className="sidebar-icons"
              data-value="setting"
              onClick={handleClick}
              sx={{
                background: activePanel === 'setting' ? 'grey' : 'transparent',
                width: { sm: '100%' },
                padding: { sm: '10px 0' },
              }}
            >
              <SettingsIcon
                sx={{
                  fontSize: '40px',
                  // display: { sm: 'none' },
                  display: { xs: 'none', sm: 'block' },
                  margin: '0 auto',
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum. Minima ex dolor modi inventore sapiente
          necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
          sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
          eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus soluta accusamus
          porro reprehenderit eos inventore facere, fugit, molestiae ab officiis
          illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
          voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
          obcaecati error, delectus quo eius exercitationem tempore. Delectus
          sapiente, provident corporis dolorum quibusdam aut beatae repellendus
          est labore quisquam praesentium repudiandae non vel laboriosam quo ab
          perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
          commodi nihil corrupti cum non fugiat praesentium doloremque
          architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
          molestiae dicta blanditiis est expedita eius debitis cupiditate porro
          sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
          quibusdam provident. Incidunt tempore vel placeat voluptate iure
          labore, repellendus beatae quia unde est aliquid dolor molestias
          libero. Reiciendis similique exercitationem consequatur, nobis placeat
          illo laudantium! Enim perferendis nulla soluta magni error, provident
          repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
          suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
          commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
          eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
          ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat
          rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam
          facilis libero dolorem dolores sunt inventore perferendis, aut
          sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const mapState = state => {
  return {
    activePanel: getActivePanel(state),
  };
};

const mapDispath = {
  setActivePanel: activePanel,
};

export default connect(mapState, mapDispath)(DrawerAppBar);
