import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Description from './Description';
import PitchDeck from './PitchDeck';
import FinancialStatements from './FinancialStatements';
import PersonalDetails from './PersonalDetails';
import Investors from './Investors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function ContentTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    // props
    const { 
        name,
        email,
        role,
        description,
        companyName,
        investmentRequired 
    } = props.user;

    // Handle Tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    {/* Common Tabs */}
                    <Tab label="Description" />
                    <Tab label="Pitch Deck" />
                    <Tab label="Financial Statements" />

                    {/* Only Admin Accessed Tabs */}
                    {
                        (role === 'admin') && (
                            <Tab label="Personal Details" />
                        )
                    }

                    {/* Only User Accessed Tabs */}
                    {
                        (role === 'user') && (
                            [
                                <Tab label="Personal Details" key={3} />,
                                <Tab label="Investors" key={4} />
                            ]
                        )
                    }

                </Tabs>
            </Paper>

            {/* Tab Panels */}
            <Description
                value={value}
                index={0}
                user={{
                    role,
                    description,
                    companyName,
                    investmentRequired
                }} 
            />
            <PitchDeck value={value} index={1} />
            <FinancialStatements value={value} index={2} role={role} />

            {/* Only Admin accessed tab panel */}
            {
                (role === 'admin') && (
                    <PersonalDetails value={value} index={3} user={{name, email}} />
                )
            }

            {/* Only user accessed tab panel */}
            {
                (role === 'user') && (
                    [
                        <PersonalDetails value={value} index={3} user={{name, email}} />,
                        <Investors value={value} index={4} />
                    ]
                )
            }
        </div>
    )
}

export default ContentTabs
