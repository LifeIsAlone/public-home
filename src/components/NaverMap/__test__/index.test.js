import React from 'react';
import NaverTestWrapper from '../NaverTestWrapper';
import NaverMap from '..';
import { render, waitFor } from '@testing-library/react';

const WrappingComponent = () => (
    <NaverTestWrapper>
        <NaverMap></NaverMap>
    </NaverTestWrapper>
);

beforeEach(() => {
    jest.clearAllMocks();
});

describe('NaverMap 컴포넌트 테스트', () => {
    it('#map Div가 있는가?', async () => {
        const { getByTestId } = render(<WrappingComponent />);
        await waitFor(() => expect(getByTestId('map')).toBeInTheDocument());
    });
});
