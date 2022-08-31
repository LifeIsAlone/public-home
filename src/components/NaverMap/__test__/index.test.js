import { render, screen } from '@testing-library/react';
import NaverMap from '../index.js';

beforeEach(() => {
    jest.clearAllMocks();
});

describe('NaverMap 컴포넌트 테스트', () => {
    it('NaverMap Map 태그가 있는가?', () => {
        const { container } = render(<NaverMap />);
        expect(container.querySelector('#map')).toBeInTheDocument();
    });
});
