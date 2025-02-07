import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body1" align="left">
      Copyright &#169; {new Date().getFullYear()} SAVA
    </Typography>
  );
}

function FooterSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.footerContainer}>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} lg={4} md={12}>
            <Box mt={12} align="left">
              <Typography>
                <img src="assests/images/SAVA.png" />
              </Typography>
              <Typography variant="h5" className={classes.description}>
                We source Content Creators as Interns to Startups. Sava is a platform that allows
                startups to hire Interns Fast. Crazy Fast. We have recently helped companies like
                Angel Broking, GoMechanic and D2C in hiring Interns
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box align="left" mt={12}>
              <Typography variant="h4">Explore</Typography>
              <Box mt={3} className={classes.TextLinks}>
                <Typography gutterBottom>Home</Typography>
                <Typography gutterBottom>For Startups</Typography>
                <Typography gutterBottom>Community</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box align="left" mt={12}>
              <Typography variant="h4">About</Typography>
              <Box mt={3} className={classes.TextLinks}>
                <Typography gutterBottom>Privacy & Policy</Typography>
                <Typography gutterBottom>Terms & Conditions</Typography>
                <Typography gutterBottom>Support</Typography>
                <Typography>Career</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box align="left" mt={12}>
              <Typography variant="h4">Community</Typography>
              <Box mt={3} className={classes.TextLinks}>
                <Typography gutterBottom>Refer a Friend </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box align="left" mt={12}>
              <Typography variant="h4">Help</Typography>
              <Box mt={3} className={classes.TextLinks}>
                <Typography gutterBottom>FAQ </Typography>
                <Typography>Support</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={6} align="left">
          <Copyright className={classes.Copyright} />
        </Box>
      </Container>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 450,
    background: theme.palette.primary.footer.background,
    [theme.breakpoints.down("md")]: {
      "& .MuiGrid-grid-md-2": {
        maxWidth: "none",
      },
      "& .MuiBox-root-207": {
        width: "100%",
      },
    },
    paddingBottom: theme.spacing(2),
  },
  footerContainer: {
    maxWidth: "85%",
    color: "#E6E6E6",
  },
  description: {
    marginTop: theme.spacing(3),
    lineHeight: "34px",
    textAlign: "left",
    fontFamily: "Inter",
    fontSize: "14px",
    color: "#E6E6E6",
  },
  TextLinks: {
    textAlign: "left",
    color: "#E6E6E6",
  },
}));

export default FooterSection;
