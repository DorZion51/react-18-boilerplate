import { Card } from '@mui/material';
import { FC } from 'react';
import { SomeScreenLayout } from './SomeScreenLayout';

interface SomeScreenProps {
    someProps: number;
}

export const SomeScreen: FC<SomeScreenProps> = (props) => {
    const { someProps } = props;

    return (
        <SomeScreenLayout>
            <Card>000000000</Card>
            <Card>111111111</Card>
            <Card>222222222</Card>
            <Card>333333333</Card>
            <Card>444444444</Card>
            <Card>555555555</Card>
            <Card>666666666</Card>
            <Card>{someProps}</Card>
        </SomeScreenLayout>
    );
};
