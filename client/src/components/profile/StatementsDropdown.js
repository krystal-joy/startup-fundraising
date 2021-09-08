import React from 'react'
import {
    makeStyles,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
    pdfFileButtons: {
        '& > *': {
            marginRight: '1em',
            textTransform: 'none'
        },
    },
}));

function StatementsDropdown(props) {
    const classes = useStyles();
    const { year, files } = props;

    return (
        <Accordion>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>{year}</Typography>
            </AccordionSummary>

            {/* Dropdown */}
            <AccordionDetails className={classes.pdfFileButtons}>
                {
                    files.map((file)=>(
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            startIcon={<InsertDriveFileOutlinedIcon />}
                            target="_blank"
                            href={file.url}>
                            {file.name}
                        </Button>
                    ))
                }
            </AccordionDetails>
        </Accordion>
    )
}

export default StatementsDropdown
