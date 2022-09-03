import { render, screen } from '@testing-library/react';
import Marker from '../Marker';
import Map from '..';

/**
 * @TODO : 좀 더 확실한 명세를 테스트코드를 작성할 것
 */

describe('Naver마커 테스트', () => {
    const Wrapper = ({ children }) => <Map>{children}</Map>;
    it('마커 렌더링테스트', () => {
        render(
            <Wrapper>
                <Marker />
            </Wrapper>,
        );
    });
});
