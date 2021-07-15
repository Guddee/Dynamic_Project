import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline, Drawer } from "@material-ui/core";
// import { PROJECT_LOGO, STATIC_PHONE } from "../config/serverKey";
import { makeStyles } from "@material-ui/core/styles";
import { CloseOutlined } from "@material-ui/icons";
import { STATIC_PHONE } from "../../config/serverKey";
import { mainPageApi } from "../../../pages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ({article}) => {
  const {bangaloreProjectsList,bangaloreProjectLinks}=article.fields;
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    mainPageApi().then((data) => {
      setData(data);
    });
  }, []);
  const classes = useStyles();

  return (
    <div>
      <div className="top_head">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img
                  src="https://www.prestigeconstructions.com/images/logo.png"
                  alt="logo"
                />
              </Typography>
              <ul className="navigation-menu mobBlock">
                <li>
                  <a href="/#">
                    <span>Home</span>
                  </a>
                </li>
                <li className="has-submenu ">
                  <a href="/#">
                    <span>
                      Projects <span className="menu-arrow"></span>
                    </span>
                  </a>
                  <ul className="submenu">
                  {
                    bangaloreProjectsList.map((item,i)=>(
                      <li key={i}>
                      <a href={bangaloreProjectLinks[i]} target="_new">
                        {bangaloreProjectsList[i]}
                      </a>
                    </li>
                    ))
                  }
                  </ul>
                </li>
                <li>
                  <a href="/#" data-toggle="modal" data-target="#mymodal">
                    <span>Contact us</span>
                  </a>
                </li>
                <li>
                  <a href="/#" data-toggle="modal" data-target="#mymodal">
                    <span>Luxury Homes</span>
                  </a>
                </li>
                <li>
                  <a href="/#" data-toggle="modal" data-target="#mymodal">
                    <span>Ready Homes</span>
                  </a>
                </li>
              </ul>
              <div>
                <IconButton
                  onClick={handleDrawer}
                  edge="start"
                  className={`${classes.menuButton} `}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div
              style={{ height: "100vh", padding: "20px 40px", width: "415px" }}
            >
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
                color="primary"
                style={{ position: "absolute", right: "0", top: "-3px" }}
              >
                <CloseOutlined color="primary" />
              </IconButton>
              <div>
                <div className="demo-list">
                  <ul>
                    <li>
                      <a href="#about_us">About Us </a>
                    </li>
                    <li>
                      <a href="/#" data-toggle="modal" data-target="#mymodal">
                        Contact us{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/#" data-toggle="modal" data-target="#mymodal">
                        <span>Luxury Homes</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" data-toggle="modal" data-target="#mymodal">
                        <span>Ready Homes</span>
                      </a>
                    </li>
                    <li>
                      <a className="phone_url" href="tel:07949130465">
                        <span className="phone_no">
                          {data?.phone || STATIC_PHONE}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
