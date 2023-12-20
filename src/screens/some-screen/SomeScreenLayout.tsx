import { Grid } from '@mui/material';
import { FC } from 'react';

export const SomeScreenLayout: FC<any> = ({ children }) => (
    <div style={{ display: 'flex' }}>
        {children[0]}
        <Grid container padding={2} spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {children[1]}
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3}>
                {children[2]}
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
                {children[3]}
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                {children[4]}
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
                {children[5]}
            </Grid>
            <Grid container item xs={6} sm={6} md={6} lg={6} direction="row" rowSpacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    {children[6]}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    {children[7]}
                </Grid>
            </Grid>
        </Grid>
    </div>
);
