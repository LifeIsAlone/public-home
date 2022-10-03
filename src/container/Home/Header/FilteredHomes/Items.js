import React from 'react';
import styled from 'styled-components';
import setMapCenter from '../../../../hooks/setMapCenter';

export default function Items({ item }) {
    const setCenter = setMapCenter();
    const { address, name, sells, lat, lng } = item;
    const handleClick = (e) => {
        setCenter({ lat, lng });
        // setCenterByPosition(state.map.data, position);
    };
    return (
        <StyledLi key={name} onClick={handleClick}>
            <Title>
                <div>{address}</div>
                <div>주택 이름: {name}</div>
            </Title>
            <Desc>
                <div>{sells.length} 세대</div>
            </Desc>
        </StyledLi>
    );
}

const StyledLi = styled.li`
    cursor: pointer;
    list-style: none;
    display: list-item;
    padding: 1rem;
    border-bottom: solid #dededeaa 1.5px;
    &:hover {
        background: #98b3f6aa;
    }
`;
const Title = styled.div`
    font-weight: 300;
    div:first-child {
        font-size: 19px;
        font-weight: 540;
    }
`;

const Desc = styled.div`
    color: grey;
    font-size: 15px;
`;
