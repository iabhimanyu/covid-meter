import React from "react";
import styles from './Cards.module.css';
import { Card,CardContent,Typography, Grid,Box,sizing } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data: {confirmed, recovered, deaths,lastUpdate} }) => {
    console.log(confirmed);
    if(!confirmed){
      return 'Loading...';
  }
    return (
      <div className={styles.container}>
        <Grid container spacing={4} justify="center">
            <Grid item component={Card}xs={12}md={3}className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" font-weight= "bold" gutterBottom> <Box fontWeight="fontWeightBold" m={1}>Cases</Box></Typography>
                    <Typography variant="h5">
                        <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                        />
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Total Case</Typography>
                </CardContent>
        </Grid>
        <Grid item component={Card}xs={12}md={3}className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom><Box fontWeight="fontWeightBold" m={1}>Recovered</Box></Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recovered Case</Typography>
                </CardContent>
        </Grid>
        <Grid item component={Card}xs={12}md={3}className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom><Box fontWeight="fontWeightBold" m={1}>Deaths</Box></Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Death</Typography>
                </CardContent>
        </Grid>

        </Grid>
      </div>
    );
  };
export default Cards;