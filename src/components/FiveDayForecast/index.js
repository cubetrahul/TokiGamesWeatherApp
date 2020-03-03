import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

import { formatTime } from '../../utils/helpers';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const HeadDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px;
`;

function FiveDayForecast({ fiveDayForecastData, selectedLocation }) {
  return (
    <Wrapper>
      <HeadDiv>{selectedLocation}<br />{(fiveDayForecastData && fiveDayForecastData.Headline) ? fiveDayForecastData.Headline.Text : ""}</HeadDiv>
      <Row gutter={8} justify="center">
        {(fiveDayForecastData.DailyForecasts || []).map(forecastData => (
          <Col span={4} key={forecastData.EpochDate}>
            <Card title={formatTime(forecastData.EpochDate, 'MMMM Do (ddd)')}>
              <div><b>Temperature</b></div>
              <div>
                <span><b>Min:</b> {forecastData.Temperature.Minimum.Value}{forecastData.Temperature.Minimum.Unit}</span>
                &nbsp;&nbsp;&nbsp;
                <span><b>Max:</b> {forecastData.Temperature.Maximum.Value}{forecastData.Temperature.Maximum.Unit}</span>
              </div>
              <div style={{paddingTop: 10}}>
                <div><b>Day</b></div>
                <div><img src={`/icons/${forecastData.Day.Icon.toString().padStart(2, "0")}.png`} alt="" /></div>
                <div>{forecastData.Day.IconPhrase}</div>
              </div>
              <div style={{paddingTop: 10}}>
                <div><b>Night</b></div>
                <div><img src={`/icons/${forecastData.Night.Icon.toString().padStart(2, "0")}.png`} alt="" /></div>
                <div>{forecastData.Night.IconPhrase}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}

FiveDayForecast.propTypes = {
  fiveDayForecastData: PropTypes.object.isRequired,
  selectedLocation: PropTypes.string.isRequired,
};

export default FiveDayForecast;
