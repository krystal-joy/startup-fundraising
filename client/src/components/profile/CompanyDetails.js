import React from 'react'
import {
    makeStyles,
    Avatar,
    Typography,
    Grid,
    Chip,
    IconButton,
    Button
} from '@material-ui/core';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import { green, red, amber } from '@material-ui/core/colors'



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        boxShadow: theme.shadows[3],
        padding: '1em 3em',
        background: '#ffffff'
    },
    content: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    details: {
        display: 'flex'
    },
    detailsText: {
        marginLeft: '5px'
    },
    tag: {
        margin: '1em 1em 0 0'
    },
    cinNumber: {
        marginLeft: '1em',
        fontWeight: 'bold'
    },
    mainTop: {
        display: 'flex',
    },
    companyName: {
        flexGrow: 1
    },
    pending: {
        color: theme.palette.getContrastText(amber[500]),
        backgroundColor: amber[500],
        "&:hover": {
          backgroundColor: amber[600],
          "@media (hover: none)": {
            backgroundColor: amber[500]
          }
        }
      },
    approve: {
        color: theme.palette.getContrastText(green[600]),
        backgroundColor: green[600],
        "&:hover": {
          backgroundColor: green[800],
          "@media (hover: none)": {
            backgroundColor: green[600]
          }
        }
      },
    reject: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        "&:hover": {
          backgroundColor: red[700],
          "@media (hover: none)": {
            backgroundColor: red[500]
          }
        }
      },
    operations: {
        '& > *': {
            marginRight: theme.spacing(1),
        },
    }
}));

function CompanyDetails(props) {
    const classes = useStyles();

    const {
        role,
        companyName,
        CINNumber,
        companyEmail,
        companyPhone,
        companyAddress,
        tags
    } = props.user;

    return (
        <div className={classes.root}>
            {/* Company Logo */}
            <Avatar alt="Company logo" src="/static/images/avatar/1.jpg" className={classes.large} />

            {/* Company Details */}
            <div className={classes.content}>
                <div className={classes.mainTop}>
                    <Typography variant="h5" gutterBottom className={classes.companyName}>
                        <span>{companyName}</span>
                        <Chip
                            variant="outlined"
                            color="primary"
                            label={"CIN Number: " + CINNumber}
                            className={classes.cinNumber}
                        />
                    </Typography>


                    {
                        role === 'user' && (
                            <div className={classes.operations}>
                                <Chip label="Status: Pending" className={classes.pending} />
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </div>
                        )
                    }
                    {
                        role === 'admin' && (
                            <div className={classes.operations}>
                                <Button variant="contained" size="small" className={classes.approve}>
                                    Approve
                                </Button>
                                <Button variant="contained" size="small" className={classes.reject}>
                                    Reject
                                </Button>
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </div>
                        )
                    }
                </div>

                <Grid container spacing={2}>
                    {/* Email */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="textSecondary" gutterBottom className={classes.details}>
                            <MailOutlineIcon fontSize="small" />
                            <span className={classes.detailsText}>email: {companyEmail}</span>
                        </Typography>

                    </Grid>

                    {/* Phone */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="textSecondary" gutterBottom className={classes.details}>
                            <PhoneIcon fontSize="small" />
                            <span className={classes.detailsText}>phone: {companyPhone}</span>
                        </Typography>
                    </Grid>

                    {/* Location */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="textSecondary" gutterBottom className={classes.details}>
                            <LocationOnIcon fontSize="small" />
                            <span className={classes.detailsText}>{companyAddress}</span>
                        </Typography>
                    </Grid>
                </Grid>

                {/* Tags */}
                {
                    tags.map((tag) =>
                        <Chip variant="outlined" color="primary" size="small" label={tag} className={classes.tag} />
                    )
                }

            </div>
        </div>
    )
}

export default CompanyDetails
